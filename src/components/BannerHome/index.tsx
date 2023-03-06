import { BannerHomeDiv } from "./style";
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from "reactstrap";

const BannerHome = () => {
  return (
    <BannerHomeDiv>
      {/* <img src="/src/assets/biopark 3.jpg" alt="" /> */}
      <Card inverse>
        <CardImg
          alt="Card image cap"
          src="/src/assets/biopark 3.jpg"
          width="100%"
        />
      </Card>
    </BannerHomeDiv>
  );
};

export { BannerHome };
