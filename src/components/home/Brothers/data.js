const brothers = [
  {
    'name': 'Rishi Dhanaraj',
    'url': require('./images/brothers/rishi.jpg'),
    'position': 'Regent',
    'class': 'Charter Class',
    'major': 'cs',
  },
  {
    'name': 'Brian Chan',
    'url': require('./images/brothers/bchan.jpg'),
    'position': 'Chair',
    'class': 'Alpha Class',
    'major': 'bio',
  },
  {
    'name': 'Jeffrey Lee',
    'url': require('./images/brothers/jeffrey.jpg'),
    'position': 'Chair',
    'class': 'Beta Class',
    'major': 'env',
  },
  {
    'name': 'Hillary Fan',
    'url': require('./images/brothers/hillary.jpg'),
    'position': 'Chair',
    'class': 'Gamma Class',
    'major': 'ee',
  },
  {
    'name': 'Kaiser Kim',
    'url': require('./images/brothers/bchan.jpg'),
    'position': 'Active',
    'class': 'Delta Class',
    'major': 'aero',
  },
  {
    'name': 'Blake Huynh',
    'url': require('./images/brothers/bchan.jpg'),
    'position': 'Active',
    'class': 'Epsilon Class',
    'major': 'mech',
  },
  {
    'name': 'Hodor',
    'url': require('./images/brothers/bchan.jpg'),
    'position': 'Active',
    'class': 'Zeta Class',
    'major': 'struct',
  },
  {
    'name': 'Hodor',
    'url': require('./images/brothers/bchan.jpg'),
    'position': 'Active',
    'class': 'Eta Class',
    'major': 'ce',
  },
  {
    'name': 'Hodor',
    'url': require('./images/brothers/bchan.jpg'),
    'position': 'Active',
    'class': 'Theta Class',
    'major': 'chem',
  },
  {
    'name': 'Hodor',
    'url': require('./images/brothers/bchan.jpg'),
    'position': 'Active',
    'class': 'Iota Class',
    'major': 'nano',
  },
  {
    'name': 'Hodor',
    'url': require('./images/brothers/bchan.jpg'),
    'position': 'Alumni',
    'class': 'Kappa Class',
    'major': 'cs',
  },
  {
    'name': 'Hodor',
    'url': require('./images/brothers/bchan.jpg'),
    'position': 'Alumni',
    'class': 'Lambda Class',
    'major': 'cs',
  },
  {
    'name': 'Hodor',
    'url': require('./images/brothers/bchan.jpg'),
    'position': 'Alumni',
    'class': 'Mu Class',
    'major': 'cs',
  },
  {
    'name': 'Hodor',
    'url': require('./images/brothers/bchan.jpg'),
    'position': 'Alumni',
    'class': 'Nu Class',
    'major': 'cs',
  },
  {
    'name': 'Hodor',
    'url': require('./images/brothers/bchan.jpg'),
    'position': 'Alumni',
    'class': 'Xi Class',
    'major': 'cs',
  },
  {
    'name': 'Hodor',
    'url': require('./images/brothers/bchan.jpg'),
    'position': 'Active',
    'class': 'Omicron Class',
    'major': 'cs',
  },
  {
    'name': 'Hodor',
    'url': require('./images/brothers/bchan.jpg'),
    'position': 'Active',
    'class': 'Pi Class',
    'major': 'cs',
  },
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
  { 
    value: 'cs', 
    label: 'Computer Science', 
    image: require('./images/majors/logos/ce.png'),
  },
  { 
    value: 'aero', 
    label: 'Aerospace Engineering',
    image: require('./images/majors/logos/aero.png'),
  },
  { 
    value: 'mech', 
    label: 'Mechanical Engineering',
    image: require('./images/majors/logos/mech.png'), 
  },
  { 
    value: 'env', 
    label: 'Environmental Engineering',
    image: require('./images/majors/logos/env.png'), 
  },
  { 
    value: 'ce', 
    label: 'Computer Engineering',
    image: require('./images/majors/logos/ce.png'), 
  },
  { 
    value: 'bio', 
    label: 'Bioengineering',
    image: require('./images/majors/logos/bio.png'), 
  },
  { 
    value: 'chem', 
    label: 'Chemical Engineering',
    image: require('./images/majors/logos/chem.png'), 
  },
  { 
    value: 'ee', 
    label: 'Electrical Engineering',
    image: require('./images/majors/logos/ee.png'), 
  },
  { 
    value: 'struct', 
    label: 'Structural Engineering',
    image: require('./images/majors/logos/struct.png'), 
  },
  { 
    value: 'nano', 
    label: 'Nanoengineering',
    image: require('./images/majors/logos/nano.png'), 
  },
]

