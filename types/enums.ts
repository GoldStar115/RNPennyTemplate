import { iCategories, iCategory } from './types'
import BusinessIcon from '../image/Icons/Categories/smallbusiness.svg'
import RealEstateIcon from '../image/Icons/Categories/realestate.svg'
import SavingsIcon from '../image/Icons/Categories/savings.svg'
import DebtIcon from '../image/Icons/Categories/debt.svg'
import StocksIcon from '../image/Icons/Categories/stocks.svg'
import CareersIcon from '../image/Icons/Categories/career.svg'
import StartupsIcon from '../image/Icons/Categories/startups.svg'
import {
  careersPhoto,
  debtPhoto,
  realestatePhoto,
  savingsPhoto,
  smallbusinessPhoto,
  startupsPhoto,
  stocksandoptionsPhoto,
} from '../image'

export const Categories: iCategories = {
  business: {
    label: 'Small Business',
    id: 'business',
    color: '#C0B9DD',
    icon: BusinessIcon,
    backgroundPicture: smallbusinessPhoto,
    description: 'Real small business owners share advice on everything you need to know to start, grow, and scale.',
  },
  realEstate: {
    label: 'Real Estate',
    id: 'realEstate',
    color: '#818AA3',
    icon: RealEstateIcon,
    backgroundPicture: realestatePhoto,
    description: 'Learn the ins-and-outs of investing, flipping, and buying your first home.',
  },
  saving: {
    label: 'Savings',
    id: 'saving',
    color: '#7EA2AA',
    icon: SavingsIcon,
    backgroundPicture: savingsPhoto,
    description: 'Insights on budgeting, retirement planning, and more to help you save money and plan for your future.',
  },
  debt: {
    label: 'Debt',
    id: 'debt',
    color: '#888DA7',
    icon: DebtIcon,
    backgroundPicture: debtPhoto,
    description: 'Tips on navigating credit and freeing yourself from debt.',
  },
  stocksAndOptions: {
    label: 'Stocks & Options',
    id: 'stocksAndOptions',
    color: '#9C7A97',
    icon: StocksIcon,
    backgroundPicture: stocksandoptionsPhoto,
    description: 'Learn how to navigate the stock market and invest intelligently with advice from industry pros.',
  },
  career: {
    label: 'Careers',
    id: 'career',
    color: '#9E788F',
    icon: CareersIcon,
    backgroundPicture: careersPhoto,
    description: 'Tangible advice for marketing yourself, maneuvering the job market, and advancing your career.',
  },
  startups: {
    label: 'Startups',
    id: 'startups',
    color: '#7284A8',
    icon: StartupsIcon,
    backgroundPicture: startupsPhoto,
    description: 'The inside scoop from founders and investors on pitching, growth hacking, and chasing unicorn dust.',
  },
}

export const CategoriesArray: iCategory[] = Object.entries(Categories).map(
  ([_, category]) => category,
)
