import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "./lista.css";

function Lista({ list, deleteItem, moveUp, moveDown }) {
  console.log(list);
  return (
    <section class="list">
      <div class="container">
        <div class="section-title" style={{ marginTop: "10rem" }}>
          <h2>List Items</h2>
          <div class="underline"></div>
        </div>

        {list.map((item, index) => {
          const { title, desc } = item;

          return (
            <ul class="list__items">
              <li class="list__item" key={index}>
                <h3 class="list__title">{title}</h3>
                <p class="list__desc">{desc}</p>
                <button class="btn--delete" onClick={() => deleteItem(index)}>
                  Delete
                </button>

                {index > 0 && list.length > 1 && (
                  <button
                    class="moveUp"
                    onClick={() => moveUp(index, index - 1)}
                  >
                    <i class="fas fa-arrow-up"></i>
                  </button>
                )}
                {index < list.length - 1 && list.length > 1 && (
                  <button
                    class="moveDown"
                    onClick={() => moveDown(index, index + 1)}
                  >
                    <i className="fas fa-arrow-down"></i>
                  </button>
                )}
              </li>
            </ul>
          );
        })}
      </div>
    </section>
  );
}

export default Lista;
