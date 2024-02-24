export function TwitterFollowCard({ userName, name, isFollowing }) {
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          src={"../img_x/${userName}"}
          alt='Alguna verga'
        />
        <div className='followCard-info'>
          <strong>{name}</strong>
          <span className='tw-followCard-infoClassName'>@{userName}</span>
        </div>
      </header>
      <aside>
        <button className='tw-followCard-button'>Seguir</button>
      </aside>
    </article>
  );
}
