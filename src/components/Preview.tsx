import { venues } from '../data/events'

function Preview() {
  return (
    <div className="festival-site">

      {/* Header */}
      <header className="festival-header">
        <div className="festival-logo">
          <span className="festival-logo-main">芝生祭</span>
          <span className="festival-logo-year">2026</span>
        </div>

        <nav className="festival-nav">
          <a href="#events">EVENT</a>
          <a href="#ticket">TICKET</a>
          <a href="#access">ACCESS</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="festival-hero">
        <p className="festival-eyebrow">
          SHIBAHU FESTIVAL 2026
        </p>

        <h1 className="festival-title">
          芝生祭
        </h1>

        <p className="festival-subtitle">
          電子技術研究部
          <br />
          SPECIAL EVENT
        </p>

        <a className="festival-button" href="#events">
          企画を見る
        </a>
      </section>

      {/* Events */}
      <section className="festival-events" id="events">
        <div className="section-heading">
          <p className="section-label">EVENT</p>
          <h2>企画一覧</h2>
          <p>
            電子技術研究部では、4つの会場で
            さまざまな企画を開催しています。
          </p>
        </div>

        <div className="venue-list">
          {venues.map((venue) => (
            <section
              className="venue"
              key={venue.name}
            >
              <div className="venue-heading">
                <div>
                  <span className="venue-number">
                    MAP {venue.mapNumber}
                  </span>

                  <h3>{venue.name}</h3>
                </div>

                <span className="venue-count">
                  {venue.events.length} EVENTS
                </span>
              </div>

              <div className="event-grid">
                {venue.events.map((event) => (
                  <article
                    className="event-card"
                    key={event.name}
                  >
                    <div className="event-card-top">
                      <span className="event-category">
                        {event.ticketRequired
                          ? 'TICKET'
                          : 'FREE'}
                      </span>

                      {event.ticketRequired && (
                        <span className="ticket-badge">
                          整理券
                        </span>
                      )}
                    </div>

                    <h4>{event.name}</h4>

                    <p>{event.description}</p>

                    <div className="event-location">
                      {event.location}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      {/* Ticket */}
      <section
        className="festival-ticket"
        id="ticket"
      >
        <p className="section-label">TICKET</p>

        <h2>整理券について</h2>

        <p>
          一部の体験企画では整理券が必要です。
          詳細は会場でご確認ください。
        </p>

        <div className="ticket-items">
          <span>Tinkercad講座</span>
          <span>LEGO製作体験</span>
          <span>ドローン操縦体験</span>
        </div>
      </section>

      {/* Access */}
      <section
        className="festival-access"
        id="access"
      >
        <p className="section-label">ACCESS</p>

        <h2>会場</h2>

        <div className="access-grid">
          {venues.map((venue) => (
            <div
              className="access-item"
              key={venue.name}
            >
              <span>{venue.mapNumber}</span>
              <strong>{venue.name}</strong>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="festival-footer">
        <strong>芝生祭 2026</strong>
        <span>電子技術研究部</span>
      </footer>

    </div>
  )
}

export default Preview
