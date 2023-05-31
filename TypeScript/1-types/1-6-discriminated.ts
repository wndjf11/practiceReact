{

  // function login -> success,fail

  type SuccessState = {
    result: `suceess`;
    response: {
      body: string;
    };
  };

  type FailState = {
    result: 'fail';
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      result: 'suceess',
      response: {
        body: 'logged in!',
      }

    }
  };

  // printLoginState(state)
  // success -> body
  // fail -> reason

  function printLoginState(state: LoginState): void {
    if (state.result === 'suceess') {
      console.log(`🎉 ${state.response.body}`);
    }
    else if (state.result === 'fail') {
      console.log(`😭 ${state.reason}`);
    }
  }
  printLoginState(login());
}