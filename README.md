# Nude — Romantic Dating App (Frontend)

## 🔹 Tech Stack

- React, TypeScript, Vite
- Radix UI, CSS Modules
- Storybook для компонентов
- Node.js 20+, NPM

## 🔹 Getting Started

1. Клонируем репозиторий:
   `git clone https://github.com/velesfight/intership-project.git`

2. Создаем файл конфигурации .env с переменной API URL:
   `echo "VITE_API_URL_BASE='https://dev-back-nude-sdhf43sd5f-v2.ghfls.ru'" > .env`
3. `npm i`
4. `npm run dev`

## My Contribution

В проекте я работала над фронтенд-компонентами и интеграцией с API. Мой вклад включал:

### 1. Toast Component

Разработала UI компонент Toast с разными вариантами (success, failed, simpleLike, superLike)
Настроила анимацию появления и скрытия через motion
Интегрировала i18n для текстов уведомлений
Создала Storybook сторис для тестирования компонента
Использовала clsx и CSS Modules для динамического управления стилями
Организовала структуру компонента: constants, stories, types, ui

### 2. Router & AuthGuard

Настроила основной Router с разделением на публичные и приватные маршруты
Реализовала редиректы для автоматического перенаправления с корня на страницу входа или ленты (Feed)
Интегрировала маршруты с константами пути (Path) для централизованного управления URL
Создала компонент AuthGuard, который проверяет доступ к приватным и публичным маршрутам

### 3. API Integration

Настроила экземпляры API клиента (publicApi и api) с базовым URL и таймаутом (BASE_URL, DEFAULT_TIMEOUT)
Реализовала интерсепторы запросов и ответов для:
Подстановки Authorization токена для авторизованных пользователей
Проверки истечения токена и очистки глобального состояния (useAppStore)
Обработки ошибок HTTP (например, 401 Unauthorized)
Обеспечила разделение публичных и приватных запросов

## Требования

- NodeJS 20+, NPM
- [рекомендуемые расширения для VSCode](.vscode/extensions.json)
