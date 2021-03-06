# Запуск и работа в Docker окружении

Проект состоит из трех базовых компонентов:

1. Исходных код запускаемого приложения
2. Docker контейнер
3. Make как таксменеджер

## Развертывание приложение

После клонирования репозитория, при первом запуске приложения,
необходимо сконфигурировать локальное окружение.

**1. Скопировать локальный файл конфигурации окружения:**

```bash
$ cp .env.example .env
```

**2. Получить данные о текущем пользователи:**

```bash
$ id
uid=502(ikaravaev) gid=20(staff) groups=20(staff), ...
```

**3. Получить данные о наличии текущей прокси сети для nginx:**

```bash
$ docker network ls
NETWORK ID          NAME                      DRIVER              SCOPE
0e4eb3bcdf73        bridge                    bridge              local
f84febde75f2        host                      host                local
adadd2d345ba        ngproxy                   bridge              local
3f13f16c3697        none                      null                local
```

**4. Открыть для редактирования локальный файл конфигурации окружения `.env`
и актуализировать конфигурацию для работы в вашем окружении:**

- Прописать данные о текущем пользователе в гостевую операционную систему:

```dotenv
# Host OS user id & user group id
UID=502  # id -> uid=502(ikaravaev)
GID=20   # id -> gid=20(staff)
```

> В процессе конфигурации под MacOS GID необходимо указать большое
> произвольное число (например 2000: 20 + 00), группа пользователя прокидывается
> в контейнер по умолчанию, но при совпадении идентификатора GID будет
> получена ошибка при старте контейнера.

- Прописать данные о сети, в которой находится nginx-прокси:

```dotenv
# Docker External Network name for web services
EXTERNAL_NETWORK_NAME=ngproxy
```

> При использовании внешнего контейнера с nginx-прокси для разработчика:
> https://bitbucket.org/OlegChulakovStudio/development.main/src/master/
> в docker-compose.yml указан сеть ngproxy.

- Прописать переменные окружения уровня приложения.

**5. Запустить задание на сборку приложения:**

На момент запуска сборки, предполагается, что окружение настроено

```bash
$ make build
```

> Процедура выполнит:
>
> - Установка зависимостей
> - развертывание Build окружения
> - запуск контейнера в prod режиме

**6. Настройка файла hosts:**

В сборке отсутствует автоматическая публикация созданных хостов
на локальном компьютере. Поэтому следующим шагом является добавление
созданных хостов в файле `/etc/hosts`, чтобы браузер начал открывать
запущенное в докере приложение.

```
...
127.0.0.0       chulakov-template.lh
...
```

## Работа с Make таскменеджером

Утилита позволяет составлять задания с группировкой списка выполняемых команд
с управлением зависимыми между командами и использованием переменных окружения.

В пакет приложения входит ряд команд, позволяющих быстро работать с контейнером
и выполнять ряд часто используемых задач. При этом остается возможность повлиять
на содержимое задач и при необходимости добавить новые.

**Список команд для сборки:**

- **install:** (`up`) установка node_modules зависимостей приложения
- **build:** (`install`) полная сборка приложения
- **start:** запуск сборки проекта для продакшен сервера
- **dev:** запуск сборки в режиме разработки
- **inspect:** запуск сборки для дебага SSR

**Список команд для работы с сервисами:**

- **up:** Запуск контейнера
- **down:** Остановка контейнера
- **shell:** (`up`) Открыть консоль приложения с node.js

## Переменные окружения уровня приложения

В текущей реализации используется настройка окружения на уровне контейнера.
Для модификации и расширения списка переменных окружения необходимо указать
новую переменную в файле `.env.example`, продублировать в локальном `.env`
и передать необходимые переменные внутрь контейнера через `docker-compose.yml`.

Для добавления переменной окружения необходимо:

- Переменная окружения указывается в файле `.env` в секции после комментария:
  `# Web Application variables`

- Передача переменной окружения осуществляется в сервисе в разделе `environment`

```yaml
services:
  # Applicaton container with PHP-FPM only
  &app-service app: &app-service-template
    ...
    environment: &app-service-envs
      VIRTUAL_HOST: "${VIRTUAL_HOST}"
      API_URL: "${API_URL}"
      PORT: "${PORT}"
      NEXT_TELEMETRY_DISABLED: "${NEXT_TELEMETRY_DISABLED}"
      ...
```

В переменные окружения ДОЛЖНЫ помещаться ВСЕ приватные данные, такие как ключи интеграции
с внешними сервисами и любая конфигурация зависимая от локального окружения.
