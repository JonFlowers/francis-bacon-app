import React from "react";
import styled, { keyframes } from "styled-components";

const data = [
  {
    id: "landscape",
    link: "/landscape/index.html"
  },
  {
    id: "grass",
    link: process.env.PUBLIC_URL + "/grass/index.html"
  },
  {
    id: "self-portraits",
    link: process.env.PUBLIC_URL + "/self-portraits/index.html"
  },
  {
    id: "life-mask",
    link: process.env.PUBLIC_URL + "/life-mask/index.html"
  },
  {
    id: "three-portraits",
    link: process.env.PUBLIC_URL + "/three-portraits/index.html"
  },
  {
    id: "dyer",
    link: process.env.PUBLIC_URL + "/dyer/index.html"
  },
  {
    id: "man-with-monkey",
    link: process.env.PUBLIC_URL + "/man-with-monkey/index.html"
  },
  {
    id: "three-studies",
    link: process.env.PUBLIC_URL + "/three-studies/index.html"
  },
  {
    id: "bull-death",
    link: process.env.PUBLIC_URL + "/bull-death/index.html"
  }
];
const thumbsSlideIn = keyframes`
    0% {opacity:0;left:950px}
    100% {opacity:0.8;left:780px}
`;
const thumbFade = keyframes`
    to {
      opacity:1;
    }
`;
const Thumbnails = styled.div.attrs((props) => ({
  className: props.className
}))`
  & :hover {
    animation: 1s ease 0s infinite alternate none running ${thumbFade};
  }
  #landscape {
    background-image: url(images/thumbs/landscape-thumb.png);
  }
  #grass {
    background-image: url(images/thumbs/grass-thumb.png);
  }
  #self-portraits {
    background-image: url(images/thumbs/portrait-thumb.png);
  }
  #life-mask {
    background-image: url(images/thumbs/death-mask-thumb.png);
  }
  #three-portraits {
    background-image: url(images/thumbs/three-portraits-thumb.png);
  }
  #dyer {
    background-image: url(images/thumbs/dyer-thumb.png);
  }
  #man-with-monkey {
    background-image: url(images/thumbs/monkey-thumb.png);
  }
  #three-studies {
    background-image: url(images/thumbs/three-studies-thumb.png);
  }
  #bull-death {
    background-image: url(images/thumbs/bull-thumb.png);
  }
  display: none;
  position: absolute;
  top: 260px;
  left: 780px;
  width: 1920px;
  opacity: 0.8;
  z-index: 2;
  animation-name: ${thumbsSlideIn};
  animation-duration: 2s;
`;
const Thumbnail = styled.div`
  width: 200px;
  height: 200px;
  background-color: #fff;
  float: left;
  margin-left: 10px;
  opacity: 0.6;
`;
class ExperimentList extends React.Component {
  componentDidMount(): void {
    window.addEventListener("load", () => {
      const thumbnails = document.getElementById("thumbnails"),
        thumbs = thumbnails?.getElementsByClassName("thumbnail");
      if (thumbs !== void 0) {
        for (let i = 0; i < thumbs.length; i++) {
          thumbs[i].addEventListener("click", (event: Event) => {
            const frame = document.getElementById(
                "content-iframe"
              ) as HTMLIFrameElement,
              clicked = event.target as HTMLElement;
            if (frame !== undefined && clicked.dataset.src !== undefined) {
              frame.src = clicked.dataset.src;
            }
          });
        }
      }
    });
  }
  render(): React.ReactNode {
    return (
      <Thumbnails id="thumbnails">
        {data.map((item) => (
          <Thumbnail
            key={item.id}
            id={item.id}
            className="thumbnail"
            data-src={item.link}
          ></Thumbnail>
        ))}
      </Thumbnails>
    );
  }
}
export default ExperimentList;
