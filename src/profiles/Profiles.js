import "./profiles.css";

function Profiles() {
  const users = [
    { username: "profil 1", desc: "opis" },
    { username: "profil 2", desc: "opis" },
    { username: "profil 3", desc: "opis" },
    { username: "profil 4", desc: "opis" },
  ];

  return (
    <section class="profiles">
      <div class="container">
        <div class="section-title">
          <h2 class="heading-2">TRI</h2>
          <div class="underline"></div>
          <p>Finibus Bonorum</p>
          <p class="section-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            cum impedit nostrum ratione ipsa dolor? Eius eaque placeat corrupti
            laudantium!
          </p>
        </div>

        <div class="profiles-cont">
          {users.map((user) => {
            return (
              <div class="profile">
                <div class="shape"></div>
                <div class="profile__details">
                  <h4 class="profile__user">{user.username}</h4>
                  <p class="profile__text">{user.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Profiles;
