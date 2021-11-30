/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Accordion from 'components/bootstrap-components/Accordion';
import Alerts from 'components/bootstrap-components/Alerts';
import Badges from 'components/bootstrap-components/Badges';
import Breadcrumbs from 'components/bootstrap-components/Breadcrumb';
import Buttons from 'components/bootstrap-components/Buttons';
import Cards from 'components/bootstrap-components/Cards';
import Dropdowns from 'components/bootstrap-components/Dropdowns';
import ListGroups from 'components/bootstrap-components/ListGroups';
import Modals from 'components/bootstrap-components/Modals';
import Offcanvas from 'components/bootstrap-components/Offcanvas';
import Pagination from 'components/bootstrap-components/Pagination';
import BasicProgressBar from 'components/bootstrap-components/ProgressBar';
import Spinners from 'components/bootstrap-components/Spinners';
import Toasts from 'components/bootstrap-components/Toasts';
import Avatar from 'components/bootstrap-components/Avatar';
import Image from 'components/bootstrap-components/Image';
import Tooltips from 'components/bootstrap-components/Tooltips';
import Popovers from 'components/bootstrap-components/Popovers';
import Figures from 'components/bootstrap-components/Figures';
import Hoverbox from 'components/bootstrap-components/Hoverbox';
import Tables from 'components/bootstrap-components/Tables';
import FormControl from 'components/bootstrap-components/FormControl';
import InputGroup from 'components/bootstrap-components/InputGroup';
import Select from 'components/bootstrap-components/Select';
import Checks from 'components/bootstrap-components/Checks';
import Range from 'components/bootstrap-components/Range';
import FormLayout from 'components/bootstrap-components/FormLayout';
import FloatingLabels from 'components/bootstrap-components/FloatingLabels';
import FormValidation from 'components/bootstrap-components/FormValidation';
import BootstrapCarousel from 'components/bootstrap-components/BootstrapCarousel';
import SlickCarousel from 'components/bootstrap-components/SlickCarousel';
import Navs from 'components/bootstrap-components/Navs';
import Navbars from 'components/bootstrap-components/Navbars';
import Tabs from 'components/bootstrap-components/Tabs';
import Collapse from 'components/bootstrap-components/Collapse';
import Embed from 'components/bootstrap-components/Embed';
import Background from 'components/bootstrap-components/Backgrounds';
import Search from 'components/bootstrap-components/Search';
import VerticalNavbar from 'components/bootstrap-components/VerticalNavbar';
import NavBarTop from 'components/bootstrap-components/NavBarTop';
import ComboNavbar from 'components/bootstrap-components/ComboNavbar';
import TypedText from 'components/bootstrap-components/TypedText';
import FileUploader from 'components/bootstrap-components/FileUploader';
import Borders from 'components/utilities/Borders';
import Colors from 'components/utilities/Colors';
import ColoredLinks from 'components/utilities/ColoredLinks';
import Display from 'components/utilities/Display';
import Visibility from 'components/utilities/Visibility';
import StretchedLink from 'components/utilities/StretchedLink';
import Float from 'components/utilities/Float';
import Position from 'components/utilities/Position';
import Spacing from 'components/utilities/Spacing';
import Sizing from 'components/utilities/Sizing';
import TextTruncation from 'components/utilities/TextTruncation';
import Typography from 'components/utilities/Typography';
import VerticalAlign from 'components/utilities/VerticalAlign';
import Flex from 'components/utilities/Flex';
import Grid from 'components/utilities/Grid';
import WizardForms from 'components/bootstrap-components/WizardForms';
import GettingStarted from 'components/documentation/GettingStarted';
import Configuration from 'components/documentation/Configuration';
import DarkMode from 'components/documentation/DarkMode';
import Plugins from 'components/documentation/Plugins';
import Styling from 'components/documentation/Styling';
import DesignFile from 'components/documentation/DesignFile';
import Starter from 'components/pages/Starter';
import routes from 'routes/routes';
import { flatRoutes } from 'helpers/utils';
import ComingSoon from 'components/pages/ComingSoon';
import AnimatedIcons from 'components/bootstrap-components/AnimatedIcons';
import DatePicker from 'components/bootstrap-components/DatePicker';
import FontAwesome from 'components/bootstrap-components/FontAwesome';
import Changelog from 'components/documentation/change-log/ChangeLog';
import Analytics from 'components/dashboards/analytics';
import Crm from 'components/dashboards/crm';
import Saas from 'components/dashboards/saas';
import ECommerce from 'components/dashboards/e-commerce';
import Profile from 'components/pages/user/profile/Profile';
import Associations from 'components/pages/asscociations/Associations';
import Followers from 'components/app/social/followers/Followers';
import Notifications from 'components/app/social/notifications/Notifications';
import ActivityLog from 'components/app/social/activity-log/ActivityLog';
import Settings from 'components/pages/user/settings/Settings';
import Feed from 'components/app/social/feed/Feed';
import Placeholder from 'components/bootstrap-components/Placeholder';
import Lightbox from 'components/bootstrap-components/Lightbox';
import AdvanceTableExamples from 'components/bootstrap-components/AdvanceTableExamples';
import ModalAuth from 'components/authentication/modal/ModalAuth';
import Calendar from 'components/app/calendar/Calendar';
import FaqAlt from 'components/pages/faq/faq-alt/FaqAlt';
import FaqBasic from 'components/pages/faq/faq-basic/FaqBasic';
import FaqAccordion from 'components/pages/faq/faq-accordion/FaqAccordion';
import PrivacyPolicy from 'components/pages/miscellaneous/privacy-policy/PrivacyPolicy';
import InvitePeople from 'components/pages/miscellaneous/invite-people/InvitePeople';
import PricingDefault from 'components/pages/pricing/pricing-default/PricingDefault';
import PricingAlt from 'components/pages/pricing/pricing-alt/PricingAlt';
import Invoice from 'components/app/e-commerce/Invoice';
import Billing from 'components/app/e-commerce/billing/Billing';
import Checkout from 'components/app/e-commerce/checkout/Checkout';
import ShoppingCart from 'components/app/e-commerce/cart/ShoppingCart';
import CustomersDetails from 'components/app/e-commerce/customers-details/CustomersDetails';
import OrderDetails from 'components/app/e-commerce/orders/order-details/OrderDetails';
import Products from 'components/app/e-commerce/product/Products';
import ProductDetails from 'components/app/e-commerce/product/product-details/ProductDetails';
import Orders from 'components/app/e-commerce/orders/order-list/Orders';
import Customers from 'components/app/e-commerce/customers/Customers';
import CreateEvent from 'components/app/events/create-an-event/CreateEvent';
import EventList from 'components/app/events/event-list/EventList';
import EventDetail from 'components/app/events/event-detail/EventDetail';
import EmailDetail from 'components/app/email/email-detail/EmailDetail';
import Compose from 'components/app/email/compose/Compose';
import Inbox from 'components/app/email/inbox/Inbox';
import EmailProvider from 'components/app/email/EmailProvider';
import Rating from 'components/bootstrap-components/Rating';
import AdvanceSelect from 'components/bootstrap-components/AdvanceSelect';
import Editor from 'components/bootstrap-components/Editor';
import Chat from 'components/app/chat/Chat';
import Management from 'components/dashboards/project-management';

