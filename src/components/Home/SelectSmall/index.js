import { areas, types, prices, rooms, bath } from '../../../store/data';
import './style.scss';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ContextFilter, ContextCatalogue } from '../../../store/context';
const SelectSmall = () => {
  const { filter, setFilter } = useContext(ContextFilter);
  const [area, setArea] = useState('Poblaciónes');
  const [type, setType] = useState('');

  useEffect(() => {
    area == 'Poblaciónes'
      ? setFilter(filter, (filter.poblacion = ''))
      : setFilter(filter, (filter.poblacion = area));
    type == 'Tipo'
      ? setFilter(filter, (filter.type = ''))
      : setFilter(filter, (filter.type = type));
  }, [area, type]);

  let variants = Object.keys(areas);
  return (
    <div>
      <div className="wrapSelect">
        <select
          value={area}
          className="select"
          onChange={(e) => {
            setArea(e.target.value);
          }}
        >
          {variants.map((el) => (
            <option>{el}</option>
          ))}
        </select>
        <select
          value={type}
          className="select"
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          {types.map((el) => (
            <option>{el}</option>
          ))}
        </select>
        <Link to="/catalogue" className="a">
          <div className="button_selectSmall">Buscar</div>
        </Link>
      </div>
    </div>
  );
};

export { SelectSmall };
