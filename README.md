# Nude - приложение для романтических знакомств

- [Дев контур](https://dev.app.nude.web-sgfbefef-v2.ghfls.ru/)
- [Репо](https://gitlab.ghfls.ru/root/nude_web_v2)
- [Дизайн](https://www.figma.com/design/Zka6UEdIJUzNOim7sNSZtG/Nude-WebApp?node-id=59-1824&t=Pwd9ZAa1oE2GoBSs-0)
- [Сваггер](https://dev-back-nude-sdhf43sd5f-v2.ghfls.ru/docs)
- [Описание](https://wiki.yandex.ru/homepage/nude/product-strategy/mvp-1/opisanie-komponentov-nude-web/)

## Стэк

- Typescript, Vite
- React 19, [шпаргалка по новым фичам](https://www.epicreact.dev/react-19-cheatsheet)
- CSS модули с [современными фичами](https://preset-env.cssdb.org/features/#stage-2)
- React router: клиентский роутинг
- React query & axios: взаимодействие с api
- react-hook-form & zod: формы и валидация
- Zustand: упраление состоянием
- Radix UI primitives: база для сложных компонентов
- см. другие зависимости в [`package.json`](package.json)

## Методологии и соглашения

- [FSD](https://feature-sliced.design/ru/)
- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- Названия веток в git: `[type]/[short-description]`, возможные типы:
  - `feat` добавляет функциональность для конечного пользователя
  - `refactor` изменения в коде приложения, не добавляющие функциональность и не исправляющие баги
  - `bugfix`
  - `hotfix` исправления на продакшене
  - `chore` изменения, не влияющие на код приложения (зависимости/конфиги/CI/скрипты и пр.)
  - `docs`

- CSS Modules: максимально используем классы, без сложных селекторов, чтобы специфичность была `0 1 0` (можно добавлять псевдоклассы)
- mobile first верстка

## Требования

- NodeJS, NPM
- IDE:
  - с поддержкой LSP
  - с форматированием кода на сейв с помощью prettier
- с плагинами для eslint, stylelint ([рекомендуемые расширения для vscode](.vscode/extensions.json))
- Терминал для использования Git

## Как запустить

1. `git clone https://gitlab.ghfls.ru/root/nude_web_v2`
2. в директории проекта создать env файл с переменной, которая содержит api url: `echo "VITE_API_URL_BASE = 'https://dev-back-nude-sdhf43sd5f-v2.ghfls.ru'" > .env`
3. `npm i`
4. `npm run dev`

см. другие скрипты в [`package.json`](package.json)

Рекомендуется использовать ту же версию Typescript в вашей IDE, что и в проекте. Например, для vscode:

```json
// .vscode/settings.json
{
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

Используем https для коммуникации с remote git repo, логин-пароль сохраняем в вашей IDE или связке ключей в вашей ОС, чтобы не набирать каждый раз.

## Git workflow

- `main` - только для прода
- `develop` - основная ветка, куда заливается вся работа - только через МР (Merge request)
- ветки создаем от `develop`, делаем коммиты, затем пуш, открываем МР, вливаем в `develop` после аппрува. Если работаете в своей ветке одни, можно делать rebase.

Желательно делать коммит и пуш в командной строке, чтобы видеть результат проверок.

## О проекте

### Пример структуры директории компонента

`api/`, `lib/`, `hooks/` - каждую функцию в отдельный файл

```
Component/
  api/
    index.ts
    useApiHook.ts
  lib/
    someFunction.ts
    someOtherFunction.ts
    index.ts
  hooks/
    index.ts
    useHook.ts
  model/
    index.ts
  constants/
    index.ts
  types/
    index.ts
  components/
    InnerComponent/
      ui/
        InnerComponent.tsx
        InnerComponent.module.css
        index.ts
      index.ts
  ui/
    Component.tsx
    Component.module.css
    index.ts
  index.ts
```

### CSS переменные

Переменные из [`~/shared/theme/spacing.css`](src/shared/theme/spacing.css) используем для:

- `--space` - `padding`, `gap`, `inset` если выполняет функцию паддинга
- `--border` - `border-width`
- `--radius` - `border-radius`
- без переменных - `margin`, `inline-size`, `block-size`

### SVG

Размеры и цвета svg должны задаваться в css, для этого нужно:

1. после добавления svg файлов в проект запустить скрипт `npm run optimize:svg` - помимо оптимизации он удалит атрибуты ширины и высоты, в результате svg станет responsive
2. вручную в коде svg поменять цвет на `currentColor` в нужном месте

### Assets

- [`~/shared/assets`](src/shared/assets): основная директория для ассетов, чаще всего нужны следующие 2 варианта импорта:
  - импорт svg как реакт компонента: `import GithubIcon from '~/shared/assets/icons/github.svg'`
  - импорт svg как url строки: `import githubIconUrl from '~/shared/assets/icons/github.svg?url'`
  - импорт не svg возвращает url: `import logoUrl from '~/shared/assets/logo/brand.png'`
  - [дока](https://vite.dev/guide/assets.html)
- [`public`](public): на практике используется редко. Для чего эта директория и как правильно ссылаться на файлы из нее [см. доку](https://vite.dev/guide/assets.html#the-public-directory)

### Обновление API

1. запустить `npm run api:generate`, который обновит файл [`~/shared/api/generate.ts`](src/shared/api/generate.ts)
2. посмотреть, что изменилось в этом файле
3. если требуется, отразить измения в коде, взаимодействующем с api
4. проверить как работает приложение и `npm run typecheck`

### package-lock

package-lock.json не удалять!
