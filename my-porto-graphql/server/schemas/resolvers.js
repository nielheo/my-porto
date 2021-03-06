//import FundType from './fundtype/fundtype.resolvers'
//import FundProduct from './fundproduct/fundproduct.resolvers'
import RootQuery from './rootquery/rootquery.resolvers'
import FundType from './fundtype/fundtype.resolvers'
import FundProduct from './fundproduct/fundproduct.resolvers'
import Transaction from './transaction/transaction.resolvers'
import Portfolio from './portfolio/portfolio.resolvers'

import RootMutation from './rootmutation/rootmutation.resolvers'
import Date from './date/date.resolvers';

export default {
    FundType,
    FundProduct,
    Transaction,
    Portfolio,
    RootQuery,
    RootMutation,
    Date
}