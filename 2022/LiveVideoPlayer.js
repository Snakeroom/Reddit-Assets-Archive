// https://www.redditstatic.com/desktop2x/LiveVideoPlayer.aebc0602a8e94b457ee4.js
// Retrieved at 8/1/2022, 10:20:09 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["LiveVideoPlayer"], {
		"./node_modules/lodash/isUndefined.js": function(e, t) {
			e.exports = function(e) {
				return void 0 === e
			}
		},
		"./src/lib/focusVisible/index.js": function(e, t, s) {
			"use strict";
			t.a = function(e) {
				var t = !0,
					s = !1,
					n = null,
					r = {
						text: !0,
						search: !0,
						url: !0,
						tel: !0,
						email: !0,
						password: !0,
						number: !0,
						date: !0,
						month: !0,
						week: !0,
						time: !0,
						datetime: !0,
						"datetime-local": !0
					};

				function i(e) {
					return !!(e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList" in e && "contains" in e.classList)
				}

				function o(e) {
					e.classList.contains("focus-visible") || (e.classList.add("focus-visible"), e.setAttribute("data-focus-visible-added", ""))
				}

				function a(e) {
					t = !1
				}

				function d() {
					document.addEventListener("mousemove", c), document.addEventListener("mousedown", c), document.addEventListener("mouseup", c), document.addEventListener("pointermove", c), document.addEventListener("pointerdown", c), document.addEventListener("pointerup", c), document.addEventListener("touchmove", c), document.addEventListener("touchstart", c), document.addEventListener("touchend", c)
				}

				function c(e) {
					e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1, document.removeEventListener("mousemove", c), document.removeEventListener("mousedown", c), document.removeEventListener("mouseup", c), document.removeEventListener("pointermove", c), document.removeEventListener("pointerdown", c), document.removeEventListener("pointerup", c), document.removeEventListener("touchmove", c), document.removeEventListener("touchstart", c), document.removeEventListener("touchend", c))
				}
				document.addEventListener("keydown", (function(s) {
					s.metaKey || s.altKey || s.ctrlKey || (i(e.activeElement) && o(e.activeElement), t = !0)
				}), !0), document.addEventListener("mousedown", a, !0), document.addEventListener("pointerdown", a, !0), document.addEventListener("touchstart", a, !0), document.addEventListener("visibilitychange", (function(e) {
					"hidden" === document.visibilityState && (s && (t = !0), d())
				}), !0), d(), e.addEventListener("focus", (function(e) {
					var s, n, a;
					i(e.target) && (t || (s = e.target, n = s.type, "INPUT" === (a = s.tagName) && r[n] && !s.readOnly || "TEXTAREA" === a && !s.readOnly || s.isContentEditable)) && o(e.target)
				}), !0), e.addEventListener("blur", (function(e) {
					var t;
					i(e.target) && (e.target.classList.contains("focus-visible") || e.target.hasAttribute("data-focus-visible-added")) && (s = !0, window.clearTimeout(n), n = window.setTimeout((function() {
						s = !1
					}), 100), (t = e.target).hasAttribute("data-focus-visible-added") && (t.classList.remove("focus-visible"), t.removeAttribute("data-focus-visible-added")))
				}), !0), e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host ? e.host.setAttribute("data-js-focus-visible", "") : e.nodeType === Node.DOCUMENT_NODE && document.documentElement.classList.add("js-focus-visible")
			}
		},
		"./src/reddit/actions/publicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return m
			})), s.d(t, "a", (function() {
				return y
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "e", (function() {
				return S
			})), s.d(t, "f", (function() {
				return w
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/query-string/index.js"),
				r = s.n(n),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				d = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				c = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				u = s("./src/reddit/selectors/subreddit.ts");
			const l = new Set(["home", "r/popular"]),
				m = e => {
					const t = location && location.search || "",
						s = r.a.parse(t);
					l.has(e) && (s.related = e);
					const n = r.a.stringify(s);
					return n ? `?${n}` : ""
				},
				h = Object(i.a)(o.N),
				b = Object(i.a)(o.y),
				p = Object(i.a)(o.O),
				f = Object(i.a)(o.z),
				v = Object(i.a)(o.M),
				O = Object(i.a)(o.L),
				y = Object(i.a)(o.t),
				_ = Object(i.a)(o.u),
				g = e => async (t, s, n) => {
					let {
						gqlContext: r
					} = n;
					const i = Object(d.g)(e),
						o = s();
					if (Object(c.d)(o, i)) return;
					t(h(i));
					const u = await Object(a.e)(r(), i),
						l = Date.now();
					if (u.ok && u.body && u.body.data) {
						const e = u.body.data;
						t(b({
							model: e,
							utcTimeStamp: l
						}))
					} else t(L({
						streamId: i,
						error: u.error,
						utcTimeStamp: l
					}))
				}, S = (e, t) => async (s, n) => s(j(e, t)), j = (e, t) => async (s, n, r) => {
					let {
						gqlContext: i
					} = r;
					const o = n();
					if (Object(c.f)(o)) return;
					s(p());
					const d = await Object(a.f)(i(), e, t),
						u = Date.now();
					if (d.ok && d.body && d.body.data) {
						const t = d.body.data;
						s(f({
							listingName: e,
							models: t,
							utcTimeStamp: u
						}))
					} else s(I({
						error: d.error,
						utcTimeStamp: u
					}))
				}, w = (e, t) => async (s, n) => s(E(e, t)), E = (e, t) => async (s, n, r) => {
					let {
						gqlContext: i
					} = r;
					const o = n();
					if (Object(c.f)(o)) return;
					s(p());
					const d = Date.now(),
						l = e.replace("r/", ""),
						m = Object(u.G)(o, l),
						h = await Object(a.b)(i(), {
							subredditId: m,
							options: t
						}),
						b = h.body;
					h.ok && b && b.data || s(I({
						error: h.error,
						utcTimeStamp: d
					}));
					const v = b.data.liveVideoFeed.posts.edges.map(e => (async (e, t) => {
							const s = await Object(a.e)(e, t),
								n = Date.now(),
								r = s.body;
							return r && r.data ? r.data : void L({
								streamId: t,
								error: s.error,
								utcTimeStamp: n
							})
						})(i(), e.node.id)),
						O = (await Promise.all(v)).filter(e => void 0 !== typeof e);
					s(f({
						listingName: e,
						models: O,
						utcTimeStamp: d
					}))
				}, L = e => async t => {
					t(v(e))
				}, I = e => async t => {
					t(O(e))
				}
		},
		"./src/reddit/actions/subscription/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "h", (function() {
				return o
			})), s.d(t, "i", (function() {
				return a
			})), s.d(t, "g", (function() {
				return d
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "e", (function() {
				return l
			}));
			const n = "SUBSCRIPTION__FETCH_DATA_PENDING",
				r = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
				i = "SUBSCRIPTION__FETCH_DATA_FAILURE",
				o = "SUBSCRIPTION__SUBSCRIPTION_TOGGLED",
				a = "SUBSCRIPTION__SUBSCIPTION_TOGGLE_FAILED",
				d = "SUBSCRIPTION__ORDER_LOADED",
				c = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				u = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				l = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return M
			})), s.d(t, "d", (function() {
				return D
			})), s.d(t, "c", (function() {
				return V
			})), s.d(t, "a", (function() {
				return F
			})), s.d(t, "b", (function() {
				return B
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/linkMatchers/customLinks.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/emailVerificationTooltip.ts"),
				d = s("./src/reddit/actions/login.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/actions/subscription/constants.ts"),
				l = s("./src/reddit/actions/toaster.ts"),
				m = s("./src/reddit/constants/posts.ts"),
				h = s("./src/lib/makeApiRequest/index.ts"),
				b = s("./src/lib/omitHeaders/index.ts"),
				p = s("./src/reddit/constants/headers.ts");
			var f = s("./src/reddit/endpoints/subreddit/subscriptions.ts"),
				v = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				O = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				y = s("./src/reddit/models/GqlTopLevelField.ts"),
				_ = s("./src/reddit/models/User/index.ts");

			function g(e) {
				const t = [],
					s = [],
					n = {},
					r = {},
					{
						followedRedditorsInfo: i
					} = e.identity;
				for (const a of i.edges) {
					if (a.node.__typename !== _.c.AvailableRedditor || !a.node.profile) continue;
					const e = Object(v.a)(a.node.profile);
					n[e.id] = e;
					const {
						isFavorite: s
					} = a.node.profile;
					s && t.push(e.id)
				}
				const {
					subscribedSubreddits: o
				} = e.identity;
				for (const a of o.edges) {
					if (a.node.__typename !== y.a.Subreddit) continue;
					const e = Object(O.a)(a.node);
					r[e.id] = e;
					const {
						isFavorite: t
					} = a.node;
					t && s.push(e.id)
				}
				return {
					favoriteProfileIds: t,
					favoriteSubredditIds: s,
					profiles: n,
					subreddits: r
				}
			}
			var S = s("./src/reddit/models/Toast/index.ts"),
				j = s("./src/reddit/selectors/experiments/emailEnablement.ts"),
				w = s("./src/reddit/selectors/profile.ts"),
				E = s("./src/reddit/selectors/subreddit.ts"),
				L = s("./src/reddit/selectors/subscriptions.ts"),
				I = s("./src/reddit/selectors/user.ts");
			const k = () => n.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				C = Object(o.a)(u.c),
				x = Object(o.a)(u.b),
				P = Object(o.a)(u.a),
				N = Object(o.a)(u.h),
				M = (Object(o.a)(u.i), Object(o.a)(u.g), () => async (e, t, s) => {
					let {
						gqlContext: n
					} = s;
					const r = t();
					if (!r.user.account || r.subscriptions.api.fetched) return;
					e(x());
					const i = await Object(f.a)(n());
					if (i.ok) {
						const t = g(i.body.data);
						e(C(t))
					} else e(P({
						error: i.error
					}))
				}),
				T = (e, t) => t.type === m.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				D = (e, t, s) => async (o, u, h) => {
					let {
						apiContext: b
					} = h, p = e.map(e => e.type === m.a.SUBREDDIT ? {
						id: Object(E.G)(u(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(w.m)(u(), e.name),
						name: `${r.kc}${e.name}`,
						type: e.type
					});
					if (!Object(I.Q)(u())) return o(Object(c.k)({
						actionSource: c.a.Subscribe
					})), void o(Object(d.openRegisterModal)());
					const v = Object(I.k)(u());
					if (v) {
						const t = p.length,
							s = e.length;
						if (p = p.filter(e => !T(v, e)), (e = e.filter(e => !T(v, e))).length !== s || p.length !== t) {
							const e = n.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							o(Object(l.f)(Object(l.e)(e, S.b.Error)))
						}
						if (!e.length && !p.length) return
					}
					o(N({
						identifiers: p,
						nameIdentifiers: e,
						profileModels: u().profiles.models,
						subredditModels: u().subreddits.models,
						subscriptionsCount: Object(L.b)(u()),
						userIsSubscriber: t,
						widgetId: s
					}));
					const O = await Object(f.c)(b(), {
						subredditNames: p.map(e => {
							let {
								name: t
							} = e;
							return t
						}),
						subscribe: t
					});
					if (O.ok) {
						const s = 1 === e.length ? `${"subreddit"===e[0].type?i.d.subreddit:i.d.profile}${e[0].name}` : n.fbt._({
								"*": "{communities} communities",
								_1: "1 community"
							}, [n.fbt._plural(e.length, "communities")], {
								hk: "IgDzJ"
							}),
							r = n.fbt._("Successfully followed {communityname}", [n.fbt._param("communityname", s)], {
								hk: "23Snyg"
							}),
							a = n.fbt._("Successfully unfollowed {communityname}", [n.fbt._param("communityname", s)], {
								hk: "jfC0S"
							}),
							d = n.fbt._("Successfully joined {communityname}", [n.fbt._param("communityname", s)], {
								hk: "1W9UY3"
							}),
							c = n.fbt._("Successfully left {communityname}", [n.fbt._param("communityname", s)], {
								hk: "1saMW"
							});
						o(Object(l.f)({
							text: 1 === e.length && "profile" === e[0].type ? t ? r : a : t ? d : c
						}))
					} else {
						o(N({
							identifiers: p,
							nameIdentifiers: e,
							profileModels: u().profiles.models,
							subredditModels: u().subreddits.models,
							subscriptionsCount: Object(L.b)(u()),
							userIsSubscriber: !t,
							widgetId: s
						}));
						const r = n.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						o(Object(l.f)(Object(l.e)(r, S.b.Error)))
					}
					return t && Object(j.a)(u()) && (1 === e.length && "profile" === e[0].type ? o(Object(a.c)("user_follow")) : o(Object(a.c)("join"))), O.ok
				}, A = Object(o.a)(u.f), V = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					const i = s(),
						o = Object(E.N)(i, {
							identifier: e
						});
					if (!o) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const a = e.type === m.a.SUBREDDIT ? o.name : `u_${o.name}`,
						d = i.subscriptions.favoriteSubredditOrder || [],
						c = i.subscriptions.favoriteProfileOrder || [],
						u = d.indexOf(e.id),
						h = c.indexOf(e.id),
						b = -1 === u && -1 === h,
						p = i.subreddits.models,
						v = i.profiles.models,
						O = {
							type: e.type,
							name: o.name
						},
						y = () => Object(E.hb)(s(), {
							identifier: O
						});
					(y() || (await t(D([O], !0)), y())) && (t(A({
						makeFavorite: b,
						identifier: e,
						subredditModels: p,
						profileModels: v
					})), (await Object(f.b)(r(), a, b)).ok || (t(A({
						makeFavorite: !b,
						identifier: e,
						subredditModels: p,
						profileModels: v
					})), t(Object(l.f)({
						text: k(),
						kind: S.b.Error
					}))))
				}, R = Object(o.a)(u.d), F = e => async (t, s, n) => {
					let {
						apiContext: i
					} = n;
					const o = s().multireddits.models,
						a = () => {
							t(Object(l.f)({
								text: k(),
								kind: S.b.Error
							}))
						},
						d = o[e];
					if (!d) return void a();
					const c = !d.isFavorited;
					t(R({
						makeFavorite: c,
						multiredditPath: e,
						multiredditsModelsState: o
					})), (await ((e, t, s) => Object(h.a)(Object(b.a)(e, [p.a]), {
						method: r.jb.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: s ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(i(), e, c)).ok || (t(R({
						makeFavorite: !c,
						multiredditPath: e,
						multiredditsModelsState: o
					})), a())
				}, U = Object(o.a)(u.e), B = e => async (t, s, i) => {
					let {
						apiContext: o
					} = i;
					const a = s(),
						d = a.multireddits.models;
					if (!Object(I.Q)(a)) return;
					const c = function() {
							let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
							t(Object(l.f)({
								text: n.fbt._("Sorry, failed to {followAction}", [n.fbt._param("followAction", e ? n.fbt._("follow", null, {
									hk: "3YMYJK"
								}) : n.fbt._("unfollow", null, {
									hk: "24IYxj"
								}))], {
									hk: "1ufRSl"
								}),
								kind: S.b.Error
							}))
						},
						u = d[e];
					if (!u) return void c();
					const m = !u.isFollowed;
					t(U({
						follow: m,
						multiredditPath: e,
						multiredditsModelsState: d
					})), (await ((e, t, s) => Object(h.a)(Object(b.a)(e, [p.a]), {
						method: r.jb.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: s ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(o(), e, m)).ok || (t(U({
						follow: !m,
						multiredditPath: e,
						multiredditsModelsState: d
					})), c(m))
				}
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, s) {
			e.exports = {
				_Dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				MenuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				menuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				mIsEnabled: "uMPgOFYlCc5uvpa2Lbteu",
				MenuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				menuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				DropdownRow: "_2DO72U0b_6CUw3msKGrnnT",
				dropdownRow: "_2DO72U0b_6CUw3msKGrnnT"
			}
		},
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = s("./src/reddit/controls/Dropdown/index.tsx"),
				h = s("./src/reddit/controls/Dropdown/Row.tsx"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				p = s("./src/reddit/selectors/tooltip.ts"),
				f = s("./src/reddit/components/OverflowMenu/index.m.less"),
				v = s.n(f);
			const O = c.a.wrapped(m.a, "_Dropdown", v.a),
				y = Object(l.a)(O),
				_ = c.a.button("MenuButton", v.a),
				g = c.a.wrapped(h.b, "DropdownRow", v.a),
				S = Object(a.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(p.b)(s)(e)
					}
				}),
				j = Object(o.b)(S, (e, t) => {
					let {
						dropdownId: s
					} = t;
					return {
						toggleDropdown: () => e(Object(u.h)({
							tooltipId: s
						}))
					}
				}),
				w = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = j(e => i.a.createElement(_, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": n.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(d.a)(e.className, {
					[v.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: w(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : i.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: v.a.MenuIcon
			}), i.a.createElement(y, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/higherOrderComponents/asTooltip.tsx"),
				o = s("./src/reddit/constants/elementIds.ts"),
				a = s("./src/reddit/contexts/InsideOverlay.tsx");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function c(e, t) {
				const s = Object(i.a)(e, t);
				class n extends r.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(o.e);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return r.a.createElement(s, d({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(a.b)(n)
			}
		},
		"./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/index.m.less": function(e, t, s) {
			e.exports = {
				LiveVideoPlayer: "_1CslYvEjQCqKJNXXyr7VBi",
				liveVideoPlayer: "_1CslYvEjQCqKJNXXyr7VBi",
				focusVisible: "ouJNsMkjLzVYHYqeJXKYk",
				isSleeping: "_2g2rE_Lz5iyVMt-BJDcpu6",
				ScrubberPanel: "_2ypwxpRk8TA72yU2q8wprA",
				scrubberPanel: "_2ypwxpRk8TA72yU2q8wprA",
				clip9x16: "_18hF1W8oceEelO19T27hAG",
				clip9X16: "_18hF1W8oceEelO19T27hAG",
				Overlay: "QeWQ4jUouItrgSmIpGLMR",
				overlay: "QeWQ4jUouItrgSmIpGLMR",
				controls: "NChIQgZKTHyJPUVfOp7oC",
				liveStatus: "_114oxXWr6zlJaImMK_9XYl"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "LiveVideoPlayer", (function() {
				return F
			})), s.d(t, "Overlay", (function() {
				return U
			}));
			var n = s("./node_modules/lodash/isUndefined.js"),
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/higherOrderComponents/withMux/index.tsx"),
				u = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/focusVisible/index.js"),
				m = s("./src/lib/VideoSession/VideoSessionManager.ts"),
				h = s("./src/reddit/actions/media.ts"),
				b = s("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				p = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				f = s("./src/reddit/actions/video.ts"),
				v = s("./src/reddit/components/HlsVideo/index.tsx"),
				O = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				y = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.tsx"),
				_ = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				g = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.tsx"),
				S = s("./src/reddit/components/TrackingHelper/index.tsx"),
				j = s("./src/reddit/constants/chat.ts"),
				w = s("./src/reddit/constants/keycodes.ts"),
				E = s("./src/reddit/helpers/trackers/rpan.ts"),
				L = s("./src/reddit/selectors/media.ts"),
				I = s("./src/reddit/selectors/platform.ts"),
				k = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				C = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				P = s("./src/reddit/selectors/video.ts"),
				N = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/index.m.less"),
				M = s.n(N);
			const {
				fbt: T
			} = s("./node_modules/fbt/lib/FbtPublic.js"), D = Object(c.a)(v.a, {
				playerName: "RPAN Listing Player"
			}), A = 3e3, V = Object(d.c)({
				autoplay: x.b,
				isOverlayOpen: I.i,
				mutedInFeed: P.i,
				unavailableVideoUrl: k.o,
				volumeInFeed: L.f,
				currentStream: (e, t) => {
					let {
						postId: s
					} = t;
					return Object(C.l)(e, s)
				}
			}), R = Object(a.b)(V, (e, t) => ({
				setMutedInFeed: t => e(Object(f.G)(t)),
				setVideoVolume: t => e(Object(h.h)(t)),
				onHeartbeatSubscribe: t => e(b.a.subscribeHeartbeat(t)),
				onStreamByIdRequested: async t => await e(Object(p.d)(t))
			}));
			class F extends i.Component {
				constructor(e) {
					super(e), this.sleepTimeout = null, this.videoRef = o.a.createRef(), this._videoSessionManager = null, this.handleHlsRefChange = e => {
						var t;
						this.hlsVideo = e, null === (t = this.hlsVideo) || void 0 === t || t.setVolume(this.state.volume)
					}, this.handleClick = e => {
						r()(this.state.settingChange) || (e.stopPropagation(), this.setState({
							settingChange: void 0
						}))
					}, this.handleEnded = () => {
						this.setState({
							isEnded: !0
						})
					}, this.handleError = () => {
						this.setState({
							hasError: !0
						})
					}, this.onKeyPress = e => {
						e.key === w.b.Enter && (e.preventDefault(), e.stopPropagation(), this.handleTogglePaused())
					}, this.handleLevelLoaded = e => {
						const {
							live: t,
							totalduration: s
						} = e;
						t !== this.state.live && this.setState({
							live: t
						}), s !== this.state.duration && this.setState({
							duration: s
						})
					}, this.handleLoadedData = () => {
						this.setState({
							isReady: !0
						})
					}, this.handleMouseDownControls = e => {
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						e.target instanceof Element && (e.stopPropagation(), t && t.parentRect && t.parentRect.contains(e.target) && (this.setState({
							settingChange: O.a.SeekBar
						}), t.handleMouseDown(e)), s && s.container && s.container.contains(e.target) && (this.setState({
							settingChange: O.a.Volume
						}), s.handleMouseDown(e)))
					}, this.handleMouseLeave = () => {
						this.setState({
							isHovered: !1,
							settingChange: void 0
						}), this.wake()
					}, this.handleMouseMove = () => {
						this.state.isHovered || this.setState({
							isHovered: !0
						}), this.wake(), this.sleepTimeout = setTimeout(this.sleep, A)
					}, this.handleMouseMoveControls = e => {
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						switch (this.state.settingChange) {
							case O.a.SeekBar:
								t && t.handleMouseMove(e);
								break;
							case O.a.Volume:
								s && s.handleMouseMove(e)
						}
					}, this.handleMouseUpControls = e => {
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						switch (e.stopPropagation(), this.state.settingChange) {
							case O.a.SeekBar:
								t && t.handleMouseUp(e);
								break;
							case O.a.Volume:
								s && s.handleMouseUp(e)
						}
					}, this.handlePause = () => {
						this.setState({
							isPlaying: !1
						}), this.unsubscribeHeartbeat()
					}, this.handlePlay = () => {
						this.hasPlayableMedia && (this.setState({
							isPlaying: !0
						}), this.subscribeHeartbeat())
					}, this.handleResourceRemoved = () => {
						this.setState({
							wasRemoved: !0
						})
					}, this.handleSeeked = e => {
						e !== this.state.currentTime && (this.hlsVideo && this.hlsVideo.setCurrentTime(e), this.setState({
							currentTime: e
						}))
					}, this.handleTimeUpdate = e => {
						this.setState({
							currentTime: e
						})
					}, this.handleToggleMuted = () => {
						this.setState(e => {
							var t;
							const s = !e.muted;
							return s || null === (t = this.hlsVideo) || void 0 === t || t.setVolume(e.volume), this.props.setMutedInFeed(s), {
								muted: s
							}
						})
					}, this.handleTogglePaused = () => {
						this.setState(e => {
							let {
								isEnded: t
							} = e;
							return {
								isEnded: t && !this.shouldPause,
								userPaused: !this.shouldPause,
								userShowedIntent: !0
							}
						})
					}, this.handleVolumeChange = (e, t) => {
						this.hlsVideo && this.hlsVideo.setVolume(e);
						const s = !e,
							n = this.state.muted !== s,
							r = this.state.volume !== e;
						t ? (s ? n && this.setState({
							muted: s
						}) : ((n || r) && this.setState({
							muted: s,
							volume: e
						}), this.props.setVideoVolume(e)), this.props.setMutedInFeed(s)) : n && this.setState({
							muted: s
						})
					}, this.sleep = () => {
						this.state.isSleeping || this.setState({
							isSleeping: !0
						})
					}, this.wake = () => {
						this.sleepTimeout && (clearTimeout(this.sleepTimeout), this.sleepTimeout = null), this.state.isSleeping && this.setState({
							isSleeping: !1
						})
					}, this.handleHeartbeat = async e => {
						let {
							stats: t
						} = e;
						var s;
						this.props.currentStream || await this.props.onStreamByIdRequested(this.props.postId);
						const {
							currentStream: n
						} = this.props;
						if (!n) return void(null === (s = this.videoSessionManager) || void 0 === s || s.destroySession());
						const r = !t.sessionDurationMs ? E.E : E.A,
							i = {
								...t,
								chatState: j.a.None,
								playerType: E.a.Feed
							};
						this.props.sendEvent(r(n, i))
					}, this.state = {
						currentTime: 0,
						duration: 0,
						hasError: !1,
						isEnded: !1,
						isHovered: !1,
						isPlaying: !1,
						isReady: !1,
						isSleeping: !1,
						live: !1,
						muted: e.mutedInFeed,
						userPaused: !1,
						userShowedIntent: !1,
						volume: e.volumeInFeed,
						wasRemoved: !1,
						sessionId: ""
					}, this.focusVisibleRef = Object(i.createRef)()
				}
				get hasPlayableMedia() {
					return !(this.state.wasRemoved || this.state.hasError)
				}
				get shouldPause() {
					const {
						autoplay: e,
						isOverlayOpen: t,
						shouldPause: s
					} = this.props, {
						isEnded: n,
						userPaused: r,
						userShowedIntent: i
					} = this.state;
					return !!t || (!!n || (i ? r : !e || s))
				}
				get shouldRenderOverlay() {
					return this.shouldRenderVideo && this.hasPlayableMedia && !!this.state.duration
				}
				get shouldRenderVideo() {
					return this.props.canLoad
				}
				get url() {
					return this.hasPlayableMedia ? this.props.url : this.props.unavailableVideoUrl || ""
				}
				get video() {
					return this.videoRef.current
				}
				get videoSessionManager() {
					if (!this._videoSessionManager) {
						const {
							video: e
						} = this;
						if (!e) return;
						this._videoSessionManager = new m.a(e, {
							onHeartbeat: this.handleHeartbeat
						})
					}
					return this._videoSessionManager
				}
				componentDidMount() {
					const e = this.focusVisibleRef.current;
					e.classList.add(M.a.focusVisible), Object(l.a)(e)
				}
				componentDidUpdate(e, t) {
					var s;
					const {
						mutedInFeed: n,
						shouldPause: r,
						volumeInFeed: i
					} = this.props, {
						currentTime: o,
						duration: a,
						isPlaying: d,
						live: c,
						muted: u,
						volume: l
					} = this.state;
					!e.shouldPause && r && this.setState({
						userShowedIntent: !1
					}), this.updateVideoSession(e, t), this.controlBar && (o !== t.currentTime && this.controlBar.setCurrentTime(o), a !== t.duration && this.controlBar.setTotalTime(a)), d || (n !== e.mutedInFeed && n !== u && this.setState({
						muted: n
					}), i !== e.volumeInFeed && (null === (s = this.hlsVideo) || void 0 === s || s.setVolume(i), i !== l && this.setState({
						volume: i
					}))), this.context.setIsLive(c), this.context.setCurrentTime(o)
				}
				componentWillUnmount() {
					var e;
					this.unsubscribeHeartbeat(), null === (e = this.videoSessionManager) || void 0 === e || e.destroy()
				}
				render() {
					return o.a.createElement("div", {
						className: Object(u.a)(M.a.LiveVideoPlayer, {
							[M.a.isSleeping]: this.state.isSleeping && !this.shouldPause
						}),
						onBlur: this.handleMouseLeave,
						onClick: this.handleClick,
						onFocus: this.handleMouseMove,
						onMouseMove: this.handleMouseMove,
						onMouseLeave: this.handleMouseLeave,
						ref: this.focusVisibleRef
					}, this.shouldRenderVideo ? this.renderVideo() : null, this.shouldRenderOverlay ? this.renderOverlay() : null)
				}
				renderOverlay() {
					const {
						live: e
					} = this.state;
					return o.a.createElement(U, null, e ? o.a.createElement("span", {
						className: M.a.liveStatus
					}, o.a.createElement(g.g, null)) : null, o.a.createElement("div", {
						className: M.a.controls,
						onMouseDown: this.handleMouseDownControls,
						onMouseMove: this.handleMouseMoveControls,
						onMouseUp: this.handleMouseUpControls
					}, e ? this.renderAudioControl() : this.renderControls()))
				}
				renderVideo() {
					const {
						autoplay: e,
						className: t,
						postId: s,
						postTitle: n
					} = this.props;
					return o.a.createElement("div", {
						className: Object(u.a)(M.a.clip9x16, t)
					}, o.a.createElement(D, {
						autoplay: e,
						controls: !1,
						isPaused: this.shouldPause,
						muted: this.state.muted,
						playMutedOnPrevented: !0,
						startTime: this.state.currentTime,
						url: this.url,
						muxVideoDuration: void 0,
						muxVideoId: s,
						muxVideoIsLive: this.state.live,
						muxVideoTitle: n,
						onEnded: this.handleEnded,
						onError: this.handleError,
						onLevelLoaded: this.handleLevelLoaded,
						onLoadedData: this.handleLoadedData,
						onPause: this.handlePause,
						onPlay: this.handlePlay,
						onResourceRemoved: this.handleResourceRemoved,
						onTimeUpdate: this.handleTimeUpdate,
						ref: this.handleHlsRefChange,
						videoRef: this.videoRef,
						sessionId: this.state.sessionId
					}))
				}
				renderAudioControl() {
					const {
						isHovered: e,
						isSleeping: t,
						live: s,
						muted: n,
						settingChange: r,
						volume: i
					} = this.state;
					return o.a.createElement(y.a, {
						hideControlBar: !e || t && !this.shouldPause,
						isFullScreen: !1,
						isLive: s,
						isMuted: n,
						settingChange: r,
						setVolume: this.handleVolumeChange,
						toggleMute: this.handleToggleMuted,
						volume: i,
						volumeRef: e => this.volumeControl = e
					})
				}
				renderControls() {
					const {
						currentTime: e,
						duration: t,
						isHovered: s,
						isSleeping: n,
						live: r,
						muted: i,
						settingChange: a,
						volume: d
					} = this.state;
					return o.a.createElement(y.b, {
						currentTime: e,
						hasAudio: !0,
						hideControlBar: !s || n && !this.shouldPause,
						hideFullScreenButton: !0,
						hideGradient: !1,
						isFullScreen: !1,
						isListing: !1,
						isLive: r,
						isMuted: i,
						isPaused: this.shouldPause,
						playPauseVideo: this.handleTogglePaused,
						ref: e => this.controlBar = e,
						seekBarRef: e => this.seekBar = e,
						settingChange: a,
						setVideoPosition: this.handleSeeked,
						setVolume: this.handleVolumeChange,
						hideLiveLabel: !0,
						showSettingsIcon: !1,
						showVolumeIcon: !0,
						toggleMute: this.handleToggleMuted,
						totalTime: t,
						volume: d,
						volumeRef: e => this.volumeControl = e
					})
				}
				subscribeHeartbeat() {
					this.props.onHeartbeatSubscribe(this.props.postId).then(e => this._unsubscribeHeartbeat = e)
				}
				unsubscribeHeartbeat() {
					this._unsubscribeHeartbeat && (this._unsubscribeHeartbeat(), delete this._unsubscribeHeartbeat)
				}
				updateVideoSession(e, t) {
					var s, n, r, i;
					const {
						isPlaying: o,
						isReady: a
					} = this.state, {
						isPlaying: d,
						isReady: c
					} = t, u = a && (d && !o);
					!c && a && o || a && (!d && o) ? (null === (s = this.videoSessionManager) || void 0 === s || s.startSession(), this.setState({
						sessionId: (null === (r = null === (n = this.videoSessionManager) || void 0 === n ? void 0 : n.sessionStats) || void 0 === r ? void 0 : r.id) || ""
					})) : u && (null === (i = this.videoSessionManager) || void 0 === i || i.pauseSession())
				}
			}
			F.contextType = _.a, t.default = R(Object(S.c)(F));
			const U = e => {
				let {
					children: t
				} = e;
				return o.a.createElement("div", {
					className: M.a.Overlay
				}, t)
			}
		},
		"./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			const i = Object(n.createContext)({
					currentTime: 0,
					setCurrentTime: () => {},
					isLive: !1,
					setIsLive: () => {},
					totalTime: 0,
					setTotalTime: () => {}
				}),
				o = e => {
					let {
						children: t
					} = e;
					const [s, o] = Object(n.useState)(0), [a, d] = Object(n.useState)(!1), [c, u] = Object(n.useState)(0), l = {
						currentTime: s,
						setCurrentTime: o,
						isLive: a,
						setIsLive: d,
						totalTime: c,
						setTotalTime: u
					};
					return r.a.createElement(i.Provider, {
						value: l
					}, t)
				}
		},
		"./src/reddit/constants/chat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var n;
			! function(e) {
				e.None = "none", e.Compact = "compact", e.Full = "full_screen"
			}(n || (n = {}));
			var r;
			! function(e) {
				e.SubredditChatNotifcationFtux = "chat_subreddit_notification_ftux"
			}(r || (r = {}))
		},
		"./src/reddit/endpoints/subreddit/subscriptions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return l
			}));
			var n = s("./src/redditGQL/operations/SubscribedSubreddits.json"),
				r = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeApiRequest/index.ts"),
				o = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/lib/omitHeaders/index.ts"),
				d = s("./src/reddit/constants/headers.ts"),
				c = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			t.a = e => Object(o.a)(e, n);
			const u = (e, t) => {
					let {
						subredditIds: s,
						subredditNames: n,
						subscribe: o
					} = t;
					return Object(i.a)(Object(a.a)(e, [d.a]), {
						method: r.jb.POST,
						endpoint: Object(c.a)(`${e.apiUrl}/api/subscribe`),
						data: {
							action: o ? "sub" : "unsub",
							sr: s && s.join(",") || void 0,
							sr_name: n && n.join(",") || void 0,
							api_type: "json"
						}
					})
				},
				l = (e, t, s) => Object(i.a)(Object(a.a)(e, [d.a]), {
					method: r.jb.POST,
					endpoint: `${e.apiUrl}/api/favorite`,
					data: {
						make_favorite: s ? "true" : "false",
						sr_name: t,
						api_type: "json"
					}
				})
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "H", (function() {
				return u
			})), s.d(t, "i", (function() {
				return l
			})), s.d(t, "j", (function() {
				return m
			})), s.d(t, "D", (function() {
				return h
			})), s.d(t, "A", (function() {
				return b
			})), s.d(t, "E", (function() {
				return p
			})), s.d(t, "C", (function() {
				return f
			})), s.d(t, "B", (function() {
				return v
			})), s.d(t, "u", (function() {
				return O
			})), s.d(t, "v", (function() {
				return y
			})), s.d(t, "x", (function() {
				return _
			})), s.d(t, "r", (function() {
				return g
			})), s.d(t, "p", (function() {
				return S
			})), s.d(t, "q", (function() {
				return j
			})), s.d(t, "o", (function() {
				return w
			})), s.d(t, "z", (function() {
				return E
			})), s.d(t, "s", (function() {
				return L
			})), s.d(t, "y", (function() {
				return I
			})), s.d(t, "G", (function() {
				return k
			})), s.d(t, "t", (function() {
				return C
			})), s.d(t, "c", (function() {
				return x
			})), s.d(t, "n", (function() {
				return P
			})), s.d(t, "k", (function() {
				return N
			})), s.d(t, "b", (function() {
				return M
			})), s.d(t, "d", (function() {
				return T
			})), s.d(t, "e", (function() {
				return D
			})), s.d(t, "w", (function() {
				return A
			})), s.d(t, "F", (function() {
				return V
			})), s.d(t, "f", (function() {
				return R
			})), s.d(t, "l", (function() {
				return F
			})), s.d(t, "m", (function() {
				return U
			})), s.d(t, "g", (function() {
				return B
			})), s.d(t, "h", (function() {
				return H
			}));
			var n, r = s("./src/reddit/constants/chat.ts"),
				i = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Theater = "theater", e.DU = "discovery_unit", e.Feed = "feed_post"
			}(n || (n = {}));
			const a = (e, t) => {
					if (t) {
						const s = o.B(e, t.post.id),
							n = o.I(e, t.post.id),
							r = o.hb(e);
						if (t.post.authorInfo && n && (n.authorId = t.post.authorInfo.id), s) {
							s.streamPublicId = t.stream.stream_id, s.id = t.stream.stream_id;
							const n = Object(i.j)(e, {
								streamIdFromPath: t.post.id
							});
							n === i.a.LIVE ? s.type = "stream_live" : n === i.a.VOD ? s.type = "stream_vod" : n === i.a.UNAVAILABLE && (s.type = "stream_unavailable")
						}
						return {
							post: n,
							media: s,
							subreddit: r
						}
					}
					return {
						subreddit: o.hb(e)
					}
				},
				d = (e, t, s) => {
					if (!t || !s) return;
					const n = Object(i.j)(e, {
							streamIdFromPath: t.post.id
						}),
						o = t.chat_disabled || s.chatState === r.a.None;
					return {
						id: s.id,
						sessionDurationMs: s.sessionDurationMs,
						watchDurationMs: s.watchDurationMs,
						heartbeatDurationMs: s.heartbeatDurationMs,
						isLive: n === i.a.LIVE,
						playheadOffsetMs: s.playheadOffsetMs,
						timestampMs: s.timestampMs,
						startTimeMs: s.startTimeMs,
						volume: s.volume,
						chatState: o ? r.a.None : r.a.Compact,
						scrubbingStartMs: s.scrubbingStartMs,
						scrubbingEndMs: s.scrubbingEndMs,
						playerType: s.playerType
					}
				},
				c = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				u = () => e => ({
					source: "stream_du",
					action: "view",
					noun: "stream_du",
					...a(e)
				}),
				l = () => e => ({
					source: "stream_du",
					action: "click",
					noun: "show_less",
					...a(e)
				}),
				m = (e, t) => s => ({
					source: "stream_du",
					action: "click",
					noun: "enlarge",
					...a(s, e),
					actionInfo: o.d(s, {
						position: t || 0
					})
				}),
				h = (e, t) => s => ({
					source: "stream_player",
					action: "fail",
					noun: "stream",
					playback: d(s, e, t),
					...c(s),
					...e && {
						...a(s, e)
					}
				}),
				b = (e, t) => s => ({
					source: "stream_player",
					action: "heartbeat",
					noun: "stream",
					playback: d(s, e, t),
					...c(s),
					...a(s, e)
				}),
				p = (e, t) => s => ({
					source: "stream_player",
					action: "play",
					noun: "stream",
					playback: d(s, e, t),
					...c(s),
					...a(s, e)
				}),
				f = (e, t) => s => ({
					source: "stream_player",
					action: "complete",
					noun: "stream",
					playback: d(s, e, t),
					...c(s),
					...a(s, e)
				}),
				v = (e, t, s) => n => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: d(n, t, s),
					...c(n),
					...a(n, t)
				}),
				O = (e, t, s, n) => r => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: d(r, t, s),
					...c(r),
					...a(r, t),
					actionInfo: o.d(r, {
						referralId: n
					})
				}),
				y = (e, t, s) => n => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: d(n, t, s),
					...c(n),
					...a(n, t)
				}),
				_ = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "stream_from_desktop",
					...c(t),
					...a(t, e)
				}),
				g = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "upvote",
					playback: d(s, e, t),
					...c(s),
					...a(s, e)
				}),
				S = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "downvote",
					playback: d(s, e, t),
					...c(s),
					...a(s, e)
				}),
				j = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "report",
					playback: d(s, e, t),
					...c(s),
					...a(s, e)
				}),
				w = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "chat",
					playback: d(s, e, t),
					...a(s, e)
				}),
				E = e => t => {
					const s = Object(i.l)(t, e);
					return {
						source: "stream_chat",
						action: "click",
						noun: "send_chat",
						...a(t, s)
					}
				},
				L = (e, t, s) => n => ({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					},
					playback: d(n, t, s),
					...a(n, t)
				}),
				I = (e, t) => s => ({
					source: "stream_player",
					action: "scrub",
					noun: "video",
					playback: d(s, e, t),
					...c(s)
				}),
				k = e => t => ({
					source: "post",
					action: "view",
					noun: "post",
					profile: o.R(t),
					screen: o.Z(t),
					...a(t, e)
				}),
				C = e => t => {
					const s = a(t, e);
					return {
						source: "post",
						action: "consume",
						noun: "post",
						profile: o.R(t),
						screen: o.Z(t),
						...s
					}
				},
				x = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "follow",
					...a(t, e)
				}),
				P = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "unfollow",
					...a(t, e)
				}),
				N = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "subscribe",
					...a(t, e),
					targetSubreddit: o.hb(t)
				}),
				M = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "close",
					playback: d(s, e, t),
					...a(s, e)
				}),
				T = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "pause",
					playback: d(s, e, t),
					...a(s, e)
				}),
				D = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "play",
					playback: d(s, e, t),
					...a(s, e)
				}),
				A = (e, t) => s => ({
					source: "stream_player",
					action: "mute",
					noun: "volume",
					playback: d(s, e, t),
					...a(s, e)
				}),
				V = (e, t) => s => ({
					source: "stream_player",
					action: "unmute",
					noun: "volume",
					playback: d(s, e, t),
					...a(s, e)
				}),
				R = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "replay_video",
					playback: d(s, e, t),
					...a(s, e)
				}),
				F = (e, t) => s => ({
					source: "stream_player",
					action: "swipe",
					noun: "next",
					playback: d(s, e, t),
					...a(s, e),
					...c(s)
				}),
				U = (e, t) => s => ({
					source: "stream_player",
					action: "swipe",
					noun: "previous",
					playback: d(s, e, t),
					...a(s, e),
					...c(s)
				}),
				B = (e, t) => s => ({
					source: "rpanstudio_banner",
					action: "click",
					noun: e,
					...a(s, t),
					...c(s)
				}),
				H = (e, t) => s => ({
					source: "rpanstudio_modal",
					action: "click",
					noun: e,
					...a(s, t),
					...c(s)
				})
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(i.a)(Object(o.b)("share", e.isFilled), d.a.shareIcon, e.className)
			})
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, r.a.createElement("g", null, r.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), r.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, r.a.createElement("g", {
				stroke: "none"
			}, r.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				tabIndex: e.tabIndex,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fillRule: "evenodd",
				d: "M13.5559061,14.5 C13.5559061,14.776 13.3283409,15 13.0479481,15 C12.7675552,15 12.53999,14.776 12.53999,14.5 L12.53999,9 C12.53999,8.724 12.7675552,8.5 13.0479481,8.5 C13.3283409,8.5 13.5559061,8.724 13.5559061,9 L13.5559061,14.5 Z M10.508158,14.5 C10.508158,14.776 10.2805928,15 10.0002,15 C9.71980718,15 9.49224199,14.776 9.49224199,14.5 L9.49224199,9 C9.49224199,8.724 9.71980718,8.5 10.0002,8.5 C10.2805928,8.5 10.508158,8.724 10.508158,9 L10.508158,14.5 Z M7.46040996,14.5 C7.46040996,14.776 7.23284477,15 6.95245195,15 C6.67205913,15 6.44449394,14.776 6.44449394,14.5 L6.44449394,9 C6.44449394,8.724 6.67205913,8.5 6.95245195,8.5 C7.23284477,8.5 7.46040996,8.724 7.46040996,9 L7.46040996,14.5 Z M15.492242,6 C15.7736507,6 16.0002,6.224 16.0002,6.5 L16.0002,16.5 C16.0002,17.327 15.3164885,18 14.476326,18 L5.52407403,18 C4.68391148,18 4.0002,17.327 4.0002,16.5 L4.0002,6.5 C4.0002,6.224 4.22674927,6 4.50815801,6 L15.492242,6 Z M15.491585,3 C15.7719541,3 15.9995,3.224 15.9995,3.5 L15.9995,4.5 C15.9995,4.776 15.7719541,5 15.491585,5 L4.50741501,5 C4.22704592,5 3.9995,4.776 3.9995,4.5 L3.9995,3.5 C3.9995,3.224 4.22704592,3 4.50741501,3 L7.51325603,3 L8.26598607,2.167 C8.36248993,2.061 8.50064281,2 8.6459065,2 L11.3541093,2 C11.4983572,2 11.6365101,2.061 11.7340298,2.167 L12.485744,3 L15.491585,3 Z"
			})))
		},
		"./src/reddit/icons/svgs/Unlock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 17",
				fill: "inherit",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M14.9656 14.8328L13.6 13.4672V8.99847C13.6 8.55608 13.2416 8.19848 12.8 8.19848H12V6.59849C12 4.39291 10.2056 2.59853 8 2.59853C6.5712 2.59853 5.328 3.35852 4.624 4.49131L2.1656 2.03294C1.8528 1.72014 1.3472 1.72014 1.0344 2.03294C0.721605 2.34573 0.721605 2.85133 1.0344 3.16413L13.8344 15.964C13.9904 16.12 14.1952 16.1984 14.4 16.1984C14.6048 16.1984 14.8096 16.12 14.9656 15.964C15.2784 15.6512 15.2784 15.1456 14.9656 14.8328ZM4 8.19859H3.2C2.7584 8.19859 2.4 8.55619 2.4 8.99859V14.5986C2.4 15.041 2.7584 15.3986 3.2 15.3986H11.6688L4 7.72979V8.19859ZM10.4 6.59854C10.4 5.27534 9.32319 4.19854 7.99999 4.19854C7.00959 4.19854 6.15839 4.80174 5.79199 5.65934L8.33119 8.19853H10.4V6.59854Z"
			}))
		},
		"./src/reddit/models/PublicAccessNetwork/index.ts": function(e, t, s) {
			"use strict";
			var n;
			s.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.NOT_STARTED = "NOT_STARTED", e.PUBLISHED = "PUBLISHED", e.IS_LIVE = "IS_LIVE", e.DISCONNECTED = "DISCONNECTED", e.KILLED = "KILLED", e.PURGED = "PURGED", e.ENDED = "ENDED"
				}(n || (n = {}))
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "l", (function() {
				return S
			})), s.d(t, "m", (function() {
				return E
			})), s.d(t, "i", (function() {
				return k
			})), s.d(t, "d", (function() {
				return N
			})), s.d(t, "h", (function() {
				return M
			})), s.d(t, "k", (function() {
				return T
			})), s.d(t, "c", (function() {
				return D
			})), s.d(t, "f", (function() {
				return A
			})), s.d(t, "a", (function() {
				return F
			})), s.d(t, "j", (function() {
				return U
			})), s.d(t, "b", (function() {
				return B
			})), s.d(t, "e", (function() {
				return H
			})), s.d(t, "g", (function() {
				return G
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				o = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				a = s("./src/reddit/selectors/posts.ts"),
				d = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				c = s("./node_modules/lodash/memoize.js");
			const u = e => e.publicAccessNetwork.listings,
				l = s.n(c)()(e => Object(r.a)(Object(n.a)(u, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var m = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const h = e => e.publicAccessNetwork.models,
				b = e => e.publicAccessNetwork.reports.reported,
				p = e => e.publicAccessNetwork.history,
				f = e => e.publicAccessNetwork.history.cursor,
				v = e => e.publicAccessNetwork.history.visitOrder,
				O = e => e.publicAccessNetwork.hlsStreams,
				y = Object(n.a)(O, e => e.ended),
				_ = Object(n.a)(O, e => e.removed),
				g = Object(n.a)(h, y, _, (e, t, s) => {
					const n = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const n = s.stream.state,
							r = V(n, o.a.ENDED) ? o.a.ENDED : n,
							i = s.stream.vod_accessible;
						return r === n && !0 === i ? e : {
							...e,
							[t]: {
								...s,
								stream: {
									...s.stream,
									state: r,
									vod_accessible: !0
								}
							}
						}
					}, e);
					return s.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const n = s.stream.state,
							r = V(n, o.a.ENDED) ? o.a.ENDED : n,
							i = s.stream.vod_accessible;
						return r === n && !1 === i ? e : {
							...e,
							[t]: {
								...s,
								stream: {
									...s.stream,
									state: r,
									vod_accessible: !1
								}
							}
						}
					}, n)
				}),
				S = (e, t) => {
					return g(e)[Object(i.g)(t)]
				},
				j = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, (e, t) => l(t.listingName)(e, t), g, b, a.h, (e, t, s, n, r) => {
					const a = [];
					if (e) {
						const t = Object(i.g)(e);
						s[t] && a.push(t)
					}
					const d = a.concat(t),
						c = [...new Set(d)],
						u = new Set([...n, ...r]);
					return c.filter(e => {
						const t = s[e];
						return !u.has(e) && !t.post.isHidden && t.stream.state !== o.a.KILLED && t.stream.state !== o.a.PURGED
					})
				}),
				w = Object(n.a)((e, t) => {
					let {
						count: s
					} = t;
					return s
				}, g, (e, t) => {
					let {
						listingName: s,
						streamIdFromPath: n
					} = t;
					return j(e, {
						listingName: s,
						streamIdFromPath: n
					})
				}, (e, t, s) => {
					const n = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? n.slice(0, e) : n
				}),
				E = Object(n.a)(g, w, (e, t) => {
					const s = t[0];
					if (s) return e[s]
				}),
				L = Object(n.a)(v, (e, t) => {
					let {
						related: s,
						streamIdFromPath: n,
						subreddit: r
					} = t;
					return w(e, {
						listingName: s || r,
						streamIdFromPath: n
					})
				}, (e, t) => {
					const s = new Set(e),
						n = t.filter(e => !s.has(e));
					if (n.length) return n[0]
				}),
				I = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, g, (e, t) => {
					let {
						related: s,
						streamIdFromPath: n,
						subreddit: r
					} = t;
					return w(e, {
						listingName: s || r,
						streamIdFromPath: n
					})
				}, p, (e, t, s, n) => {
					if (!s.length) return;
					const r = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						i = r.find(e => e.stream.state === o.a.IS_LIVE);
					if (i) return i.post.id;
					const a = r.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (n.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return a ? a.post.id : void 0
				}),
				k = Object(r.a)(Object(n.a)(I, g, (e, t) => e ? t[e] : void 0)),
				C = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? Object(i.g)(s) : void 0
				}, I, b, a.h, (e, t) => {
					let {
						related: s,
						streamIdFromPath: n,
						subreddit: r
					} = t;
					return w(e, {
						listingName: s || r,
						streamIdFromPath: n
					})
				}, (e, t, s, n, r) => !e || s.includes(e) || n.includes(e) ? t || r[0] : e),
				x = Object(n.a)(f, v, L, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				P = Object(n.a)(f, v, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				N = Object(r.a)(Object(n.a)(C, g, (e, t) => e ? t[e] : void 0)),
				M = Object(r.a)(Object(n.a)(x, g, (e, t) => e ? t[e] : void 0)),
				T = Object(r.a)(Object(n.a)(P, g, (e, t) => e ? t[e] : void 0)),
				D = (Object(r.a)(Object(n.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, g, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => ({
					...t[s],
					preloadedPreviewUrl: e[s]
				})))), Object(n.a)(C, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				A = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? S(e, s) : void 0
				}, e => !e || e.chat_disabled || e.post.isArchived || e.post.isLocked);

			function V(e, t) {
				const s = {
					[o.a.NOT_STARTED]: 0,
					[o.a.PUBLISHED]: 1,
					[o.a.IS_LIVE]: 2,
					[o.a.DISCONNECTED]: 2,
					[o.a.ENDED]: 3,
					[o.a.KILLED]: 4,
					[o.a.PURGED]: 4
				};
				return s[t] >= s[e]
			}
			const R = Object(n.a)(C, p, (e, t) => e && t.timestamps[e] || 0);
			var F;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(F || (F = {}));
			const U = Object(n.a)(C, g, m.b, (e, t, s) => {
					if (s) return F.INTRO;
					const n = e && t[e];
					if (!n) return F.UNAVAILABLE;
					const r = n.stream.state;
					return r === o.a.IS_LIVE || r === o.a.DISCONNECTED ? F.LIVE : r === o.a.ENDED && n.stream.vod_accessible ? F.VOD : F.UNAVAILABLE
				}),
				B = Object(n.a)(N, U, m.b, d.b, d.o, (e, t, s, n, r) => s ? n : e ? t === F.LIVE || t === F.VOD ? e.stream.hls_url : r : void 0),
				H = Object(n.a)(N, U, R, (e, t, s) => e ? t === F.LIVE ? e.broadcast_time : t === F.VOD && s < e.broadcast_time ? s : 0 : 0),
				G = (e, t) => {
					const s = h(e);
					return !!s && s[t] && s[t].chat_disabled
				}
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const o = e => e.publicAccessNetwork.theaterSettings,
				a = Object(n.a)(o, i.n, (e, t) => t && !e.isIntroFinished),
				d = Object(n.a)(o, e => e.lastChatActivityUtcTs),
				c = e => !!e && e + r.a > Date.now()
		},
		"./src/reddit/selectors/experiments/shareToChatButton.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				i = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/user.ts");
			const a = Object(n.a)(e => Object(i.c)(e, {
				experimentEligibilitySelector: o.Q,
				experimentName: r.zc
			}), e => e === r.Cd)
		},
		"./src/redditGQL/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"13af47cf5fb3"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/LiveVideoPlayer.aebc0602a8e94b457ee4.js.map