import React, { FC, useContext } from 'react';
import useReactRouter from 'use-react-router';
import firebase from 'firebase/app';
import styled from '@emotion/styled';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import Message from 'semantic-ui-react/dist/commonjs/collections/Message';
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment';

import { FirebaseContext, UserContext } from 'contexts';
import paths from 'paths';

const GridWrapper = styled.main`
  &&& h2 {
    font-size: 1.25rem;
  }

  &&& .column {
    max-width: 480px;
    padding: 0 2rem;
  }

  .ui.grid {
    height: 85vh;
  }

  .ui.message {
    padding: 0.8rem 1rem;
    text-align: left;
  }

  .ui.message p {
    margin: 0.3rem 0;
  }

  &&& .mdl-button {
    border-radius: 0.33rem;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.14);
  }
`;

const Signin: FC = () => {
  const { auth } = useContext(FirebaseContext);
  const { setCredential } = useContext(UserContext);
  const { history } = useReactRouter();
  const uiConfig: firebaseui.auth.Config = {
    signInFlow: 'redirect',
    signInOptions: [
      {
        provider: firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        customParameters: { lang: 'ja' },
      },
    ],
    callbacks: {
      signInSuccessWithAuthResult: (authResult, redirectUrl) => {
        setCredential(authResult as firebase.auth.UserCredential);
        const dest = redirectUrl || paths.home;
        history.replace(dest);

        return false;
      },
    },
  };

  return (
    <GridWrapper>
      <Grid textAlign="center" verticalAlign="middle">
        <Grid.Column>
          <Header as="h2" textAlign="center">
            ログイン／新規登録
          </Header>
          <Segment>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
          </Segment>
          <Message>
            <p>ブックマークするためにはログインが必要です。</p>
            <p>
              なお、Mangarel はユーザーの許可なく Twitter
              に投稿することはありません。
            </p>
          </Message>
        </Grid.Column>
      </Grid>
    </GridWrapper>
  );
};

export default Signin;
