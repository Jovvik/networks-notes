Object.assign(window.search, {"doc_urls":["lecture_1.html#Лекция-1","lecture_1.html#Введение","lecture_1.html#Направление-пакетов","lecture_1.html#congestion","lecture_1.html#Протоколы","lecture_1.html#Уровни","lecture_1.html#Модель-пяти-слоев","lecture_1.html#Модель-isoosi-ЭМВОС"],"index":{"documentStore":{"docInfo":{"0":{"body":0,"breadcrumbs":2,"title":1},"1":{"body":21,"breadcrumbs":1,"title":0},"2":{"body":5,"breadcrumbs":1,"title":0},"3":{"body":2,"breadcrumbs":2,"title":1},"4":{"body":16,"breadcrumbs":1,"title":0},"5":{"body":7,"breadcrumbs":1,"title":0},"6":{"body":21,"breadcrumbs":1,"title":0},"7":{"body":20,"breadcrumbs":2,"title":1}},"docs":{"0":{"body":"","breadcrumbs":"Лекция 1 » Лекция 1","id":"0","title":"Лекция 1"},"1":{"body":"Мы будем обсуждать общие идеи как работают сети сейчас, историю часто будем скипать. Мы хотим, чтобы компьютер A и компьютер B могли обмениваться сообщениями между собой. Простейшее решение задачи — соединить два компьютера проводом и по проводу гонять сообщения. Изначально так и было, но компьютеров становилось все больше. Проводить \\(n^2\\) проводов, чтобы соединить все компьютеры попарно, стало невозможным. Можно сделать так, как делалось раньше в телефонах. Компьютер A говорит, что хочет поговорить с компьютером B. Промежуточный узел замыкает провод компьютера A на провод, идущий к компьютеру B. У такого подхода есть проблема — число проводов в узле ограничено. Кроме того, канал часто простаивает — компьютеры не отправляют много сообщений подряд. Мы хотим, чтобы по каждому проводу могло общаться много устройств. Разобьем сообщение на небольшие куски (пакеты) (1-1.5кБ). Компьютер A отправляет кусок некоторому узлу C, тот передает дальше, и так далее, пока кусок. Главное преимущество подхода — мы используем каналы только тогда, когда передаем данные. В интернете есть hosts (хосты), которые общаются, и \"коробочки\", которые пересылают данные, коробочки соединены linkами. Коробочки бывают разных видов — роутеры, свитчи, маршрутизаторы, коммутаторы - о них мы поговорим позже. Интернет, это не \"штука, которая есть\", это множество независимых сетей, которые общаются друг с другом. Минимальное время передачи пакета — число узлов в пути * размер пакета / пропускную способность канала. Данные между узлами передаются с помощью различных соединений: Витая пара — два медных провода. 100 Мб/с - 10 Гб/с. Коаксиальный провод - в РФ не встречается, в Европе и США распространены (legacy). Оптоволокно — стекло, проводящее световой сигнал. 10-100 Гб/с. По воздуху: WiFi: 10-100 Мб/с. Мобильные сети, например 4G: 10 Мб/с. Bluetooth Спутник: 45 Мб/с.","breadcrumbs":"Лекция 1 » Введение","id":"1","title":"Введение"},"2":{"body":"Есть две задачи: forwarding и routing . Forwarding - устройство локально по таблице маршрутизации решает, куда переслать пакет. Routing - глобальная задача построения таблиц маршрутизации. Routing очень сложен, т.к. устройства могут отваливаться, провайдеры не хотят делиться устройством своей сети, есть разные целевые функции, которые мы хотим оптимизировать. С картой всех компьютеров мы могли бы написать Дейкстру, но собрать карту всего интернета невозможно.","breadcrumbs":"Лекция 1 » Направление пакетов","id":"2","title":"Направление пакетов"},"3":{"body":"В роутер может прийти несколько пакетов одновременно, они кладутся в некоторый буфер. Буфер конечен и если место кончилось, пакеты дропаются, происходит congestion. Большая часть потерь пакетов происходит из-за этого. Главное отличие дорогих роутеров от дешевых заключается как раз в размере буфера. Хочется контролировать congestion - будем слать пакеты, пока они не начинают дропаться. При дропе будем понижать скорость посылки. Если все люди используют один и тот же алгоритм, то использование канала будет честным. Но кто-то плохой может не ограничивать свою скорость и забить канал своими пакетами. С течением курса мы будем понимать, что многое в интернете построено только на доверии. Но плохим людям вручную могут отключить интернет или даже посадить.","breadcrumbs":"Лекция 1 » Congestion","id":"3","title":"Congestion"},"4":{"body":"Протоколы описываются в документах RFC (Request for Comments) умными людьми. Координирует новые протоколы в основном IETF (Internet Engineering Task Force). Умные люди создают RFC Draft, который может меняться, его обсуждают ещё более умные люди и, возможно, принимают. Есть ещё также ISO (International Organization for Standartization), у них крутые стандарты, но за них нужно платить и они часто оторваны от жизни. Изначально протоколами занимались американские военные, а они очень любят аббревиатуры, например, HTTP или TCP. До сих пор все так и называют новые протоколы.","breadcrumbs":"Лекция 1 » Протоколы","id":"4","title":"Протоколы"},"5":{"body":"Когда браузер хочет открыть страничку, он не хочет думать о битиках, которые идут по проводу. Он просто создает пакет и говорит ОС отправить его на сервер. Таким образом образовываются слои абстракции. Пример: HTTP пакет кладется в TCP поток. TCP разбивает данные на пакеты и заворачивает их в IP пакеты. IP пакеты упаковываются в WiFi и передаются по радио. WiFi точка принимает пакет, смотрит на пакет, видит, кому его надо передать и передает следующему узлу.","breadcrumbs":"Лекция 1 » Уровни","id":"5","title":"Уровни"},"6":{"body":"Application - как приложение получает данные (HTTP, DNS, IMAP) Transport - как запрос передается целиком, не повреждается и т.д. (TCP, UDP) Network - как пакеты передаются по сети (IP, больше ничего (за исключением локальных сетей)) Link - как логически передать биты (Ethenet, WiFi, PPP) Physical - как физически передать биты (WiFI) hourglass IP работает поверх всяких link протоколов, над IP работают TCP и UDP, над которыми уже все происходит.","breadcrumbs":"Лекция 1 » Модель пяти слоев","id":"6","title":"Модель пяти слоев"},"7":{"body":"L7: application L6: presentation - здесь происходит шифрование HTTPS. L5: session - открытие и закрытие соединения между клиентами. L4: transport L3: network L2: link L1: physical Эта модель была создана до интернета, поэтому она не совсем соответствует инженерной реальности. Важно запомнить номера уровней, их часто используют. Все эти модели всегда представляют реальность. Например, VPN работает поверх L4, но предоставляет протокол L2. Можно тогда скопировать всю иерархию и поставить копию поверх исходной, тогда схема похожа на реальность. Кроме того, иногда нижние слои смотрят на верхние, например L2 смотрит на IP-адрес.","breadcrumbs":"Лекция 1 » Модель ISO/OSI (ЭМВОС)","id":"7","title":"Модель ISO/OSI (ЭМВОС)"}},"length":8,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"1":{".":{"5":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"0":{"0":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}},"df":1,"docs":{"1":{"tf":2.0}}},"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}},"4":{"5":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}},"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":2,"docs":{"6":{"tf":1.0},"7":{"tf":1.0}}},"df":0,"docs":{}}}}}},"b":{"df":1,"docs":{"1":{"tf":1.7320508075688772}},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}}},"c":{"df":1,"docs":{"1":{"tf":1.0}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}}}}}}},"d":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}},"r":{"a":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}}},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":4,"docs":{"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"f":{"df":1,"docs":{"4":{"tf":1.0}}}}},"m":{"a":{"df":0,"docs":{},"p":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}},"p":{"df":3,"docs":{"5":{"tf":1.4142135623730951},"6":{"tf":1.7320508075688772},"7":{"tf":1.0}}},"s":{"df":0,"docs":{},"o":{"/":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"df":1,"docs":{"4":{"tf":1.0}}}}},"l":{"1":{"df":1,"docs":{"7":{"tf":1.0}}},"2":{"df":1,"docs":{"7":{"tf":1.7320508075688772}}},"3":{"df":1,"docs":{"7":{"tf":1.0}}},"4":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}},"5":{"df":1,"docs":{"7":{"tf":1.0}}},"6":{"df":1,"docs":{"7":{"tf":1.0}}},"7":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"a":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":3,"docs":{"1":{"tf":1.0},"6":{"tf":1.4142135623730951},"7":{"tf":1.0}}}}}},"n":{"^":{"2":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":2,"docs":{"6":{"tf":1.0},"7":{"tf":1.0}}}}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}},"p":{"df":0,"docs":{},"h":{"df":0,"docs":{},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"c":{"df":2,"docs":{"6":{"tf":1.0},"7":{"tf":1.0}}},"df":0,"docs":{}}}}},"p":{"df":0,"docs":{},"p":{"df":1,"docs":{"6":{"tf":1.0}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"f":{"c":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}},"t":{"a":{"df":0,"docs":{},"n":{"d":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"t":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"k":{"df":1,"docs":{"4":{"tf":1.0}}}}},"c":{"df":0,"docs":{},"p":{"df":3,"docs":{"4":{"tf":1.0},"5":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":2,"docs":{"6":{"tf":1.0},"7":{"tf":1.0}}}}}}}}},"df":0,"docs":{}}},"u":{"d":{"df":0,"docs":{},"p":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"v":{"df":0,"docs":{},"p":{"df":0,"docs":{},"n":{"df":1,"docs":{"7":{"tf":1.0}}}}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":3,"docs":{"1":{"tf":1.0},"5":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951}}}}}}}},"breadcrumbs":{"root":{"1":{".":{"5":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"0":{"0":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}},"df":1,"docs":{"1":{"tf":2.0}}},"df":8,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.4142135623730951},"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0}}},"4":{"5":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}},"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":2,"docs":{"6":{"tf":1.0},"7":{"tf":1.0}}},"df":0,"docs":{}}}}}},"b":{"df":1,"docs":{"1":{"tf":1.7320508075688772}},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}}},"c":{"df":1,"docs":{"1":{"tf":1.0}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":2.0}}}}}}}}},"d":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}},"r":{"a":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}}},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":4,"docs":{"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"f":{"df":1,"docs":{"4":{"tf":1.0}}}}},"m":{"a":{"df":0,"docs":{},"p":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}},"p":{"df":3,"docs":{"5":{"tf":1.4142135623730951},"6":{"tf":1.7320508075688772},"7":{"tf":1.0}}},"s":{"df":0,"docs":{},"o":{"/":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}}}}},"df":1,"docs":{"4":{"tf":1.0}}}}},"l":{"1":{"df":1,"docs":{"7":{"tf":1.0}}},"2":{"df":1,"docs":{"7":{"tf":1.7320508075688772}}},"3":{"df":1,"docs":{"7":{"tf":1.0}}},"4":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}},"5":{"df":1,"docs":{"7":{"tf":1.0}}},"6":{"df":1,"docs":{"7":{"tf":1.0}}},"7":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"a":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":3,"docs":{"1":{"tf":1.0},"6":{"tf":1.4142135623730951},"7":{"tf":1.0}}}}}},"n":{"^":{"2":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":2,"docs":{"6":{"tf":1.0},"7":{"tf":1.0}}}}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}},"p":{"df":0,"docs":{},"h":{"df":0,"docs":{},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"c":{"df":2,"docs":{"6":{"tf":1.0},"7":{"tf":1.0}}},"df":0,"docs":{}}}}},"p":{"df":0,"docs":{},"p":{"df":1,"docs":{"6":{"tf":1.0}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"f":{"c":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}},"t":{"a":{"df":0,"docs":{},"n":{"d":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"t":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"k":{"df":1,"docs":{"4":{"tf":1.0}}}}},"c":{"df":0,"docs":{},"p":{"df":3,"docs":{"4":{"tf":1.0},"5":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":2,"docs":{"6":{"tf":1.0},"7":{"tf":1.0}}}}}}}}},"df":0,"docs":{}}},"u":{"d":{"df":0,"docs":{},"p":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"v":{"df":0,"docs":{},"p":{"df":0,"docs":{},"n":{"df":1,"docs":{"7":{"tf":1.0}}}}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":3,"docs":{"1":{"tf":1.0},"5":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951}}}}}}}},"title":{"root":{"1":{"df":1,"docs":{"0":{"tf":1.0}}},"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"/":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});