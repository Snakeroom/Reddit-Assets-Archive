// https://www.redditstatic.com/desktop2x/RealtimeGQLSubscriptionAsync.180a9e26ab1623821465.js
// Retrieved at 10/5/2021, 2:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RealtimeGQLSubscriptionAsync"], {
		"./src/realtime/GQLSubscription/index.tsx": function(e, n, t) {
			"use strict";
			t.r(n);
			var s = t("./node_modules/@apollo/client/core/ApolloClient.js"),
				i = t("./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js"),
				o = t("./node_modules/@apollo/client/react/hooks/useSubscription.js"),
				u = t("./node_modules/@apollo/client/link/ws/index.js"),
				a = t("./node_modules/react/index.js"),
				r = t.n(a),
				c = t("./node_modules/react-redux/es/index.js"),
				p = t("./node_modules/@apollo/client/node_modules/graphql-tag/lib/index.js");
			var b = {
					postVoteCount: p.a`
    subscription SubscribeSubscription($input: SubscribeInput!) {
      subscribe(input: $input) {
        id
        ... on BasicMessage {
          data {
            ... on VoteCountUpdateMessageData {
              voteCountChange
            }
          }
        }
      }
    }
  `,
					postCommentCount: p.a`
    subscription SubscribeSubscription($input: SubscribeInput!) {
      subscribe(input: $input) {
        id
        ... on BasicMessage {
          data {
            ... on CommentCountUpdateMessageData {
              commentCountChange
            }
          }
        }
      }
    }
  `,
					topLevelCommentCountChange: p.a`
    subscription SubscribeSubscription($input: SubscribeInput!) {
      subscribe(input: $input) {
        id
        ... on BasicMessage {
          data {
            ... on CommentCountUpdateMessageData {
              topLevelCommentCountChange
            }
          }
        }
      }
    }
  `,
					userIsTypingOnPost: p.a`
    subscription SubscribeSubscription($input: SubscribeInput!) {
      subscribe(input: $input) {
        id
      }
    }
  `,
					postTypingIndicator: p.a`
    subscription SubscribeSubscription($input: SubscribeInput!) {
      subscribe(input: $input) {
        id
        ... on BasicMessage {
          data {
            ... on PostTypingIndicatorMessageData {
              numUsers
            }
          }
        }
      }
    }
  `,
					userIsOnline: p.a`
    subscription SubscribeSubscription($input: SubscribeInput!) {
      subscribe(input: $input) {
        id
      }
    }
  `,
					isUserOnline: p.a`
    subscription SubscribeSubscription($input: SubscribeInput!) {
      subscribe(input: $input) {
        id
        ... on BasicMessage {
          data {
            ... on PostTypingIndicatorMessageData {
              numUsers
            }
          }
        }
      }
    }
  `
				},
				l = t("./node_modules/subscriptions-transport-ws/dist/client.js"),
				d = t("./src/config.ts");

			function m() {
				return (m = Object.assign || function(e) {
					for (var n = 1; n < arguments.length; n++) {
						var t = arguments[n];
						for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
					}
					return e
				}).apply(this, arguments)
			}
			let g;
			const S = {
					reconnect: !0,
					reconnectionAttempts: 6,
					lazy: !0,
					timeout: 3e4,
					inactivityTimeout: 15e3
				},
				C = {
					name: "web2x",
					version: "0.0.1"
				},
				_ = r.a.memo(({
					apolloClient: e,
					onData: n,
					onError: t,
					onLoading: s,
					queryKey: i,
					subscriptionQueries: u,
					variables: a
				}) => {
					const r = u[i],
						{
							data: c,
							loading: p,
							error: b
						} = Object(o.a)(r, {
							variables: a,
							client: e
						});
					return b ? t && t() : p ? s && s() : !b && !p && c && c.subscribe && c.subscribe.data && n && n(c), null
				});
			n.default = e => {
				const [n, t] = Object(a.useState)(g), o = Object(c.e)(e => e.user.session);
				Object(a.useEffect)(() => {
					g || (g = function() {
						let e;
						return {
							getInstance: () => (e || (e = function() {
								const e = new u.a(new l.SubscriptionClient(`wss://${d.a.gqlRealtimeAddress}`, {
									...S,
									connectionParams: {
										Authorization: o && o.accessToken ? `Bearer ${o.accessToken}` : ""
									}
								}));
								return new s.a({
									...C,
									cache: new i.a,
									link: e
								})
							}()), e)
						}
					}(), t(g)), g && !n && t(g)
				}, [o, t, n]);
				const p = Object(a.useRef)((e => {
					if (e) {
						return !!document.getElementById(e)
					}
					return !1
				})(e.uniqueKey));
				return n && n.getInstance() && b && !p.current ? n && r.a.createElement(r.a.Fragment, null, r.a.createElement(_, m({}, e, {
					apolloClient: n.getInstance(),
					subscriptionQueries: b
				})), r.a.createElement("span", {
					id: e.uniqueKey
				})) : null
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RealtimeGQLSubscriptionAsync.180a9e26ab1623821465.js.map