import './style.scss';
import { SelectSmall } from '../SelectSmall';

const Banner = () => {
  return (
      <div className="background">
        <div className="text_photo">
          <div className="text_banner">
            <h1>Vida moderna para todos</h1>
            <p>
              Ofrecemos servicios completos para la compra, venta o alquiler de
              bienes inmuebles. Llevamos más de 15 años operando en la región de
              Murcia.
            </p>
          </div>
          <div className="pic_banner"></div>
          <SelectSmall />
        </div>
      </div>
  );
};

export default Banner;
