import './App.css'

const services = [
  {
    number: '01',
    title: 'Потолки из ГКЛ',
    text: 'Одноуровневые и многоуровневые потолки, короба, ниши и конструкции под освещение.',
  },
  {
    number: '02',
    title: 'Потолки КНАУФ',
    text: 'Монтаж потолочных систем с точной разметкой и подготовкой под последующую отделку.',
  },
  {
    number: '03',
    title: 'Armstrong',
    text: 'Подвесные потолки для магазинов, офисов и коммерческих помещений.',
  },
  {
    number: '04',
    title: 'Грильято',
    text: 'Ячеистые потолки с учётом освещения, вентиляции и инженерных коммуникаций.',
  },
  {
    number: '05',
    title: 'Перегородки и облицовки',
    text: 'Конструкции из ГКЛ для квартир, магазинов, офисов и других объектов.',
  },
  {
    number: '06',
    title: 'Сложные конструкции',
    text: 'Ниши, короба, скрытая подсветка, многоуровневые решения и нестандартная геометрия.',
  },
]

const advantages = [
  ['01', 'Собственная бригада', 'Организуем монтаж и отвечаем за выполнение работ на объекте.'],
  ['02', 'Специализация на ГКЛ', 'Выполняем потолки, перегородки, облицовки, короба и ниши.'],
  ['03', 'Понятный расчёт', 'Согласовываем состав работ, материалы и сроки до начала монтажа.'],
  ['04', 'Гарантия 1 год', 'Предоставляем гарантию на выполненные монтажные работы.'],
]

