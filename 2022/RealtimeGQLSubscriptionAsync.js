// https://www.redditstatic.com/desktop2x/RealtimeGQLSubscriptionAsync.3ec66f76378e70e75289.js
// Retrieved at 6/23/2022, 6:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RealtimeGQLSubscriptionAsync"], {
		"./node_modules/@apollo/client/react/context/ApolloContext.js": function(t, e, i) {
			"use strict";
			i.d(e, "a", (function() {
				return r
			}));
			var n = i("./node_modules/react/index.js"),
				s = i.n(n),
				o = new(i("./node_modules/@apollo/client/utilities/common/canUse.js").a ? WeakMap : Map);

			function r() {
				var t = o.get(s.a.createContext);
				return t || ((t = s.a.createContext({})).displayName = "ApolloContext", o.set(s.a.createContext, t)), t
			}
		},
		"./node_modules/@apollo/client/react/data/OperationData.js": function(t, e, i) {
			"use strict";
			i.d(e, "a", (function() {
				return r
			}));
			var n = i("./node_modules/@wry/equality/lib/equality.esm.js"),
				s = i("./node_modules/@apollo/client/node_modules/ts-invariant/lib/invariant.esm.js"),
				o = i("./node_modules/@apollo/client/react/parser/index.js"),
				r = function() {
					function t(t, e) {
						this.isMounted = !1, this.previousOptions = {}, this.context = {}, this.options = {}, this.options = t || {}, this.context = e || {}
					}
					return t.prototype.getOptions = function() {
						return this.options
					}, t.prototype.setOptions = function(t, e) {
						void 0 === e && (e = !1), e && !Object(n.a)(this.options, t) && (this.previousOptions = this.options), this.options = t
					}, t.prototype.unmount = function() {
						this.isMounted = !1
					}, t.prototype.refreshClient = function() {
						var t = this.options && this.options.client || this.context && this.context.client;
						Object(s.b)(!!t, 29);
						var e = !1;
						return t !== this.client && (e = !0, this.client = t, this.cleanup()), {
							client: this.client,
							isNew: e
						}
					}, t.prototype.verifyDocumentType = function(t, e) {
						var i = Object(o.c)(t);
						Object(o.b)(e), Object(o.b)(i.type);
						Object(s.b)(i.type === e, 30)
					}, t
				}()
		},
		"./node_modules/@apollo/client/react/parser/index.js": function(t, e, i) {
			"use strict";
			i.d(e, "a", (function() {
				return n
			})), i.d(e, "b", (function() {
				return r
			})), i.d(e, "c", (function() {
				return u
			}));
			var n, s = i("./node_modules/@apollo/client/node_modules/ts-invariant/lib/invariant.esm.js");
			! function(t) {
				t[t.Query = 0] = "Query", t[t.Mutation = 1] = "Mutation", t[t.Subscription = 2] = "Subscription"
			}(n || (n = {}));
			var o = new Map;

			function r(t) {
				var e;
				switch (t) {
					case n.Query:
						e = "Query";
						break;
					case n.Mutation:
						e = "Mutation";
						break;
					case n.Subscription:
						e = "Subscription"
				}
				return e
			}

			function u(t) {
				var e, i, r = o.get(t);
				if (r) return r;
				Object(s.b)(!!t && !!t.kind, 34);
				var u = t.definitions.filter((function(t) {
						return "FragmentDefinition" === t.kind
					})),
					a = t.definitions.filter((function(t) {
						return "OperationDefinition" === t.kind && "query" === t.operation
					})),
					c = t.definitions.filter((function(t) {
						return "OperationDefinition" === t.kind && "mutation" === t.operation
					})),
					p = t.definitions.filter((function(t) {
						return "OperationDefinition" === t.kind && "subscription" === t.operation
					}));
				Object(s.b)(!u.length || a.length || c.length || p.length, 35), Object(s.b)(a.length + c.length + p.length <= 1, 36), i = a.length ? n.Query : n.Mutation, a.length || c.length || (i = n.Subscription);
				var l = a.length ? a : c.length ? c : p;
				Object(s.b)(1 === l.length, 37);
				var b = l[0];
				e = b.variableDefinitions || [];
				var d = {
					name: b.name && "Name" === b.name.kind ? b.name.value : "data",
					type: i,
					variables: e
				};
				return o.set(t, d), d
			}
		},
		"./src/realtime/GQLSubscription/index.tsx": function(t, e, i) {
			"use strict";
			i.r(e), i.d(e, "useClientSingleton", (function() {
				return f
			}));
			var n = i("./node_modules/@apollo/client/node_modules/tslib/tslib.es6.js"),
				s = i("./node_modules/react/index.js"),
				o = i.n(s),
				r = i("./node_modules/@wry/equality/lib/equality.esm.js"),
				u = function(t) {
					function e(e) {
						var i = e.options,
							n = e.context,
							s = e.setResult,
							o = t.call(this, i, n) || this;
						return o.currentObservable = {}, o.setResult = s, o.initialize(i), o
					}
					return Object(n.c)(e, t), e.prototype.execute = function(t) {
						if (!0 === this.getOptions().skip) return this.cleanup(), {
							loading: !1,
							error: void 0,
							data: void 0,
							variables: this.getOptions().variables
						};
						var e = t;
						this.refreshClient().isNew && (e = this.getLoadingResult());
						var i = this.getOptions().shouldResubscribe;
						return "function" == typeof i && (i = !!i(this.getOptions())), !1 !== i && this.previousOptions && Object.keys(this.previousOptions).length > 0 && (this.previousOptions.subscription !== this.getOptions().subscription || !Object(r.a)(this.previousOptions.variables, this.getOptions().variables) || this.previousOptions.skip !== this.getOptions().skip) && (this.cleanup(), e = this.getLoadingResult()), this.initialize(this.getOptions()), this.startSubscription(), this.previousOptions = this.getOptions(), Object(n.a)(Object(n.a)({}, e), {
							variables: this.getOptions().variables
						})
					}, e.prototype.afterExecute = function() {
						this.isMounted = !0
					}, e.prototype.cleanup = function() {
						this.endSubscription(), delete this.currentObservable.query
					}, e.prototype.initialize = function(t) {
						this.currentObservable.query || !0 === this.getOptions().skip || (this.currentObservable.query = this.refreshClient().client.subscribe({
							query: t.subscription,
							variables: t.variables,
							fetchPolicy: t.fetchPolicy,
							context: t.context
						}))
					}, e.prototype.startSubscription = function() {
						this.currentObservable.subscription || (this.currentObservable.subscription = this.currentObservable.query.subscribe({
							next: this.updateCurrentData.bind(this),
							error: this.updateError.bind(this),
							complete: this.completeSubscription.bind(this)
						}))
					}, e.prototype.getLoadingResult = function() {
						return {
							loading: !0,
							error: void 0,
							data: void 0
						}
					}, e.prototype.updateResult = function(t) {
						this.isMounted && this.setResult(t)
					}, e.prototype.updateCurrentData = function(t) {
						var e = this.getOptions().onSubscriptionData;
						this.updateResult({
							data: t.data,
							loading: !1,
							error: void 0
						}), e && e({
							client: this.refreshClient().client,
							subscriptionData: t
						})
					}, e.prototype.updateError = function(t) {
						this.updateResult({
							error: t,
							loading: !1
						})
					}, e.prototype.completeSubscription = function() {
						var t = this;
						Promise.resolve().then((function() {
							var e = t.getOptions().onSubscriptionComplete;
							e && e(), t.endSubscription()
						}))
					}, e.prototype.endSubscription = function() {
						this.currentObservable.subscription && (this.currentObservable.subscription.unsubscribe(), delete this.currentObservable.subscription)
					}, e
				}(i("./node_modules/@apollo/client/react/data/OperationData.js").a),
				a = i("./node_modules/@apollo/client/react/context/ApolloContext.js");
			var c = i("./node_modules/react-redux/es/index.js"),
				p = i("./src/realtime/connection.ts"),
				l = i("./node_modules/graphql-tag/lib/index.js");
			var b = {
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
  `,
				userIsOnline: l.a`
    subscription SubscribeSubscription($input: SubscribeInput!) {
      subscribe(input: $input) {
        id
      }
    }
  `,
				isUserOnline: l.a`
    subscription SubscribeSubscription($input: SubscribeInput!) {
      subscribe(input: $input) {
        id
        ... on BasicMessage {
          data {
            ... on UserOnlineStatusMessageData {
              isOnline
            }
          }
        }
      }
    }
  `,
				userIsReadingPost: l.a`
    subscription SubscribeSubscription($input: SubscribeInput!) {
      subscribe(input: $input) {
        id
      }
    }
  `,
				usersReadingIndicator: l.a`
    subscription SubscribeSubscription($input: SubscribeInput!) {
      subscribe(input: $input) {
        id
        ... on BasicMessage {
          data {
            ... on PostReadingCountMessageData {
              numUsers
            }
          }
        }
      }
    }
  `,
				liveChatCommentReactions: l.a`
    subscription SubscribeSubscription($input: SubscribeInput!) {
      subscribe(input: $input) {
        id
        ... on BasicMessage {
          data {
            ... on LiveChatReactionMessageData {
              actionTaken
              userID
              commentID
              reaction {
                id
                iconURL
              }
            }
          }
        }
      }
    }
  `
			};

			function d() {
				return (d = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var i = arguments[e];
						for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
					}
					return t
				}).apply(this, arguments)
			}
			let h;
			const f = t => {
					const [e, i] = Object(s.useState)(h), n = Object(c.e)(t => t.user.session);
					Object(s.useEffect)(() => {
						h || i(h = {
							getInstance: () => Object(p.a)(null == n ? void 0 : n.accessToken)
						}), h && !e && i(h)
					}, [n, i, e]);
					const o = Object(s.useRef)((t => {
						if (t) {
							return !!document.getElementById(t)
						}
						return !1
					})(t));
					return e && e.getInstance() && b && !o.current ? e : null
				},
				m = o.a.memo(t => {
					let {
						apolloClient: e,
						onData: i,
						onError: o,
						onLoading: r,
						queryKey: c,
						subscriptionQueries: p,
						variables: l
					} = t;
					const b = p[c],
						{
							data: d,
							loading: h,
							error: f
						} = function(t, e) {
							var i = Object(s.useContext)(Object(a.a)()),
								o = e ? Object(n.a)(Object(n.a)({}, e), {
									subscription: t
								}) : {
									subscription: t
								},
								r = Object(s.useState)({
									loading: !o.skip,
									error: void 0,
									data: void 0
								}),
								c = r[0],
								p = r[1],
								l = Object(s.useRef)(),
								b = (l.current || (l.current = new u({
									options: o,
									context: i,
									setResult: p
								})), l.current);
							return b.setOptions(o, !0), b.context = i, Object(s.useEffect)((function() {
								return b.afterExecute()
							})), Object(s.useEffect)((function() {
								return b.cleanup.bind(b)
							}), []), b.execute(c)
						}(b, {
							variables: l,
							client: e
						});
					return f ? o && o() : h ? r && r() : !f && !h && d && d.subscribe && d.subscribe.data && i && i(d), null
				});
			e.default = t => {
				const e = f(t.uniqueKey);
				return e && o.a.createElement(o.a.Fragment, null, o.a.createElement(m, d({}, t, {
					apolloClient: e.getInstance(),
					subscriptionQueries: b
				})), o.a.createElement("span", {
					id: t.uniqueKey
				}))
			}
		},
		"./src/realtime/connection.ts": function(t, e, i) {
			"use strict";
			i.d(e, "a", (function() {
				return l
			}));
			var n = i("./node_modules/@apollo/client/core/ApolloClient.js"),
				s = i("./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js"),
				o = i("./node_modules/@apollo/client/link/ws/index.js"),
				r = i("./src/config.ts"),
				u = i("./node_modules/subscriptions-transport-ws/dist/client.js");
			let a;
			const c = {
					reconnect: !0,
					reconnectionAttempts: 6,
					lazy: !0,
					timeout: 3e4,
					inactivityTimeout: 15e3
				},
				p = {
					name: "web2x",
					version: "0.0.1"
				};

			function l(t) {
				if (!a) {
					const e = new o.a(new u.SubscriptionClient(`wss://${r.a.gqlRealtimeAddress}`, {
						...c,
						connectionParams: {
							Authorization: t ? `Bearer ${t}` : ""
						}
					}));
					a = new n.a({
						...p,
						cache: new s.a,
						link: e
					})
				}
				return a
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RealtimeGQLSubscriptionAsync.3ec66f76378e70e75289.js.map