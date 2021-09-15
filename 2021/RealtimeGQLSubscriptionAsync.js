// https://www.redditstatic.com/desktop2x/RealtimeGQLSubscriptionAsync.c5831a8aa346fee804d4.js
// Retrieved at 9/15/2021, 7:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RealtimeGQLSubscriptionAsync"], {
		"./src/realtime/GQLSubscription/index.tsx": function(e, n, t) {
			"use strict";
			t.r(n);
			var s = t("./node_modules/@apollo/client/core/ApolloClient.js"),
				o = t("./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js"),
				i = t("./node_modules/@apollo/client/react/hooks/useSubscription.js"),
				r = t("./node_modules/@apollo/client/link/ws/index.js"),
				a = t("./node_modules/react/index.js"),
				u = t.n(a),
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
					userIsTypingOnPost: l.a`
    subscription SubscribeSubscription($input: SubscribeInput!) {
      subscribe(input: $input) {
        id
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
			let _;
			const g = {
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
				S = u.a.memo(({
					apolloClient: e,
					onData: n,
					onError: t,
					onLoading: s,
					queryKey: o,
					subscriptionQueries: r,
					variables: a
				}) => {
					const u = r[o],
						{
							data: c,
							loading: l,
							error: p
						} = Object(i.a)(u, {
							variables: a,
							client: e
						});
					return p ? t && t() : l ? s && s() : !p && !l && c && c.subscribe && c.subscribe.data && n && n(c), null
				});
			n.default = e => {
				const [n, t] = Object(a.useState)(_), i = Object(c.e)(e => e.user.session);
				Object(a.useEffect)(() => {
					_ || (_ = function() {
						let e;
						return {
							getInstance: () => (e || (e = function() {
								const e = new r.a(new b.SubscriptionClient(`wss://${d.a.gqlRealtimeAddress}`, {
									...g,
									connectionParams: {
										Authorization: i && i.accessToken ? `Bearer ${i.accessToken}` : ""
									}
								}));
								return new s.a({
									...C,
									cache: new o.a,
									link: e
								})
							}()), e)
						}
					}(), t(_)), _ && !n && t(_)
				}, [i, t, n]);
				const l = Object(a.useRef)((e => {
					if (e) {
						return !!document.getElementById(e)
					}
					return !1
				})(e.uniqueKey));
				return n && n.getInstance() && p && !l.current ? n && u.a.createElement(u.a.Fragment, null, u.a.createElement(S, m({}, e, {
					apolloClient: n.getInstance(),
					subscriptionQueries: p
				})), u.a.createElement("span", {
					id: e.uniqueKey
				})) : null
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RealtimeGQLSubscriptionAsync.c5831a8aa346fee804d4.js.map