const brothers = [
  {
    'id': 0,
    'url': require('./images/brothers/rishi.jpg'),
    'name': 'Rishi Dhanaraj',
    'position': 'Regent',
    'class': 'Xi Class',
    'major': 'cs',
  },
  {
    'id': 1,
    'url': require('./images/brothers/bchan.jpg'),
    'name': 'Brian Chan',
    'position': 'Chair',
    'class': 'Omicron Class',
    'major': 'bio',
  },
  {
    'id': 2,
    'url': require('./images/brothers/jeffrey.jpg'),
    'name': 'Jeffrey Lee',
    'position': 'Chair',
    'class': 'Pi Class',
    'major': 'env',
  },
  {
    'id': 3,
    'url': require('./images/brothers/hillary.jpg'),
    'name': 'Hillary Fan',
    'position': 'Chair',
    'class': 'Pi Class',
    'major': 'ee',
  },
  {
    'id': 4,
    'url': require('./images/brothers/bchan.jpg'),
    'name': 'Kaiser Kim',
    'position': 'Active',
    'class': 'Lambda Class',
    'major': 'aero',
  },
  {
    'id': 4,
    'url': require('./images/brothers/bchan.jpg'),
    'name': 'Blake Huynh',
    'position': 'Active',
    'class': 'Lambda Class',
    'major': 'mech-struct',
  },
  {
    'id': 4,
    'url': require('./images/brothers/bchan.jpg'),
    'name': 'Hodor',
    'position': 'Active',
    'class': 'Omega Class',
    'major': 'chem',
  }
]

const alumni = [
  {
    'id': 0,
    'url': require('./images/brothers/bchan.jpg'),
    'name': 'Best Tech',
    'position': 'Alumni',
    'class': 'Alpha Class'
  },
]

const options = [
  { value: 'position', label: 'Position' },
  { value: 'major', label: 'Major' },
  { value: 'class', label: 'Class' },
  { value: 'alumni', label: 'Alumni' },
]

const majorOptions = [
  { value: 'cs', label: 'Computer Science' },
  { value: 'aero', label: 'Aerospace Engineering' },
  { value: 'mech', label: 'Mechanical Engineering' },
  { value: 'env', label: 'Environmental Engineering' },
  { value: 'ce', label: 'Computer Engineering' },
  { value: 'bio', label: 'Bioengineering' },
  { value: 'chem', label: 'Chemical Engineering' },
  { value: 'ee', label: 'Electrical Engineering' },
  { value: 'struct', label: 'Structural Engineering' },
  { value: 'nano', label: 'Nanoengineering' },
]

const classOptions = [
  { value: 'Charter Class', label: 'Charter'},
  { value: 'Alpha Class', label: 'Alpha' },
  { value: 'Beta Class', label: 'Beta' },
  { value: 'Gamma Class', label: 'Gamma' },
  { value: 'Delta Class', label: 'Delta' },
  { value: 'Epsilon Class', label: 'Epsilon' },
  { value: 'Zeta Class', label: 'Zeta' },
  { value: 'Eta Class', label: 'Eta' },
  { value: 'Theta Class', label: 'Theta' },
  { value: 'Iota Class', label: 'Iota' },
  { value: 'Kappa Class', label: 'Kappa' },
  { value: 'Lambda Class', label: 'Lambda' },
  { value: 'Mu Class', label: 'Mu' },
  { value: 'Nu Class', label: 'Nu' },
  { value: 'Xi Class', label: 'Xi' },
  { value: 'Omicron Class', label: 'Omicron' },
  { value: 'Pi Class', label: 'Pi' },
]

const images = [
  {
    'name': 'position',
    'url': require('./images/general/active.jpg'),
  },
  {
    'name': 'alumni',
    'url': require('./images/general/alumni.jpg'),
  },
  {
    'name': 'cs',
    'url': require('./images/majors/cs.jpg'),
  },
  {
    'name': 'aero',
    'url': require('./images/majors/aero.jpg'),
  },
  {
    'name': 'mech',
    'url': require('./images/majors/mech-struct.jpg'),
  },
  {
    'name': 'env',
    'url': require('./images/majors/env.jpg'),
  },
  {
    'name': 'ce',
    'url': require('./images/majors/cs.jpg'),
  },
  {
    'name': 'bio',
    'url': require('./images/majors/bio.jpg'),
  },
  {
    'name': 'chem',
    'url': require('./images/majors/chem.jpg'),
  },
  {
    'name': 'ee',
    'url': require('./images/majors/ee.jpg'),
  },
  {
    'name': 'struct',
    'url': require('./images/majors/mech-struct.jpg'),
  },
  {
    'name': 'nano',
    'url': require('./images/majors/chem.jpg'),
  },
  {
    'name': 'Charter Class',
    'url': require('./images/classes/charter.jpg'),
  },
  {
    'name': 'Alpha Class',
    'url': require('./images/classes/alpha.jpg'),
  },
  {
    'name': 'Beta Class',
    'url': require('./images/classes/charter.jpg'),
  },
  {
    'name': 'Gamma Class',
    'url': require('./images/classes/gamma.jpg'),
  },
  {
    'name': 'Delta Class',
    'url': require('./images/classes/delta.jpg'),
  },
  {
    'name': 'Epsilon Class',
    'url': require('./images/classes/epsilon.jpg'),
  },
  {
    'name': 'Zeta Class',
    'url': require('./images/classes/zeta.jpg'),
  },
  {
    'name': 'Eta Class',
    'url': require('./images/classes/eta.jpg'),
  },
  {
    'name': 'Theta Class',
    'url': require('./images/classes/theta.jpg'),
  },
  {
    'name': 'Iota Class',
    'url': require('./images/classes/iota.jpg'),
  },
  {
    'name': 'Kappa Class',
    'url': require('./images/classes/kappa.jpg'),
  },
  {
    'name': 'Lambda Class',
    'url': require('./images/classes/lambda.jpg'),
  },
  {
    'name': 'Mu Class',
    'url': require('./images/classes/mu.jpg'),
  },
  {
    'name': 'Nu Class',
    'url': require('./images/classes/nu.jpg'),
  },
  {
    'name': 'Xi Class',
    'url': require('./images/classes/xi.jpg'),
  },
  {
    'name': 'Omicron Class',
    'url': require('./images/classes/omicron.jpg'),
  },
  {
    'name': 'Pi Class',
    'url': require('./images/classes/pi.jpg'),
  },
]

export {brothers, alumni, options, majorOptions, classOptions, images};