// https://www.redditstatic.com/desktop2x/RealtimeGQLSubscriptionAsync.68806735f8b8c283c53d.js
// Retrieved at 10/5/2021, 12:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RealtimeGQLSubscriptionAsync"], {
		"./src/realtime/GQLSubscription/index.tsx": function(e, n, t) {
			"use strict";
			t.r(n);
			var s = t("./node_modules/@apollo/client/core/ApolloClient.js"),
				i = t("./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js"),
				o = t("./node_modules/@apollo/client/react/hooks/useSubscription.js"),
				a = t("./node_modules/@apollo/client/link/ws/index.js"),
				u = t("./node_modules/react/index.js"),
				r = t.n(u),
				c = t("./node_modules/react-redux/es/index.js"),
				l = t("./node_modules/@apollo/client/node_modules/graphql-tag/lib/index.js");
			var p = {
					postVoteCount: l.a`
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
					postCommentCount: l.a`
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
					topLevelCommentCountChange: l.a`
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
					userIsTypingOnPost: l.a`
    subscription SubscribeSubscription($input: SubscribeInput!) {
      subscribe(input: $input) {
        id
      }
    }
  `,
					postTypingIndicator: l.a`
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
				b = t("./node_modules/subscriptions-transport-ws/dist/client.js"),
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
			const C = {
					reconnect: !0,
					reconnectionAttempts: 6,
					lazy: !0,
					timeout: 3e4,
					inactivityTimeout: 15e3
				},
				S = {
					name: "web2x",
					version: "0.0.1"
				},
				_ = r.a.memo(({
					apolloClient: e,
					onData: n,
					onError: t,
					onLoading: s,
					queryKey: i,
					subscriptionQueries: a,
					variables: u
				}) => {
					const r = a[i],
						{
							data: c,
							loading: l,
							error: p
						} = Object(o.a)(r, {
							variables: u,
							client: e
						});
					return p ? t && t() : l ? s && s() : !p && !l && c && c.subscribe && c.subscribe.data && n && n(c), null
				});
			n.default = e => {
				const [n, t] = Object(u.useState)(g), o = Object(c.e)(e => e.user.session);
				Object(u.useEffect)(() => {
					g || (g = function() {
						let e;
						return {
							getInstance: () => (e || (e = function() {
								const e = new a.a(new b.SubscriptionClient(`wss://${d.a.gqlRealtimeAddress}`, {
									...C,
									connectionParams: {
										Authorization: o && o.accessToken ? `Bearer ${o.accessToken}` : ""
									}
								}));
								return new s.a({
									...S,
									cache: new i.a,
									link: e
								})
							}()), e)
						}
					}(), t(g)), g && !n && t(g)
				}, [o, t, n]);
				const l = Object(u.useRef)((e => {
					if (e) {
						return !!document.getElementById(e)
					}
					return !1
				})(e.uniqueKey));
				return n && n.getInstance() && p && !l.current ? n && r.a.createElement(r.a.Fragment, null, r.a.createElement(_, m({}, e, {
					apolloClient: n.getInstance(),
					subscriptionQueries: p
				})), r.a.createElement("span", {
					id: e.uniqueKey
				})) : null
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RealtimeGQLSubscriptionAsync.68806735f8b8c283c53d.js.map