function App() {
  return (
    <div className="site">
      <header className="header">
        <a className="logo" href="#top" aria-label="Диклан — монтаж потолков и конструкций из ГКЛ">
  <span className="logo-mark" aria-hidden="true">
    <i />
    <i />
  </span>

  <span className="logo-text">
    <strong>ДИКЛАН</strong>
    <small>ПОТОЛКИ И ГКЛ</small>
  </span>
</a>

        <nav className="nav">
          <a href="#services">Услуги</a>
          <a href="#about">О компании</a>
          <a href="#process">Как работаем</a>
          <a href="#contacts">Контакты</a>
                </nav>

        <div className="header-contacts">
          <a
            className="header-phone-button"
            href="tel:+79998777448"
            aria-label="Позвонить по номеру +7 999 877-74-48"
          >
            <span className="phone-icon" aria-hidden="true">☎</span>
            <span>+7 999 877-74-48</span>
          </a>

          <div className="messenger-row">
            <a
              className="messenger-icon telegram-icon"
              href="https://t.me/diklan_ru"
              target="_blank"
              rel="noreferrer"
              aria-label="Открыть Telegram Диклан"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21.6 3.4 18.3 20c-.25 1.17-.9 1.45-1.83.91l-5.03-3.7-2.43 2.34c-.27.27-.5.5-1.03.5l.37-5.12 9.32-8.42c.4-.37-.09-.58-.62-.21L5.54 13.6.57 12.04c-1.08-.34-1.1-1.08.23-1.6L20.2 2.88c.9-.34 1.68.21 1.4.52Z" />
              </svg>
            </a>

            <a
              className="messenger-action"
              href="https://t.me/diklan_ru"
              target="_blank"
              rel="noreferrer"
            >
              Написать в Telegram
            </a>
          </div>

          <div className="messenger-row">
            <a
              className="messenger-icon max-icon"
              href="https://max.ru/u/f9LHodD0cOL8ha1Ccf2HA9GbbVV9oAwt2mCpNeu0igOq8MiHbRgz8kdu11k"
              target="_blank"
              rel="noreferrer"
              aria-label="Открыть MAX Диклан"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.5a9.5 9.5 0 1 0 5.85 16.99L21 20.5l-1.03-3.18A9.47 9.47 0 0 0 12 2.5Zm-4.05 6.2h8.1a1.45 1.45 0 0 1 1.45 1.45v3.7a1.45 1.45 0 0 1-1.45 1.45h-4.2l-2.75 2.05v-2.05H7.95a1.45 1.45 0 0 1-1.45-1.45v-3.7A1.45 1.45 0 0 1 7.95 8.7Z" />
              </svg>
            </a>

            <a
              className="messenger-action"
              href="https://max.ru/u/f9LHodD0cOL8ha1Ccf2HA9GbbVV9oAwt2mCpNeu0igOq8MiHbRgz8kdu11k"
              target="_blank"
              rel="noreferrer"
            >
              Написать в MAX
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">МОСКВА • БЛИЖНЕЕ ПОДМОСКОВЬЕ</p>
            <h1>
              Точная геометрия.
              <span>Аккуратный монтаж.</span>
            </h1>
            <p className="hero-text">
              Монтаж потолков, перегородок и конструкций из ГКЛ для квартир,
              магазинов и коммерческих помещений.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#contacts">
                Рассчитать стоимость
              </a>
              <a className="button button-outline" href="#services">
                Смотреть услуги
              </a>
            </div>

            <div className="hero-meta">
              <span>Собственная бригада</span>
              <span>Гарантия 1 год</span>
              <span>Работа по договору</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-grid" />
            <div className="visual-card">
              <span className="visual-number">01</span>
              <span className="visual-label">ДИКЛАН</span>
              <p>Сильная основа<br />для современного пространства</p>
            </div>
            <div className="visual-line" />
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="section-heading">
            <p className="eyebrow">ЧТО МЫ ДЕЛАЕМ</p>
            <h2>Решения для потолков<br />и интерьеров</h2>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="card-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
               </article>
            ))}
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="about-intro">
            <p className="eyebrow">ПОЧЕМУ ДИКЛАН</p>
            <h2>Работа, в которой важны детали</h2>
            <p>
              Выполняем монтаж потолков и конструкций из ГКЛ для частных и
              коммерческих объектов в Москве и ближнем Подмосковье.
            </p>
          </div>

          <div className="advantages-grid">
            {advantages.map(([number, title, text]) => (
              <article className="advantage" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section portfolio-section" id="portfolio">
          <div className="section-heading">
            <p className="eyebrow">ПОРТФОЛИО ДИКЛАН</p>
            <h2>Работы, которые<br />можно увидеть</h2>
            <p className="portfolio-intro">
              Примеры монтажа потолков и конструкций из ГКЛ для квартир,
              магазинов и коммерческих помещений.
            </p>
          </div>

          <div className="portfolio-grid">
            {Array.from({ length: 18 }, (_, index) => {
              const number = String(index + 1).padStart(2, '0')

              return (
                <article className="portfolio-item" key={number}>
                  <img
                    src={`/portfolio/work-${number}.jpg`}
                    alt={`Работа Диклан №${number}`}
                  />

                  <div className="portfolio-caption">
                    <span>{number}</span>
                    <h3>Монтаж конструкции</h3>
                    <p>Реальный объект Диклан</p>
                  </div>
                </article>
              )
            })}
          </div>
        </section>
        
        <section className="section process-section" id="process">
          <div className="section-heading">
            <p className="eyebrow">ПОНЯТНЫЙ ПРОЦЕСС</p>
            <h2>От первой консультации<br />до готовой конструкции</h2>
          </div>

          <div className="process-grid">
            {[
              ['01', 'Заявка', 'Вы звоните или пишете в Telegram или MAX.'],
              ['02', 'Обсуждение', 'Изучаем описание, фотографии, план или проект.'],
              ['03', 'Расчёт', 'Определяем объём работ и материалы.'],
              ['04', 'Монтаж', 'Выполняем работы своей бригадой.'],
            ].map(([number, title, text]) => (
              <article className="process-step" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-section">
          <div>
            <p className="eyebrow">ОБСУДИМ ВАШ ОБЪЕКТ</p>
            <h2>Получите предварительный расчёт</h2>
            <p>
              Отправьте описание задачи, план или фотографию помещения. Мы
              свяжемся с вами и уточним детали.
            </p>
          </div>
          <a className="button button-primary" href="#contacts">
            Оставить заявку
          </a>
        </section>
      </main>

           <footer className="footer" id="contacts">
        <div className="footer-main">
          <a
            className="logo"
            href="#top"
            aria-label="Диклан — монтаж потолков и конструкций из ГКЛ"
          >
            <span className="logo-mark" aria-hidden="true">
              <i />
              <i />
            </span>

            <span className="logo-text">
              <strong>ДИКЛАН</strong>
              <small>ПОТОЛКИ И ГКЛ</small>
            </span>
          </a>

          <p>
            Монтаж потолков и конструкций из ГКЛ в Москве и ближнем Подмосковье.
          </p>
        </div>

        <div className="footer-contact">
          <p className="eyebrow">СВЯЗАТЬСЯ</p>
          <a href="tel:+79998777448">+7 999 877-74-48</a>
          <a href="https://t.me/diklan_ru" target="_blank" rel="noreferrer">
            Telegram: @diklan_ru
          </a>
          <a
            href="https://max.ru/u/f9LHodD0cOL8ha1Ccf2HA9GbbVV9oAwt2mCpNeu0igOq8MiHbRgz8kdu11k"
            target="_blank"
            rel="noreferrer"
          >
            Написать в MAX
          </a>
        </div>

        <form
          className="contact-form"
          onSubmit={async (event) => {
  event.preventDefault()

  const form = event.currentTarget
  const formData = new FormData(form)

  const response = await fetch('/api/send-lead', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: formData.get('name'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    }),
  })

  if (response.ok) {
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.')
    form.reset()
  } else {
    alert('Не удалось отправить заявку. Попробуйте позвонить нам.')
  }
}}
        >
          <p className="eyebrow">ПРЕДВАРИТЕЛЬНЫЙ РАСЧЁТ</p>

          <label>
            Ваше имя
            <input
              type="text"
              name="name"
              placeholder="Как к вам обращаться?"
              required
            />
          </label>

          <label>
            Телефон
            <input
              type="tel"
              name="phone"
              placeholder="+7 ___ ___-__-__"
              required
            />
          </label>

          <label>
            Что требуется выполнить?
            <textarea
              name="message"
              placeholder="Например: потолок из ГКЛ в квартире"
              rows="4"
            />
          </label>

          <label className="consent">
  <input type="checkbox" name="consent" required />
  <span>
    Я согласен на обработку персональных данных
  </span>
</label>

<button className="button button-primary" type="submit">
  Отправить заявку
</button>
        </form>
      </footer>
    </div>
  )
}

export default App