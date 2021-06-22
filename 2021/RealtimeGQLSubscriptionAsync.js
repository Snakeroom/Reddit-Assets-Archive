// https://www.redditstatic.com/desktop2x/RealtimeGQLSubscriptionAsync.db8d3a12bd59cf24e5f5.js
// Retrieved at 6/22/2021, 1:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RealtimeGQLSubscriptionAsync"], {
		"./src/realtime/GQLSubscription/index.tsx": function(e, n, t) {
			"use strict";
			t.r(n);
			var s = t("./node_modules/@apollo/client/core/ApolloClient.js"),
				o = t("./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js"),
				i = t("./node_modules/@apollo/client/react/hooks/useSubscription.js"),
				a = t("./node_modules/@apollo/client/link/ws/index.js"),
				r = t("./node_modules/react/index.js"),
				c = t.n(r),
				u = t("./node_modules/react-redux/es/index.js"),
				l = t("./node_modules/graphql-tag/lib/index.js");
			var p = {
					postVoteCount: l.a`
    subscription SubscribeSubscription($input: SubscribeInput!) {
      subscribe(input: $input) {
        id
        ... on BasicMessage {
          data {
            ... on PostCountUpdateMessageData {
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
            ... on PostCountUpdateMessageData {
              commentCountChange
            }
          }
        }
      }
    }
  `
				},
				d = t("./node_modules/subscriptions-transport-ws/dist/client.js"),
				b = t("./src/config.ts");

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
				j = c.a.memo(({
					apolloClient: e,
					onData: n,
					onError: t,
					onLoading: s,
					queryKey: o,
					subscriptionQueries: a,
					variables: r
				}) => {
					const c = a[o],
						{
							data: u,
							loading: l,
							error: p
						} = Object(i.a)(c, {
							variables: r,
							client: e
						});
					return p ? t && t() : l ? s && s() : !p && !l && u && u.subscribe && u.subscribe.data && n && n(u), null
				});
			n.default = e => {
				const [n, t] = Object(r.useState)(_), i = Object(u.e)(e => e.user.session);
				return Object(r.useEffect)(() => {
					_ || (_ = function() {
						let e;
						return {
							getInstance: () => (e || (e = function() {
								const e = new a.a(new d.SubscriptionClient(`wss://${b.a.gqlRealtimeAddress}`, {
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
				}, [i, t, n]), n && n.getInstance() && p ? c.a.createElement(c.a.Fragment, null, n && c.a.createElement(j, m({}, e, {
					apolloClient: n.getInstance(),
					subscriptionQueries: p
				}))) : null
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RealtimeGQLSubscriptionAsync.db8d3a12bd59cf24e5f5.js.map