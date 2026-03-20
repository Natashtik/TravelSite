import './ForWhom.css'

function ForWhom() {
  const groups = [
    {
      id: 1,
      title: 'Первая группа',
      grade: '4–5 класс',
      desc: 'Для младших школьников, которые делают первые шаги в английском и готовы применять знания в реальных ситуациях.',
      icon: '🎒',
    },
    {
      id: 2,
      title: 'Вторая группа',
      grade: '6–8 класс',
      desc: 'Для подростков с базовым уровнем, которые хотят уверенно общаться в путешествиях и заводить друзей за границей.',
      icon: '🧳',
    },
  ]

  return (
    <section id="for-whom" className="for-whom">
      <h2 className="for-whom__title section-title">Для кого курс</h2>
      <p className="for-whom__intro">
        Две возрастные группы — каждая со своей программой и темпом
      </p>
      <div className="for-whom__grid">
        {groups.map((group) => (
          <article key={group.id} className="for-whom__card">
            <div className="for-whom__card-icon">{group.icon}</div>
            <h3 className="for-whom__card-title">{group.title}</h3>
            <p className="for-whom__card-grade">{group.grade}</p>
            <p className="for-whom__card-desc">{group.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ForWhom
