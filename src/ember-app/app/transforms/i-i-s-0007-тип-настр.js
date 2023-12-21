import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипНастрEnum from '../enums/i-i-s-0007-тип-настр';

export default FlexberryEnum.extend({
  enum: ТипНастрEnum,
  sourceType: 'IIS.0007.ТипНастр'
});
