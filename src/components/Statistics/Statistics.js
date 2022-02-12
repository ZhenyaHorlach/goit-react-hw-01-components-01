import PropTypes from 'prop-types';
import s from './Statistics.module.css'

export default function Statistics({ stats }) {
    return (
        <section className={s.statistics}>
            <h2 className={s.title}>Upload stats</h2>

            <ul className={s.statList}>
                {stats.map(stat => (
                    <li className={s.item}
                    key={stat.id}>
                        <span className={s.label}>{stat.label}</span>
                        <span className={s.percentage}>{stat.percentage}%</span>
                </li>
                ))}
            </ul>
        </section>
    );
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
}
