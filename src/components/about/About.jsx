import "./about.css";
import profile from "../../assets/profile.jpg";
import box from "../../assets/boxshaped.svg";
import circle from "../../assets/circle.svg";
export const About = () => {
  return (
    <div className="about container">
      <div className="about-me">
        <h1>
          <img src={box} alt="" className="box-shaped" />
          About <span>me</span>
        </h1>
        <p>
        </p>
      </div>
      <div className="img-txt">
        <img src={profile} alt="" />
        <div className="txt">
          <div>
            <p>
              안녕하세요. 쇼크룩입니다. 다른 사람에게 망설임 없이 추천할 수 있고
              일상생활에 자연스럽게 녹아드는 제품을 개발하는 것이 저의
              목표입니다.좋은 제품을 만들기 위해 사용자의 상황에 몰입하고,
              최선의 방향을 고민하며, 적극적으로 소통합니다. 나는 변화에
              유연하게 적응하고 새로운 도전을 즐깁니다
            </p>
            <button>
              <a href="../../assets/myResume.pdf" download>
                Download CV
              </a>
            </button>
            <div className="stack">
              <h2>ReactJS -  JavaScript  - HTML&CSS -  Redux -  Tailwind -  Bootstrap  - Figma</h2>
              <img src={circle} alt="" className="about-circle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
