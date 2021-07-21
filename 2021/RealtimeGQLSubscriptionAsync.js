// https://www.redditstatic.com/desktop2x/RealtimeGQLSubscriptionAsync.70d01d12f4a0876073c6.js
// Retrieved at 7/21/2021, 6:30:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RealtimeGQLSubscriptionAsync"], {
		"./src/realtime/GQLSubscription/index.tsx": function(e, n, t) {
			"use strict";
			t.r(n);
			var o = t("./node_modules/@apollo/client/core/ApolloClient.js"),
				s = t("./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js"),
				i = t("./node_modules/@apollo/client/react/hooks/useSubscription.js"),
				a = t("./node_modules/@apollo/client/link/ws/index.js"),
				r = t("./node_modules/react/index.js"),
				c = t.n(r),
				u = t("./node_modules/react-redux/es/index.js"),
				l = t("./node_modules/@apollo/client/node_modules/graphql-tag/lib/index.js");
			var d = {
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
  `
				},
				p = t("./node_modules/subscriptions-transport-ws/dist/client.js"),
				b = t("./src/config.ts");

			function m() {
				return (m = Object.assign || function(e) {
					for (var n = 1; n < arguments.length; n++) {
						var t = arguments[n];
						for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
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
				j = c.a.memo(({
					apolloClient: e,
					onData: n,
					onError: t,
					onLoading: o,
					queryKey: s,
					subscriptionQueries: a,
					variables: r
				}) => {
					const c = a[s],
						{
							data: u,
							loading: l,
							error: d
						} = Object(i.a)(c, {
							variables: r,
							client: e
						});
					return d ? t && t() : l ? o && o() : !d && !l && u && u.subscribe && u.subscribe.data && n && n(u), null
				});
			n.default = e => {
				const [n, t] = Object(r.useState)(_), i = Object(u.e)(e => e.user.session);
				Object(r.useEffect)(() => {
					_ || (_ = function() {
						let e;
						return {
							getInstance: () => (e || (e = function() {
								const e = new a.a(new p.SubscriptionClient(`wss://${b.a.gqlRealtimeAddress}`, {
									...g,
									connectionParams: {
										Authorization: i && i.accessToken ? `Bearer ${i.accessToken}` : ""
									}
								}));
								return new o.a({
									...C,
									cache: new s.a,
									link: e
								})
							}()), e)
						}
					}(), t(_)), _ && !n && t(_)
				}, [i, t, n]);
				const l = Object(r.useRef)((e => {
					if (e) {
						return !!document.getElementById(e)
					}
					return !1
				})(e.uniqueKey));
				return n && n.getInstance() && d && !l.current ? n && c.a.createElement(c.a.Fragment, null, c.a.createElement(j, m({}, e, {
					apolloClient: n.getInstance(),
					subscriptionQueries: d
				})), c.a.createElement("span", {
					id: e.uniqueKey
				})) : null
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RealtimeGQLSubscriptionAsync.70d01d12f4a0876073c6.js.map