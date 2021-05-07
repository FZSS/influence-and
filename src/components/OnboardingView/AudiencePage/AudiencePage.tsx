import { FunctionComponent } from 'react';
import * as React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
  Typography,
  MenuItem,
  Select,
  Icon,
  Slider,
  TextField,
  Checkbox,
} from '@material-ui/core';
import { Room, Wc, Star, HourglassFull, Public } from '@material-ui/icons';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

import 'components/OnboardingView/AudiencePage/styles.css';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 100,
    label: '100+',
  },
];

const allInterests = [
  '3D Graphics',
  '3D Printing',
  'Action',
  'Adoption',
  'Adventure Travel',
  'Aikido',
  'Air sports',
  'Airplanes',
  'American football',
  'Android',
  'Animation',
  'Anime',
  'Apple',
  'Appliances',
  'Archery',
  'Astrology',
  'Athletics',
  'Automobiles',
  'Avant-garde',
  'Badminton',
  'Banking',
  'Barbecues',
  'Baseball',
  'Basketball',
  'Bass Guitar',
  'Beach volleyball',
  'Beaches',
  'Beer',
  'Biography',
  'Biology',
  'Biotechnology',
  'Boxing',
  'Budget Travel',
  'Business',
  'Business Travel',
  'Cameras',
  'Camping',
  'Canadian',
  'Cannabis',
  'Canoeing',
  'Cardiology',
  'Careers',
  'Caribbean',
  'Cars',
  'Cartoons',
  'Cats',
  'Celebrity',
  'Charity',
  'Cheerleading',
  'Chess',
  'Chicken',
  'Computer Software',
  'Computers',
  'Consultancy Services',
  'Consumer Electronics',
  'Consumer Goods',
  'Consumer Services',
  'Contemporary',
  'Cooking',
  'Country',
  'Coupons',
  'Cricket',
  'Crime',
  'Crime/Mystery',
  'Cruises',
  'Cultural',
  'Curling',
  'Cycling',
  'Dance',
  'Dance music',
  'Dance-Pop',
  'Dental Care',
  'Dermatology',
  'Design',
  'Diabetes',
  'Digital music',
  'Disco',
  'Documentary',
  'Dogs',
  'Drag racing',
  'Drama',
  'Drones',
  'Drums',
  'Easy listening',
  'Eclectic',
  'Economic',
  'Education',
  'Elderly care',
  'Electric scooters',
  'Electronic',
  'Elementary school',
  'Endurance racing',
  'Energy drinks',
  'English',
  'Entertainment',
  'Entrepreneurship',
  'Environment',
  'Environmental Services',
  'Equestrian',
  'Europe',
  'European',
  'Exercise',
  'Extreme sports',
  'Eye Health',
  'Eyewear',
  'Family',
  'Family & Parenting',
  'Family life',
  'Fantasy',
  'Fantasy sports',
  'Farming & Fishing',
  'Fashion',
  'Fast food',
  'Fiction',
  'Figure skating',
  'Film',
  'Financial',
  'Financial planning',
  'Fine dining',
  'Fishing',
  'Fitness',
  'Folk',
  'Food & Beverage',
  'Formula 1',
  'Formula E',
  'Freelance writing',
  'French',
  'Funds',
  'Furniture',
  'Gambling',
  'Game show',
  'Gardening',
  'Geography',
  'Geology',
  'German',
  'Gin',
  'Gluten-free',
  'Golf',
  'Government',
  'Graduate school',
  'Gran touring',
  'Greek',
  'Guitar',
  'Gym',
  'Gymnastics',
  'Hair Care',
  'Handbags/Wallets',
  'Handball',
  'Hard rock',
  'Hats',
  'Hawaiian',
  'Health',
  'Health & Fitness',
  'Health Care',
  'Health/Lowfat cooking',
  'Healthcare',
  'Heavy metal',
  'Hi-Fi stereo',
  'High school',
  'Hiking',
  'Historical fiction',
  'History',
  'Hockey',
  'Home & garden',
  'Home improvement',
  'Home theater',
  'Homebrewing',
  'Honeymoons',
  'Horror',
  'Horse racing',
  'Horses',
  'Hospitality & Events',
  'House',
  'Human Resources',
  'Humor',
  'Hunting',
  'Ice skating',
  'Immigration',
  'Independent movies',
  'Indian',
  'Industrial Engineering',
  'Industrial Goods & Services',
  'IndyCar',
  'Information Technology',
  'Insurance',
  'Interior decorating',
  'International',
  'Internet',
  'Irish',
  'Islands',
  'Italian',
  'J-Pop',
  'Japanese',
  'Jazz',
  'Jewelry',
  'Jiu-Jitsu',
  'Job search',
  'Jogging & running',
  'Journalism',
  'Judo',
  'Juices',
  'K-Pop',
  'Karate',
  'Kickboxing',
  'Kids Clothing',
  'Kindergarten',
  'Kitesurfing',
  'Knitting',
  'Krav Maga',
  'Kung Fu',
  'Lacrosse',
  'Language learning',
  'Latin',
  'Latin American',
  'Law enforcement & Judiciary',
  'Legal Services',
  'Linux',
  'Literature',
  'Live music',
  'Local',
  'Logistics & Planning',
  'Lotteries',
  'Luxury Beauty',
  'Luxury cars',
  'MMA',
  'Magic & illusion',
  'Makeup',
  'Marketing and Advertising',
  'Marriage',
  'Maternity',
  'Maths & Stats',
  'Media Production',
  'Medical Equipment',
  'Medicine',
  'Mediterranean',
  "Men's grooming",
  "Men's health",
  'Mental illness',
  'Mexican',
  'Mexico',
  'Middle Eastern',
  'Middle school',
  'Military',
  'Milkshakes',
  'Mind & body',
  'Model building',
  'Modeling',
  'MotoGP',
  'Motocross',
  'Motor sports',
  'Motorcycles',
  'Mountain biking',
  'Muay Thai',
  'Music',
  'Musical',
  'Mystery',
  'Nail care',
  'Nascar',
  'National',
  'National Parks',
  'Natural beauty products',
  'Needlework',
  'New age',
  'News',
  'Nightlife/partying',
  'Noir',
  'Nonfiction',
  'Nonprofit & Philanthropy',
  'North America',
  'Nutrition/Weight loss',
  'Oil & Energy',
  'Olympics',
  'Online courses',
  'Opera',
  'Organic',
  'Origami',
  'Outdoor life',
  'PR & Communications',
  'Paintball',
  'Painting',
  'Pediatrics',
  'Performance arts',
  'Perfume/Cologne',
  'Personal & Household Goods',
  'Personal care',
  'Pets',
  'Pharmaceuticals',
  'Philosophy',
  'Photography',
  'Physical therapy',
  'Physics',
  'Piano',
  'Pilates',
  'Pizza',
  'Plastic surgery',
  'Plus-size',
  'Poetry',
  'Poker',
  'Political',
  'Politics',
  'Polo',
  'Pop',
  'Pregnancy',
  'Private school',
  'Programming',
  'Psychological therapy',
  'Psychology',
  'Public Buildings & Institutions',
  'Public transport',
  'Publishing',
  'Punk',
  'R&B',
  'Radio',
  'Rafting',
  'Rally',
  'Rap & hip hop',
  'Real Estate',
  'Real estate',
  'Reality TV',
  'Reggae',
  'Religion',
  'Religious Services',
  'Reptiles/arachnids',
  'Research',
  'Resorts',
  'Restaurants',
  'Retail',
  'Retirement planning',
  'Robotics',
  'Rock',
  'Rock & roll',
  'Rodeo',
  'Roleplay games',
  'Roller derby',
  'Romance',
  'Rowing',
  'Rugby',
  'Rum',
  'Sailing',
  'Scandinavian',
  'Scholarships',
  'Sci-fi',
  'Science',
  'Science Fiction',
  'Scientific',
  'Scrapbooking',
  'Screenwriting',
  'Scuba diving',
  'Seafood',
  'Security',
  'Self help',
  'Senior health',
  'Shoes',
  'Shooting',
  'Shopping',
  'Short stories',
  'Show business',
  'Skateboarding',
  'Skating',
  'Skiing',
  'Skin care',
  'Skydiving',
  'Smartphones',
  'Snowboarding',
  'Soccer',
  'Social networks',
  'Social sciences',
  'Soft drinks',
  'Softball',
  'Software',
  'Soul',
  'South America',
  'South East Asia',
  'Southern',
  'Southwestern',
  'Space',
  'Spanish',
  'Spa',
  'Special needs children',
  'Spirituality',
  'Sport',
  'Sporting goods',
  'Sports',
  'Sports ',
  'Sportsware',
  'Squash',
  'Stamps & coins',
  'Startups',
  'Stock market',
  'Superbike',
  'Surfing',
  'Suspence/Thriller',
  'Swimming',
  'Swimwear',
  'Table tennis',
  'Tablets',
  'Taekwondo',
  'Tai Chi',
  'Talk show',
  'Tattoos',
  'Tax planning',
  'Tea',
  'Tech',
  'Techno',
  'Teen pop',
  'Telecommunications',
  'Thai',
  'The Arts',
  'The economy',
  'Theater',
  'Toys',
  'Training',
  'Trance',
  'Transportation',
  'Travel & Leisure',
  'Traveling With Kids',
  'Trucks',
  'Uniforms',
  'Utilities',
  'Variety show',
  'Vegan',
  'Vegetarian',
  'Veterinary',
  'Violin',
  'Virtual reality',
  'Vocal',
  'Vodka',
  'Volleyball',
  'War',
  'Watches',
  'Water polo',
  'Water skiing',
  'Weather',
  'Western',
  'Whiskey',
  'Wholesale',
  'Windows',
  'Wine',
  'Wining & dining',
  "Women's books",
  "Women's health",
  'Woodworking',
  'World music',
  'Wrestling',
  'Writing',
  'Yoga',
];

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const AudiencePage: FunctionComponent = () => {
  const [age, setAge] = React.useState([18, 100]);
  const [location, setLocation] = React.useState('Any');
  const [gender, setGender] = React.useState('Any');
  const [ethnicity, setEthnicity] = React.useState('Any');
  const [interests, setInterests] = React.useState('Any');

  const handleAgeChange = (
    event: React.ChangeEvent<{}>,
    newValue: number | number[]
  ) => {
    // @ts-ignore
    setAge(newValue);
  };

  const handleLocationChange: any = (event: any) =>
    setLocation(event.target.value);

  const handleGenderChange: any = (event: any) => setGender(event.target.value);
  const handleEthnicityChange: any = (event: any) =>
    setEthnicity(event.target.value);
  const handleInterestsChange: any = (event: any) =>
    setInterests(event.target.value);
  return (
    <div>
      <div>
        <Typography variant="h5">Audience</Typography>
        <Typography variant="body2" style={{ color: 'grey' }}>
          Define who you want your product to reach
        </Typography>
      </div>
      <div className="onboarding-list">
        <Typography variant="body1">
          Please choose the following preferences of the audience
        </Typography>
        <div className="audience-preferences">
          <div className="audience-preference">
            <div className="audience-select-label">
              <Icon color="disabled" className="audience-select-label-icon">
                <Room />
              </Icon>
              <Typography variant="body2">Location</Typography>
            </div>
            <TextField />
          </div>
          <div className="audience-preference">
            <div className="audience-select-label">
              <Icon color="disabled" className="audience-select-label-icon">
                <Wc />
              </Icon>
              <Typography variant="body2">Gender</Typography>
            </div>

            <Select
              className="audience-select"
              value={gender}
              variant="outlined"
              onChange={handleGenderChange}
            >
              <MenuItem value="Any">Any</MenuItem>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Non Binary">Non Binary</MenuItem>
            </Select>
          </div>

          <div className="audience-preference">
            <div className="audience-select-label">
              <Icon color="disabled" className="audience-select-label-icon">
                <Public />
              </Icon>
              <Typography variant="body2">Language</Typography>
            </div>

            <Select
              className="audience-select"
              value={ethnicity}
              variant="outlined"
              onChange={handleEthnicityChange}
            >
              <MenuItem value="Any">Any</MenuItem>
              <MenuItem value="E">English</MenuItem>
              <MenuItem value="S">Spanish</MenuItem>
              <MenuItem value="C">Chinese</MenuItem>
              <MenuItem value="K">Korean</MenuItem>
              <MenuItem value="J">Japanese</MenuItem>
            </Select>
          </div>
          <div className="audience-preference-age">
            <div className="audience-select-label">
              <Icon color="disabled" className="audience-select-label-icon">
                <HourglassFull />
              </Icon>
              <Typography variant="body2">Age</Typography>
            </div>

            <div className="onboarding-age-slider">
              <Slider
                value={age}
                onChange={handleAgeChange}
                valueLabelDisplay="on"
                aria-labelledby="range-slider"
                marks={marks}
                valueLabelFormat={(x) => (x === 100 ? `100+` : `${x}`)}
              />
            </div>
          </div>
          <div className="audience-preference-interests">
            <div className="audience-select-label">
              <Icon color="disabled" className="audience-select-label-icon">
                <Star />
              </Icon>
              <Typography variant="body2">Interests</Typography>
            </div>

            <Autocomplete
              multiple
              options={allInterests}
              disableCloseOnSelect
              getOptionLabel={(option) => option}
              renderOption={(option, { selected }) => (
                <React.Fragment>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option}
                </React.Fragment>
              )}
              renderInput={(params) => (
                <TextField {...params} placeholder="Any" />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudiencePage;
