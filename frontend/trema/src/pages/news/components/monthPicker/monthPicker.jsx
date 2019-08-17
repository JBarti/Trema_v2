import React, { Fragment } from 'react';
import styles from './monthPicker.module.css';


const MONTHS = {
  1: 'SIJECANJ',
  2: 'VELJACA',
  3: 'OZUJAK',
  4: 'TRAVANJ',
  5: 'SVIBANJ',
  6: 'LIPANJ',
  7: 'SRPANJ',
  8: 'KOLOVOZ',
  9: 'RUJAN',
  10: 'LISTOPAD',
  11: 'STUDENI',
  12: 'PROSINAC',
};


class MonthPicker extends React.Component {
  constructor(props) {
    super(props);

    const currentDate = new Date();
    const months = [0, 1, 2, 3, 4].map((num) => {
      const date = new Date();
      date.setMonth(currentDate.getMonth() - num);
      return MONTHS[date.getMonth()];
    });

    this.state = {};
    this.state.months = months.map((name, index) => ({ index, name, selected: false }));

    this.onMonthClick = this.onMonthClick.bind(this);
  }

  onMonthClick(index) {
    return () => {
      this.setState((prevState) => {
        const { months } = prevState;
        const newMonths = months.map((month) => {
          const newMonth = { ...month };
          if (newMonth.selected && newMonth.index === index) {
            newMonth.selected = false;
            return newMonth;
          }
          newMonth.selected = newMonth.index === index;
          return newMonth;
        });
        return { months: newMonths };
      });
    };
  }

  render() {
    const { months } = this.state;
    return (
      <div className={styles.picker}>
        <div className={styles.picker__divider} />
        {
          months.map((month) => {
            const pickerClassName = `
            ${styles.picker__month} 
            ${month.selected ? styles['picker__month--selected'] : ''}
            `;
            return (
              <Fragment>
                <div
                  className={pickerClassName}
                  role='button'
                  tabIndex={0}
                  onKeyPress={() => {}}
                  onClick={this.onMonthClick(month.index)}
                >
                  {month.name}
                </div>
                <div className={styles.picker__divider} />
              </Fragment>
            );
          })
        }
      </div>
    );
  }
}


export default MonthPicker;
