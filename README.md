# Тестовое задание ReactBootcamp

React/Typescript приложение для показа погоды


## Проект на pages.github.com

https://1611lush.github.io/testRepo/




**Notes:**

1) Проект выполнен со стремлением к pixel-perfect, однако некоторые вещи можно и хотелось бы доработать в будущем. 
Сейчас из-за временного ограничения оставлен <input type="date"> со стандартным placeholder-ом (по макету в placeholder текст).
По ТЗ нельзя было использовать готовые решения, поэтому используется стилизованный список вместо селекта. Используется стилизованная прокрутка карточек погоды и прокрутка внутри выбора городов. 

2) Вместо styled компонентов используется единый css файл (такое решение выбрано из-за того, что одностраничный проект на мой взгляд позволяет использовать уникальные классы по БЭМ. Но можно было бы использовать и scss.

3) Были сомнения из-за структуры приложения. В перспективе стоит переписать и вынести fetch запросы.

4) Были небольшие сложности с typescript, потому что ранее не писала приложения на ts, вероятно этот момент в будущем также можно доработать.  

5) По ТЗ в первом блоке показывается прогноз на 7 дней. К сожалению, не успела уточнить, необходимо ли включать текущий день + неделю вперед, потому что АПИ отдает 8 дней. На данный момент оставлено 8 карточек. 