const inActiveRoutes = flatRoutes(routes).filter(route => !route.active);

const EmailRoutes = ({ match: { url } }) => (
  <EmailProvider>
    <Switch>
      <Route path={`${url}/email-detail`} exact component={EmailDetail} />
      <Route path={`${url}/inbox`} exact component={Inbox} />
      <Route path={`${url}/compose`} exact component={Compose} />
      {/*Redirect*/}
      <Redirect to="/errors/404" />
    </Switch>
  </EmailProvider>
);
const ECommerceRoutes = ({ match: { url } }) => (
  <Switch>
    <Route
      path={`${url}/orders/order-details`}
      exact
      component={OrderDetails}
    />
    <Route path={`${url}/orders/order-list`} exact component={Orders} />
    <Route path={`${url}/invoice`} exact component={Invoice} />
    <Route path="/e-commerce/billing" exact component={Billing} />
    <Route path="/e-commerce/checkout" exact component={Checkout} />
    <Route path="/e-commerce/shopping-cart" exact component={ShoppingCart} />
    <Route path="/e-commerce/customers" exact component={Customers} />
    <Route
      path="/e-commerce/customer-details"
      exact
      component={CustomersDetails}
    />
    <Route
      path={`${url}/product/product-details/:productId`}
      exact
      component={ProductDetails}
    />
    <Route
      path={`${url}/product/product-details/`}
      exact
      component={ProductDetails}
    />
    <Route
      path="/e-commerce/product/:productLayout"
      exact
      component={Products}
    />
    <Route path="/e-commerce/invoice" exact component={Invoice} />
    {/*Redirect*/}
    <Redirect to="/errors/404" />
  </Switch>
);

