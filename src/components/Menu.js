import React from "react";

const Menu = (props) => {
  const { title, meals } = props;
  return (
    <div>
      <h2>{title}</h2>

      <div>
        {meals.map((meal) => {
          return (
            <div key={meal.id}>
              <div>
                <h3>{meal.title}</h3>
                <p>{meal.description}</p>
                <span>{meal.price}</span>
              </div>
              <div>
                {meal.picture && <img src={meal.picture} alt="pictures" />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