const classOptions = [
  { 
    value: 'Charter Class', 
    label: 'Charter',
    image: require('./images/classes/letters/alpha.png'),
  },
  { 
    value: 'Alpha Class', 
    label: 'Alpha',
    image: require('./images/classes/letters/alpha.png'),
  },
  { 
    value: 'Beta Class', 
    label: 'Beta',
    image: require('./images/classes/letters/beta.png'),
  },
  { 
    value: 'Gamma Class', 
    label: 'Gamma',
    image: require('./images/classes/letters/gamma.png'), 
  },
  { 
    value: 'Delta Class', 
    label: 'Delta',
    image: require('./images/classes/letters/delta.png'), 
  },
  { 
    value: 'Epsilon Class', 
    label: 'Epsilon',
    image: require('./images/classes/letters/epsilon.png'), 
  },
  { 
    value: 'Zeta Class', 
    label: 'Zeta',
    image: require('./images/classes/letters/zeta.png'), 
  },
  { 
    value: 'Eta Class', 
    label: 'Eta',
    image: require('./images/classes/letters/eta.png'), 
  },
  { 
    value: 'Theta Class', 
    label: 'Theta',
    image: require('./images/classes/letters/theta.png'), 
  },
  { 
    value: 'Iota Class', 
    label: 'Iota',
    image: require('./images/classes/letters/iota.png'), 
  },
  { 
    value: 'Kappa Class', 
    label: 'Kappa',
    image: require('./images/classes/letters/kappa.png'), 
  },
  { 
    value: 'Lambda Class', 
    label: 'Lambda',
    image: require('./images/classes/letters/lambda.png'), 
  },
  { 
    value: 'Mu Class', 
    label: 'Mu',
    image: require('./images/classes/letters/mu.png'), 
  },
  { 
    value: 'Nu Class', 
    label: 'Nu',
    image: require('./images/classes/letters/nu.png'), 
  },
  { 
    value: 'Xi Class', 
    label: 'Xi',
    image: require('./images/classes/letters/xi.png'), 
  },
  { 
    value: 'Omicron Class', 
    label: 'Omicron',
    image: require('./images/classes/letters/omicron.png'), 
  },
  { 
    value: 'Pi Class', 
    label: 'Pi',
    image: require('./images/classes/letters/pi.png'), 
  },
]

const images = [
  {
    'name': 'position',
    'url': require('./images/general/active.jpg'),
  },
  {
    'name': 'major',
    'url': require('./images/general/major.jpg'),
  },
  {
    'name': 'class',
    'url': require('./images/general/active.jpg'),
  },
  {
    'name': 'alumni',
    'url': require('./images/general/alumni.jpg'),
  },
  {
    'name': 'cs',
    'url': require('./images/majors/images/cs.jpg'),
  },
  {
    'name': 'aero',
    'url': require('./images/majors/images/aero.jpg'),
  },
  {
    'name': 'mech',
    'url': require('./images/majors/images/mech-struct.jpg'),
  },
  {
    'name': 'env',
    'url': require('./images/majors/images/env.jpg'),
  },
  {
    'name': 'ce',
    'url': require('./images/majors/images/cs.jpg'),
  },
  {
    'name': 'bio',
    'url': require('./images/majors/images/bio.jpg'),
  },
  {
    'name': 'chem',
    'url': require('./images/majors/images/chem.jpg'),
  },
  {
    'name': 'ee',
    'url': require('./images/majors/images/ee.jpg'),
  },
  {
    'name': 'struct',
    'url': require('./images/majors/images/mech-struct.jpg'),
  },
  {
    'name': 'nano',
    'url': require('./images/majors/images/chem.jpg'),
  },
  {
    'name': 'Charter Class',
    'url': require('./images/classes/images/charter.jpg'),
  },
  {
    'name': 'Alpha Class',
    'url': require('./images/classes/images/alpha.jpg'),
  },
  {
    'name': 'Beta Class',
    'url': require('./images/classes/images/charter.jpg'),
  },
  {
    'name': 'Gamma Class',
    'url': require('./images/classes/images/gamma.jpg'),
  },
  {
    'name': 'Delta Class',
    'url': require('./images/classes/images/delta.jpg'),
  },
  {
    'name': 'Epsilon Class',
    'url': require('./images/classes/images/epsilon.jpg'),
  },
  {
    'name': 'Zeta Class',
    'url': require('./images/classes/images/zeta.jpg'),
  },
  {
    'name': 'Eta Class',
    'url': require('./images/classes/images/eta.jpg'),
  },
  {
    'name': 'Theta Class',
    'url': require('./images/classes/images/theta.jpg'),
  },
  {
    'name': 'Iota Class',
    'url': require('./images/classes/images/iota.jpg'),
  },
  {
    'name': 'Kappa Class',
    'url': require('./images/classes/images/kappa.jpg'),
  },
  {
    'name': 'Lambda Class',
    'url': require('./images/classes/images/lambda.jpg'),
  },
  {
    'name': 'Mu Class',
    'url': require('./images/classes/images/mu.jpg'),
  },
  {
    'name': 'Nu Class',
    'url': require('./images/classes/images/nu.jpg'),
  },
  {
    'name': 'Xi Class',
    'url': require('./images/classes/images/xi.jpg'),
  },
  {
    'name': 'Omicron Class',
    'url': require('./images/classes/images/omicron.jpg'),
  },
  {
    'name': 'Pi Class',
    'url': require('./images/classes/images/pi.jpg'),
  },
]

export {brothers, alumni, options, majorOptions, classOptions, images};