const MainRoutes = () => (
  <Switch>
    {/*Dashboard*/}

    <Route path="/dashboard/analytics" exact component={Analytics} />
    <Route path="/dashboard/crm" exact component={Crm} />
    <Route path="/dashboard/saas" exact component={Saas} />

    {/*Pages*/}
    <Route path="/pages/starter" exact component={Starter} />
    <Route path="/faq/faq-alt" exact component={FaqAlt} />
    <Route path="/faq/faq-basic" exact component={FaqBasic} />
    <Route path="/faq/faq-accordion" exact component={FaqAccordion} />
    <Route path="/pricing/pricing-default" exact component={PricingDefault} />
    <Route path="/pricing/pricing-alt" exact component={PricingAlt} />
    <Route
      path="/miscellaneous/privacy-policy"
      exact
      component={PrivacyPolicy}
    />
    <Route path="/miscellaneous/invite-people" exact component={InvitePeople} />

    {/* E Commerce */}
    <Route path="/e-commerce" component={ECommerceRoutes} />
    {/*icons*/}
    <Route path="/icons/font-awesome" exact component={FontAwesome} />
    <Route path="/dashboard/e-commerce" exact component={ECommerce} />
    <Route path="/dashboard/project-management" exact component={Management} />

    {/*App*/}
    <Route path="/app/calendar" exact component={Calendar} />
    <Route path="/app/chat" exact component={Chat} />
    <Route path="/social/feed" exact component={Feed} />
    <Route path="/social/activity-log" exact component={ActivityLog} />
    <Route path="/social/notifications" exact component={Notifications} />
    <Route path="/social/followers" exact component={Followers} />
    <Route path="/events/event-detail" exact component={EventDetail} />
    <Route path="/events/create-an-event" exact component={CreateEvent} />
    <Route path="/events/event-list" exact component={EventList} />
    {/* Email */}
    <Route path="/email" component={EmailRoutes} />

    {/* E Commerce */}
    <Route path="/e-commerce" component={ECommerceRoutes} />

    {/*Pages*/}
    <Route path="/pages/starter" exact component={Starter} />
    <Route path="/user/profile" exact component={Profile} />
    <Route path="/user/settings" exact component={Settings} />
    <Route path="/miscellaneous/associations" exact component={Associations} />
    <Route path="/faq/faq-alt" exact component={FaqAlt} />
    <Route path="/faq/faq-basic" exact component={FaqBasic} />
    <Route path="/faq/faq-accordion" exact component={FaqAccordion} />
    <Route path="/pricing/pricing-default" exact component={PricingDefault} />
    <Route path="/pricing/pricing-alt" exact component={PricingAlt} />
    <Route
      path="/miscellaneous/privacy-policy"
      exact
      component={PrivacyPolicy}
    />
    <Route path="/miscellaneous/invite-people" exact component={InvitePeople} />

    {/*icons*/}
    <Route path="/icons/font-awesome" exact component={FontAwesome} />

    {/*Components*/}
    <Route path="/components/alerts" exact component={Alerts} />
    <Route path="/components/accordion" exact component={Accordion} />
    <Route path="/components/animated-icons" exact component={AnimatedIcons} />
    <Route path="/components/badges" exact component={Badges} />
    <Route path="/components/breadcrumb" exact component={Breadcrumbs} />
    <Route path="/components/buttons" exact component={Buttons} />
    <Route path="/components/cards" exact component={Cards} />
    <Route path="/components/dropdowns" exact component={Dropdowns} />
    <Route path="/components/list-group" exact component={ListGroups} />
    <Route path="/components/modals" exact component={Modals} />
    <Route path="/components/offcanvas" exact component={Offcanvas} />
    <Route path="/components/pagination" exact component={Pagination} />
    <Route path="/components/progress-bar" exact component={BasicProgressBar} />
    <Route path="/components/placeholder" exact component={Placeholder} />
    <Route path="/components/spinners" exact component={Spinners} />
    <Route path="/components/toasts" exact component={Toasts} />
    <Route path="/components/pictures/avatar" exact component={Avatar} />
    <Route path="/components/pictures/images" exact component={Image} />
    <Route path="/components/pictures/figures" exact component={Figures} />
    <Route path="/components/pictures/hoverbox" exact component={Hoverbox} />
    <Route path="/components/pictures/lightbox" exact component={Lightbox} />
    <Route path="/components/tooltips" exact component={Tooltips} />
    <Route path="/components/popovers" exact component={Popovers} />
    <Route
      path="/components/carousel/bootstrap"
      exact
      component={BootstrapCarousel}
    />
    <Route path="/components/carousel/slick" exact component={SlickCarousel} />
    <Route path="/components/navs-and-tabs/navs" exact component={Navs} />
    <Route path="/tables/basic-tables" exact component={Tables} />
    <Route
      path="/tables/advance-tables"
      exact
      component={AdvanceTableExamples}
    />
    <Route path="/forms/basic/form-control" exact component={FormControl} />
    <Route path="/forms/basic/input-group" exact component={InputGroup} />
    <Route path="/forms/basic/select" exact component={Select} />
    <Route path="/forms/basic/checks" exact component={Checks} />
    <Route path="/forms/basic/range" exact component={Range} />
    <Route path="/forms/basic/layout" exact component={FormLayout} />
    <Route path="/forms/advance/date-picker" exact component={DatePicker} />
    <Route path="/forms/advance/editor" exact component={Editor} />
    <Route
      path="/forms/advance/advance-select"
      exact
      component={AdvanceSelect}
    />
    <Route path="/forms/advance/file-uploader" exact component={FileUploader} />
    <Route path="/forms/advance/rating" exact component={Rating} />
    <Route path="/forms/floating-labels" exact component={FloatingLabels} />
    <Route path="/forms/validation" exact component={FormValidation} />
    <Route path="/forms/wizard" exact component={WizardForms} />
    <Route path="/components/navs-and-tabs/navbar" exact component={Navbars} />
    <Route path="/components/navs-and-tabs/tabs" exact component={Tabs} />
    <Route path="/components/collapse" exact component={Collapse} />
    <Route path="/components/videos/embed" exact component={Embed} />
    <Route path="/components/background" exact component={Background} />
    <Route path="/components/search" exact component={Search} />
    <Route path="/components/typed-text" exact component={TypedText} />
    <Route
      path="/components/navs-and-tabs/vertical-navbar"
      exact
      component={VerticalNavbar}
    />
    <Route
      path="/components/navs-and-tabs/top-navbar"
      exact
      component={NavBarTop}
    />
    <Route
      path="/components/navs-and-tabs/combo-navbar"
      exact
      component={ComboNavbar}
    />

    {/*Utilities*/}
    <Route path="/utilities/borders" exact component={Borders} />
    <Route path="/utilities/colors" exact component={Colors} />
    <Route path="/utilities/colored-links" exact component={ColoredLinks} />
    <Route path="/utilities/display" exact component={Display} />
    <Route path="/utilities/visibility" exact component={Visibility} />
    <Route path="/utilities/stretched-link" exact component={StretchedLink} />
    <Route path="/utilities/stretched-link" exact component={StretchedLink} />
    <Route path="/utilities/float" exact component={Float} />
    <Route path="/utilities/position" exact component={Position} />
    <Route path="/utilities/spacing" exact component={Spacing} />
    <Route path="/utilities/sizing" exact component={Sizing} />
    <Route path="/utilities/text-truncation" exact component={TextTruncation} />
    <Route path="/utilities/typography" exact component={Typography} />
    <Route path="/utilities/vertical-align" exact component={VerticalAlign} />
    <Route path="/utilities/flex" exact component={Flex} />
    <Route path="/utilities/grid" exact component={Grid} />

    {/*Documentation*/}
    <Route
      path="/documentation/getting-started"
      exact
      component={GettingStarted}
    />
    <Route
      path="/documentation/configuration"
      exact
      component={Configuration}
    />
    <Route path="/documentation/styling" exact component={Styling} />
    <Route path="/documentation/dark-mode" exact component={DarkMode} />
    <Route path="/documentation/plugin" exact component={Plugins} />
    <Route path="/documentation/design-file" exact component={DesignFile} />
    <Route path="/changelog" exact component={Changelog} />
    <Route path="/authentication-modal" component={ModalAuth} />
    {/*Coming Soon*/}
    <Route
      path={inActiveRoutes.map(route => route.to)}
      exact
      component={ComingSoon}
    />

    {/*Redirect*/}
    <Redirect to="/errors/404" />
  </Switch>
);

export default MainRoutes;
