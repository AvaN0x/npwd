import React from 'react';
import { AppWrapper } from '../../../ui/components';
import { AppContent } from '../../../ui/components/AppContent';
import { EmailThemeProvider } from '../providers/EmailThemeProvider';
import { EmailAppNav } from './EmailAppNav';
import { Route, Switch } from 'react-router-dom';
import { InboxPage } from './pages/InboxPage';
import { EmailAppHeader } from './EmailAppHeader';
import { NewEmailPage } from './pages/NewEmailPage';
import { SentPage } from './pages/SentPage';
import { EmailDetailsPage } from './pages/EmailDetailsPage';

export const EmailApp = () => {
  return (
    <EmailThemeProvider>
      <AppWrapper>
        <EmailAppHeader />
        <AppContent>
          <Switch>
            <Route path="/email" exact>
              <InboxPage />
            </Route>
            <Route path="/email/sent" exact>
              <SentPage />
            </Route>
            <Route path="/email/new" exact>
              <NewEmailPage />
            </Route>
            <Route path="/email/details/:id">
              <EmailDetailsPage />
            </Route>
          </Switch>
        </AppContent>
        <EmailAppNav />
      </AppWrapper>
    </EmailThemeProvider>
  );
};
