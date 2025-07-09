import { Navigate, Outlet, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import { RequireAuth, TokenHandler } from "./components";
import {
  AuthOutlet,
  ErrorBoundaryFallback,
  MainOutlet,
  DashboardOutlet,
  DiscoverOutlet,
  SelectFundingParams,
} from "components";
import {
  LoginPage,
  CreateAccountPage,
  NotFoundPage,
  LandingPage,
  CreateUserAccountPage,
  CreateBusinessAccountPage,
  CreateBusinessAccountOnboardingPage,
  DiscoverSurveyPage,
  ForYouPage,
  DiscoverBusinessesPage,
  AdminLeaderBoardsPage,
  AnalyticsPage,
  CampaignsPage,
  UsersSegmentationPage,
  ProfilePage,
  BalancePage,
  SubscriptionsPage,
  BusinessSurveyCreatePage,
  SubscriptionPlansPage,
  PayWithCryptoPage,
  SurveySettingsPage,
  FundYourSurveyPage,
  UpdateSurveyContentPage,
  UpdateSurveyAnswersPage,
  WhitelistPage,
  UserSurveysPage,
  SurveyFillingStartPage,
  SurveyFillingPage,
  ProtectDataPage,
  ReceiveRewardPage,
  ReferralsPage,
  UserBalancePage,
  UserProfilePage,
  SurveyStatAnswersPage,
  SurveyStatUsersPage,
  VerifyKYCPage,
  CreateNFTPage,
  ProfileInfoPage,
  LoginAccountPage,
  MediaPage,
  SurveyAccessGatingPage,
  SurveyRewardConditionsPage,
  AdminSurveysPage,
  AdminUsersPage,
  AdminUserPage,
  BusinessMediaPage,
  SettingsPage,
  ConnectNetworkPage,
  UserSurveyAnswersPage,
  StripePayoutsPage,
  StripeOnboardPage,
  Web3Mail,
  OnboardingInvite,
  SurveyFillingGhostPage,
  SurveyFillingGhostStartPage,
  AdminRewardsPage,
} from "pages";
import App from "App";

import { SubmitWeb3MailTypes } from "pages/submit-web3-mail/types";
import { PaymentMethod } from "store/create-survey/survey/types";

import { ROUTES, ROUTE_PARAMS } from "./routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTES.landing} element={<App />} ErrorBoundary={ErrorBoundaryFallback}>
      <Route path={ROUTES.landing} element={<MainOutlet />}>
        <Route index element={<LandingPage />} />

        <Route path={ROUTES.onboardingInvite} element={<OnboardingInvite />} />

        <Route path={ROUTES.verifyKyc} element={<VerifyKYCPage />} />

        <Route
          path={ROUTES.login}
          element={
            <TokenHandler>
              <AuthOutlet />
            </TokenHandler>
          }
        >
          <Route index element={<LoginAccountPage />} />

          <Route path={`:${ROUTE_PARAMS.accountType}`} element={<LoginPage />} />
        </Route>

        <Route
          path={ROUTES.createAccount}
          element={
            <TokenHandler>
              <AuthOutlet />
            </TokenHandler>
          }
        >
          <Route index element={<CreateAccountPage />} />

          <Route path={ROUTES.user} element={<CreateUserAccountPage />} />

          <Route path={ROUTES.business}>
            <Route index element={<CreateBusinessAccountPage />} />
            <Route path={ROUTES.onboarding}>
              <Route
                index
                element={
                  <RequireAuth>
                    <CreateBusinessAccountOnboardingPage />
                  </RequireAuth>
                }
              />
            </Route>
          </Route>
        </Route>

        <Route
          path={ROUTES.landing}
          element={
            <RequireAuth>
              <Outlet />
            </RequireAuth>
          }
        >
          <Route path={ROUTES.discover} element={<DiscoverOutlet />}>
            <Route index element={<Navigate replace to={ROUTES.survey} />} />

            <Route path={ROUTES.survey} element={<DiscoverSurveyPage />} />

            <Route path={ROUTES.businesses} element={<DiscoverBusinessesPage />} />

            <Route path={ROUTES.forYou} element={<ForYouPage />} />
          </Route>

          <Route path={ROUTES.leaderBoards} element={<AdminLeaderBoardsPage />} />

          <Route path={ROUTES.subscriptionPlans} element={<SubscriptionPlansPage />} />

          <Route path={ROUTES.plans} element={<>Plans</>} />
        </Route>

        <Route path={`${ROUTES.profileInfo}/:${ROUTE_PARAMS.businessDid}`} element={<ProfileInfoPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>

      <Route
        path={ROUTES.user}
        element={
          <RequireAuth>
            <Outlet />
          </RequireAuth>
        }
      >
        <Route index element={<Navigate replace to={ROUTES.dashboard} />} />

        <Route path={ROUTES.dashboard} element={<DashboardOutlet />}>
          <Route index element={<Navigate replace to={ROUTES.balance} />} />

          <Route path={ROUTES.stripe} element={<StripePayoutsPage />} />

          <Route path={ROUTES.stripeSetup} element={<StripeOnboardPage profileType={SubmitWeb3MailTypes.USER} />} />

          <Route path={ROUTES.web3Mail} element={<Web3Mail profileType={SubmitWeb3MailTypes.USER} />} />

          <Route path={ROUTES.balance} element={<UserBalancePage />} />

          <Route path={ROUTES.survey}>
            <Route index element={<UserSurveysPage />} />

            <Route path={`:${ROUTE_PARAMS.surveyId}`}>
              <Route index element={<Navigate replace to={ROUTES.answers} />} />

              <Route path={ROUTES.answers} element={<UserSurveyAnswersPage />} />
            </Route>
          </Route>

          <Route path={ROUTES.profile} element={<UserProfilePage />} />

          {/* <Route path={ROUTES.subscriptions} element={<>Subscriptions</>} /> */}

          <Route path={ROUTES.referrals} element={<ReferralsPage />} />

          <Route path={ROUTES.medias} element={<MediaPage />} />

          <Route path={ROUTES.settings} element={<SettingsPage />}>
            <Route index element={<Navigate replace to={ROUTES.connectNetwork} />} />

            <Route
              path={ROUTES.connectNetwork}
              element={<ConnectNetworkPage profileType={SubmitWeb3MailTypes.USER} />}
            />
          </Route>
        </Route>

        <Route path={ROUTES.surveyFilling} element={<MainOutlet />}>
          <Route path={`:${ROUTE_PARAMS.surveyFillingId}`}>
            <Route index element={<SurveyFillingStartPage />} />

            <Route path={ROUTES.protect} element={<ProtectDataPage />} />

            <Route path={ROUTES.reward} element={<ReceiveRewardPage />} />

            <Route path={ROUTES.complete} element={<SurveyFillingPage />} />
          </Route>
        </Route>
      </Route>

      <Route path={ROUTES.ghost} element={<MainOutlet />}>
        <Route path={ROUTES.surveyFilling}>
          <Route path={`:${ROUTE_PARAMS.surveyFillingId}`}>
            <Route index element={<SurveyFillingGhostStartPage />} />
            <Route path={ROUTES.complete} element={<SurveyFillingGhostPage />} />
          </Route>
        </Route>
      </Route>

      <Route
        path={ROUTES.business}
        element={
          <RequireAuth>
            <Outlet />
          </RequireAuth>
        }
      >
        <Route index element={<Navigate replace to={ROUTES.dashboard} />} />

        <Route path={ROUTES.dashboard} element={<DashboardOutlet />}>
          <Route index element={<Navigate replace to={ROUTES.analytics} />} />

          <Route path={ROUTES.analytics} element={<AnalyticsPage />} />

          <Route path={ROUTES.web3Mail} element={<Web3Mail profileType={SubmitWeb3MailTypes.BUSINESS} />} />

          <Route path={ROUTES.campaigns} element={<CampaignsPage />} />

          <Route path={ROUTES.referrals} element={<ReferralsPage />} />

          <Route path={ROUTES.users} element={<UsersSegmentationPage />} />

          <Route path={ROUTES.profile} element={<ProfilePage />} />

          <Route path={ROUTES.balance} element={<BalancePage />} />

          <Route path={ROUTES.subscriptions} element={<SubscriptionsPage />} />

          <Route path={ROUTES.medias} element={<BusinessMediaPage />} />

          <Route path={ROUTES.settings} element={<SettingsPage />}>
            <Route index element={<Navigate replace to={ROUTES.connectNetwork} />} />

            <Route
              path={ROUTES.connectNetwork}
              element={<ConnectNetworkPage profileType={SubmitWeb3MailTypes.BUSINESS} />}
            />
          </Route>
        </Route>

        <Route path={ROUTES.surveys} element={<MainOutlet />}>
          <Route index element={<Navigate replace to={ROUTES.createSurvey} />} />

          <Route path={ROUTES.createSurvey} element={<BusinessSurveyCreatePage />} />

          <Route path={ROUTES.createQuiz} element={<BusinessSurveyCreatePage />} />

          <Route path={`:${ROUTE_PARAMS.surveyId}`}>
            <Route index element={<Navigate replace to={ROUTES.paymentMethod} />} />

            <Route path={ROUTES.paymentMethod} element={<FundYourSurveyPage />} />

            <Route path={ROUTES.payWithCrypto} element={<PayWithCryptoPage />} />

            <Route path={ROUTES.payWithCard} element={<SelectFundingParams paymentType={PaymentMethod.CARD} />} />

            {/* TODO: add card payment method */}

            {/* <Route path={ROUTES.payWithCard} element={<>Pay with card</>} /> */}

            <Route path={ROUTES.selectPackage} element={<SelectFundingParams paymentType={PaymentMethod.CRYPTO} />} />

            <Route path={ROUTES.surveySettings} element={<SurveySettingsPage />} />

            <Route path={ROUTES.update} element={<UpdateSurveyContentPage />} />

            <Route path={ROUTES.updateAnswers} element={<UpdateSurveyAnswersPage />} />

            <Route path={ROUTES.whitelist} element={<WhitelistPage />} />

            <Route path={ROUTES.surveyUsers} element={<SurveyStatUsersPage />} />

            <Route path={ROUTES.surveyAccessGating} element={<SurveyAccessGatingPage />} />

            <Route path={ROUTES.rewardConditions} element={<SurveyRewardConditionsPage />} />

            <Route
              path={`${ROUTES.answers}/:${ROUTE_PARAMS.surveyFillingUserId}`}
              element={<SurveyStatAnswersPage />}
            />

            <Route path={`${ROUTES.createNFT}/:${ROUTE_PARAMS.surveyNetwork}`} element={<CreateNFTPage />} />
          </Route>
        </Route>
      </Route>

      <Route
        path={ROUTES.admin}
        element={
          <RequireAuth>
            <Outlet />
          </RequireAuth>
        }
      >
        <Route index element={<Navigate replace to={ROUTES.dashboard} />} />

        <Route path={ROUTES.dashboard} element={<DashboardOutlet />}>
          <Route index element={<Navigate replace to={ROUTES.surveys} />} />

          <Route path={ROUTES.surveys} element={<AdminSurveysPage />} />

          <Route path={ROUTES.users} element={<AdminUsersPage />} />

          <Route path={`${ROUTES.user}/:userId`} element={<AdminUserPage />} />

          <Route path={ROUTES.adminRewards} element={<AdminRewardsPage />} />

          <Route path={ROUTES.user} element={<Navigate replace to={ROUTES.users} />} />
        </Route>
      </Route>
    </Route>,
  ),
);
