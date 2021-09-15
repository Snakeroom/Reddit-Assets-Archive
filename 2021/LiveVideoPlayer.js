// https://www.redditstatic.com/desktop2x/LiveVideoPlayer.23bee4bfea7853f462b8.js
// Retrieved at 9/15/2021, 6:50:07 PM by Reddit Dataminer v1.0.0
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

				function o(e) {
					return !!(e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList" in e && "contains" in e.classList)
				}

				function i(e) {
					e.classList.contains("focus-visible") || (e.classList.add("focus-visible"), e.setAttribute("data-focus-visible-added", ""))
				}

				function a(e) {
					t = !1
				}

				function c() {
					document.addEventListener("mousemove", d), document.addEventListener("mousedown", d), document.addEventListener("mouseup", d), document.addEventListener("pointermove", d), document.addEventListener("pointerdown", d), document.addEventListener("pointerup", d), document.addEventListener("touchmove", d), document.addEventListener("touchstart", d), document.addEventListener("touchend", d)
				}

				function d(e) {
					e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1, document.removeEventListener("mousemove", d), document.removeEventListener("mousedown", d), document.removeEventListener("mouseup", d), document.removeEventListener("pointermove", d), document.removeEventListener("pointerdown", d), document.removeEventListener("pointerup", d), document.removeEventListener("touchmove", d), document.removeEventListener("touchstart", d), document.removeEventListener("touchend", d))
				}
				document.addEventListener("keydown", (function(s) {
					s.metaKey || s.altKey || s.ctrlKey || (o(e.activeElement) && i(e.activeElement), t = !0)
				}), !0), document.addEventListener("mousedown", a, !0), document.addEventListener("pointerdown", a, !0), document.addEventListener("touchstart", a, !0), document.addEventListener("visibilitychange", (function(e) {
					"hidden" === document.visibilityState && (s && (t = !0), c())
				}), !0), c(), e.addEventListener("focus", (function(e) {
					var s, n, a;
					o(e.target) && (t || (s = e.target, n = s.type, "INPUT" === (a = s.tagName) && r[n] && !s.readOnly || "TEXTAREA" === a && !s.readOnly || s.isContentEditable)) && i(e.target)
				}), !0), e.addEventListener("blur", (function(e) {
					var t;
					o(e.target) && (e.target.classList.contains("focus-visible") || e.target.hasAttribute("data-focus-visible-added")) && (s = !0, window.clearTimeout(n), n = window.setTimeout((function() {
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
				return O
			})), s.d(t, "b", (function() {
				return w
			})), s.d(t, "d", (function() {
				return _
			})), s.d(t, "e", (function() {
				return g
			})), s.d(t, "f", (function() {
				return j
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/query-string/index.js"),
				r = s.n(n),
				o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				c = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				d = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				l = s("./src/reddit/selectors/subreddit.ts");
			const u = new Set(["home", "r/popular"]),
				m = e => {
					const t = location && location.search || "",
						s = r.a.parse(t);
					u.has(e) && (s.related = e);
					const n = r.a.stringify(s);
					return n ? `?${n}` : ""
				},
				p = Object(o.a)(i.N),
				h = Object(o.a)(i.y),
				b = Object(o.a)(i.O),
				f = Object(o.a)(i.z),
				v = Object(o.a)(i.M),
				y = Object(o.a)(i.L),
				O = Object(o.a)(i.t),
				w = Object(o.a)(i.u),
				_ = e => async (t, s, {
					gqlContext: n
				}) => {
					const r = Object(c.g)(e),
						o = s();
					if (Object(d.d)(o, r)) return;
					t(p(r));
					const i = await Object(a.e)(n(), r),
						l = Date.now();
					if (i.ok && i.body && i.body.data) {
						const e = i.body.data;
						t(h({
							model: e,
							utcTimeStamp: l
						}))
					} else t(S({
						streamId: r,
						error: i.error,
						utcTimeStamp: l
					}))
				}, g = (e, t) => async (s, n) => s(x(e, t)), x = (e, t) => async (s, n, {
					gqlContext: r
				}) => {
					const o = n();
					if (Object(d.f)(o)) return;
					s(b());
					const i = await Object(a.f)(r(), e, t),
						c = Date.now();
					if (i.ok && i.body && i.body.data) {
						const t = i.body.data;
						s(f({
							listingName: e,
							models: t,
							utcTimeStamp: c
						}))
					} else s(I({
						error: i.error,
						utcTimeStamp: c
					}))
				}, j = (e, t) => async (s, n) => s(E(e, t)), E = (e, t) => async (s, n, {
					gqlContext: r
				}) => {
					const o = n();
					if (Object(d.f)(o)) return;
					s(b());
					const i = Date.now(),
						c = e.replace("r/", ""),
						u = Object(l.B)(o, c),
						m = await Object(a.b)(r(), {
							subredditId: u,
							options: t
						}),
						p = m.body;
					m.ok && p && p.data || s(I({
						error: m.error,
						utcTimeStamp: i
					}));
					const h = p.data.liveVideoFeed.posts.edges.map(e => (async (e, t) => {
							const s = await Object(a.e)(e, t),
								n = Date.now(),
								r = s.body;
							return r && r.data ? r.data : void S({
								streamId: t,
								error: s.error,
								utcTimeStamp: n
							})
						})(r(), e.node.id)),
						v = (await Promise.all(h)).filter(e => void 0 !== typeof e);
					s(f({
						listingName: e,
						models: v,
						utcTimeStamp: i
					}))
				}, S = e => async t => {
					t(v(e))
				}, I = e => async t => {
					t(y(e))
				}
		},
		"./src/reddit/actions/subscription/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "h", (function() {
				return i
			})), s.d(t, "i", (function() {
				return a
			})), s.d(t, "g", (function() {
				return c
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			}));
			const n = "SUBSCRIPTION__FETCH_DATA_PENDING",
				r = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
				o = "SUBSCRIPTION__FETCH_DATA_FAILURE",
				i = "SUBSCRIPTION__SUBSCRIPTION_TOGGLED",
				a = "SUBSCRIPTION__SUBSCIPTION_TOGGLE_FAILED",
				c = "SUBSCRIPTION__ORDER_LOADED",
				d = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				l = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				u = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return N
			})), s.d(t, "d", (function() {
				return P
			})), s.d(t, "c", (function() {
				return D
			})), s.d(t, "a", (function() {
				return V
			})), s.d(t, "b", (function() {
				return F
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/lib/linkMatchers/customLinks.ts"),
				a = s("./src/reddit/actions/login.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/subscription/constants.ts"),
				l = s("./src/reddit/actions/toaster.ts"),
				u = s("./src/reddit/constants/posts.ts"),
				m = s("./src/lib/makeApiRequest/index.ts"),
				p = s("./src/lib/omitHeaders/index.ts"),
				h = s("./src/reddit/constants/headers.ts");
			var b = s("./src/reddit/endpoints/subreddit/subscriptions.ts"),
				f = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				v = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				y = s("./src/reddit/models/GqlTopLevelField.ts"),
				O = s("./src/reddit/models/User/index.ts");

			function w(e) {
				const t = [],
					s = [],
					n = {},
					r = {},
					{
						followedRedditorsInfo: o
					} = e.identity;
				for (const a of o.edges) {
					if (a.node.__typename !== O.c.AvailableRedditor || !a.node.profile) continue;
					const e = Object(f.a)(a.node.profile);
					n[e.id] = e;
					const {
						isFavorite: s
					} = a.node.profile;
					s && t.push(e.id)
				}
				const {
					subscribedSubreddits: i
				} = e.identity;
				for (const a of i.edges) {
					if (a.node.__typename !== y.a.Subreddit) continue;
					const e = Object(v.a)(a.node);
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
			var _ = s("./src/reddit/models/Toast/index.ts"),
				g = s("./src/reddit/selectors/profile.ts"),
				x = s("./src/reddit/selectors/subreddit.ts"),
				j = s("./src/reddit/selectors/subscriptions.ts"),
				E = s("./src/reddit/selectors/user.ts");
			const S = () => n.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				I = Object(o.a)(d.c),
				L = Object(o.a)(d.b),
				k = Object(o.a)(d.a),
				C = Object(o.a)(d.h),
				N = (Object(o.a)(d.i), Object(o.a)(d.g), () => async (e, t, {
					gqlContext: s
				}) => {
					const n = t();
					if (!n.user.account || n.subscriptions.api.fetched) return;
					e(L());
					const r = await Object(b.a)(s());
					if (r.ok) {
						const t = w(r.body.data);
						e(I(t))
					} else e(k({
						error: r.error
					}))
				}),
				M = (e, t) => t.type === u.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				P = (e, t, s) => async (o, d, {
					apiContext: m
				}) => {
					let p = e.map(e => e.type === u.a.SUBREDDIT ? {
						id: Object(x.B)(d(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(g.m)(d(), e.name),
						name: `${r.fc}${e.name}`,
						type: e.type
					});
					if (!Object(E.K)(d())) return o(Object(c.k)({
						actionSource: c.a.Subscribe
					})), void o(Object(a.k)());
					const h = Object(E.k)(d());
					if (h) {
						const t = p.length,
							s = e.length;
						if (p = p.filter(e => !M(h, e)), (e = e.filter(e => !M(h, e))).length !== s || p.length !== t) {
							const e = n.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							o(Object(l.f)(Object(l.e)(e, _.b.Error)))
						}
						if (!e.length && !p.length) return
					}
					if (o(C({
							identifiers: p,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(j.b)(d()),
							userIsSubscriber: t,
							widgetId: s
						})), (await Object(b.c)(m(), {
							subredditNames: p.map(({
								name: e
							}) => e),
							subscribe: t
						})).ok) {
						const s = 1 === e.length ? `${"subreddit"===e[0].type?i.d.subreddit:i.d.profile}${e[0].name}` : n.fbt._({
								"*": "{communities} communities",
								_1: "1 community"
							}, [n.fbt._plural(e.length, "communities")], {
								hk: "IgDzJ"
							}),
							r = n.fbt._("Sucсessfully followed {communityname}", [n.fbt._param("communityname", s)], {
								hk: "1S5AXJ"
							}),
							a = n.fbt._("Sucсessfully unfollowed {communityname}", [n.fbt._param("communityname", s)], {
								hk: "2XWHyB"
							}),
							c = n.fbt._("Sucсessfully joined {communityname}", [n.fbt._param("communityname", s)], {
								hk: "3Al8aF"
							}),
							d = n.fbt._("Sucсessfully left {communityname}", [n.fbt._param("communityname", s)], {
								hk: "2w5JFZ"
							});
						o(Object(l.f)({
							text: 1 === e.length && "profile" === e[0].type ? t ? r : a : t ? c : d
						}))
					} else {
						o(C({
							identifiers: p,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(j.b)(d()),
							userIsSubscriber: !t,
							widgetId: s
						}));
						const r = n.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						o(Object(l.f)(Object(l.e)(r, _.b.Error)))
					}
				}, T = Object(o.a)(d.f), D = e => async (t, s, {
					apiContext: n
				}) => {
					const r = s(),
						o = Object(x.I)(r, {
							identifier: e
						});
					if (!o) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const i = e.type === u.a.SUBREDDIT ? o.name : `u_${o.name}`,
						a = r.subscriptions.favoriteSubredditOrder || [],
						c = r.subscriptions.favoriteProfileOrder || [],
						d = a.indexOf(e.id),
						m = c.indexOf(e.id),
						p = -1 === d && -1 === m,
						h = r.subreddits.models,
						f = r.profiles.models;
					t(T({
						makeFavorite: p,
						identifier: e,
						subredditModels: h,
						profileModels: f
					}));
					const v = {
							type: e.type,
							name: o.name
						},
						y = () => Object(x.cb)(s(), {
							identifier: v
						});
					(y() || (await t(P([v], !0)), y())) && ((await Object(b.b)(n(), i, p)).ok || (t(T({
						makeFavorite: !p,
						identifier: e,
						subredditModels: h,
						profileModels: f
					})), t(Object(l.f)({
						text: S(),
						kind: _.b.Error
					}))))
				}, A = Object(o.a)(d.d), V = e => async (t, s, {
					apiContext: n
				}) => {
					const o = s().multireddits.models,
						i = () => {
							t(Object(l.f)({
								text: S(),
								kind: _.b.Error
							}))
						},
						a = o[e];
					if (!a) return void i();
					const c = !a.isFavorited;
					t(A({
						makeFavorite: c,
						multiredditPath: e,
						multiredditsModelsState: o
					})), (await ((e, t, s) => Object(m.a)(Object(p.a)(e, [h.a]), {
						method: r.ib.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: s ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(n(), e, c)).ok || (t(A({
						makeFavorite: !c,
						multiredditPath: e,
						multiredditsModelsState: o
					})), i())
				}, R = Object(o.a)(d.e), F = e => async (t, s, {
					apiContext: o
				}) => {
					const i = s(),
						a = i.multireddits.models;
					if (!Object(E.K)(i)) return;
					const c = (e = !0) => {
							t(Object(l.f)({
								text: n.fbt._("Sorry, failed to {followAction}", [n.fbt._param("followAction", e ? n.fbt._("follow", null, {
									hk: "2I4uia"
								}) : n.fbt._("unfollow", null, {
									hk: "1ZDqgR"
								}))], {
									hk: "1ufRSl"
								}),
								kind: _.b.Error
							}))
						},
						d = a[e];
					if (!d) return void c();
					const u = !d.isFollowed;
					t(R({
						follow: u,
						multiredditPath: e,
						multiredditsModelsState: a
					})), (await ((e, t, s) => Object(m.a)(Object(p.a)(e, [h.a]), {
						method: r.ib.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: s ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(o(), e, u)).ok || (t(R({
						follow: !u,
						multiredditPath: e,
						multiredditsModelsState: a
					})), c(u))
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
				return _
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = s("./src/reddit/controls/Dropdown/index.tsx"),
				p = s("./src/reddit/controls/Dropdown/Row.tsx"),
				h = s("./src/reddit/icons/fonts/index.tsx"),
				b = s("./src/reddit/selectors/tooltip.ts"),
				f = s("./src/reddit/components/OverflowMenu/index.m.less"),
				v = s.n(f);
			const y = d.a.wrapped(m.a, "_Dropdown", v.a),
				O = Object(u.a)(y),
				w = d.a.button("MenuButton", v.a),
				_ = d.a.wrapped(p.b, "DropdownRow", v.a),
				g = Object(a.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(b.b)(t)(e)
				}),
				x = Object(i.b)(g, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(l.h)({
						tooltipId: t
					}))
				})),
				j = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = x(e => o.a.createElement(w, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": n.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(c.a)(e.className, {
					[v.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: j(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : o.a.createElement(h.a, {
				name: "overflow_horizontal",
				className: v.a.MenuIcon
			}), o.a.createElement(O, {
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
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/higherOrderComponents/asTooltip.tsx"),
				i = s("./src/reddit/constants/elementIds.ts"),
				a = s("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const s = Object(o.a)(e, t);
				class n extends r.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(i.d);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return r.a.createElement(s, c({}, this.props, {
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
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/withMux/index.tsx"),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/focusVisible/index.js"),
				m = s("./src/lib/VideoSession/VideoSessionManager.ts"),
				p = s("./src/reddit/actions/media.ts"),
				h = s("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				b = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				f = s("./src/reddit/actions/video.ts"),
				v = s("./src/reddit/components/HlsVideo/index.tsx"),
				y = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				O = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.tsx"),
				w = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				_ = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/constants/chat.ts"),
				j = s("./src/reddit/constants/keycodes.ts"),
				E = s("./src/reddit/helpers/trackers/rpan.ts"),
				S = s("./src/reddit/selectors/media.ts"),
				I = s("./src/reddit/selectors/platform.ts"),
				L = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				k = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				N = s("./src/reddit/selectors/video.ts"),
				M = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/index.m.less"),
				P = s.n(M);
			const {
				fbt: T
			} = s("./node_modules/fbt/lib/FbtPublic.js"), D = Object(d.a)(v.a, {
				playerName: "RPAN Listing Player"
			}), A = 3e3, V = Object(c.c)({
				autoplay: C.b,
				isOverlayOpen: I.h,
				mutedInFeed: N.i,
				unavailableVideoUrl: L.o,
				volumeInFeed: S.d,
				currentStream: (e, {
					postId: t
				}) => Object(k.l)(e, t)
			}), R = Object(a.b)(V, (e, t) => ({
				setMutedInFeed: t => e(Object(f.G)(t)),
				setVideoVolume: t => e(Object(p.h)(t)),
				onHeartbeatSubscribe: t => e(h.a.subscribeHeartbeat(t)),
				onStreamByIdRequested: async t => await e(Object(b.d)(t))
			}));
			class F extends o.Component {
				constructor(e) {
					super(e), this.sleepTimeout = null, this.videoRef = i.a.createRef(), this._videoSessionManager = null, this.handleHlsRefChange = e => {
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
						e.key === j.b.Enter && (e.preventDefault(), e.stopPropagation(), this.handleTogglePaused())
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
							settingChange: y.a.SeekBar
						}), t.handleMouseDown(e)), s && s.container && s.container.contains(e.target) && (this.setState({
							settingChange: y.a.Volume
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
							case y.a.SeekBar:
								t && t.handleMouseMove(e);
								break;
							case y.a.Volume:
								s && s.handleMouseMove(e)
						}
					}, this.handleMouseUpControls = e => {
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						switch (e.stopPropagation(), this.state.settingChange) {
							case y.a.SeekBar:
								t && t.handleMouseUp(e);
								break;
							case y.a.Volume:
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
						this.setState(({
							isEnded: e
						}) => ({
							isEnded: e && !this.shouldPause,
							userPaused: !this.shouldPause,
							userShowedIntent: !0
						}))
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
					}, this.handleHeartbeat = async ({
						stats: e
					}) => {
						var t;
						this.props.currentStream || await this.props.onStreamByIdRequested(this.props.postId);
						const {
							currentStream: s
						} = this.props;
						if (!s) return void(null === (t = this.videoSessionManager) || void 0 === t || t.destroySession());
						const n = !e.sessionDurationMs ? E.E : E.A,
							r = {
								...e,
								chatState: x.a.None,
								playerType: E.a.Feed
							};
						this.props.sendEvent(n(s, r))
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
					}, this.focusVisibleRef = Object(o.createRef)()
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
						userShowedIntent: o
					} = this.state;
					return !!t || (!!n || (o ? r : !e || s))
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
					e.classList.add(P.a.focusVisible), Object(u.a)(e)
				}
				componentDidUpdate(e, t) {
					var s;
					const {
						mutedInFeed: n,
						shouldPause: r,
						volumeInFeed: o
					} = this.props, {
						currentTime: i,
						duration: a,
						isPlaying: c,
						live: d,
						muted: l,
						volume: u
					} = this.state;
					!e.shouldPause && r && this.setState({
						userShowedIntent: !1
					}), this.updateVideoSession(e, t), this.controlBar && (i !== t.currentTime && this.controlBar.setCurrentTime(i), a !== t.duration && this.controlBar.setTotalTime(a)), c || (n !== e.mutedInFeed && n !== l && this.setState({
						muted: n
					}), o !== e.volumeInFeed && (null === (s = this.hlsVideo) || void 0 === s || s.setVolume(o), o !== u && this.setState({
						volume: o
					}))), this.context.setIsLive(d), this.context.setCurrentTime(i)
				}
				componentWillUnmount() {
					var e;
					this.unsubscribeHeartbeat(), null === (e = this.videoSessionManager) || void 0 === e || e.destroy()
				}
				render() {
					return i.a.createElement("div", {
						className: Object(l.a)(P.a.LiveVideoPlayer, {
							[P.a.isSleeping]: this.state.isSleeping && !this.shouldPause
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
					return i.a.createElement(U, null, e ? i.a.createElement("span", {
						className: P.a.liveStatus
					}, i.a.createElement(_.g, null)) : null, i.a.createElement("div", {
						className: P.a.controls,
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
					return i.a.createElement("div", {
						className: Object(l.a)(P.a.clip9x16, t)
					}, i.a.createElement(D, {
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
						volume: o
					} = this.state;
					return i.a.createElement(O.a, {
						hideControlBar: !e || t && !this.shouldPause,
						isFullScreen: !1,
						isLive: s,
						isMuted: n,
						settingChange: r,
						setVolume: this.handleVolumeChange,
						toggleMute: this.handleToggleMuted,
						volume: o,
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
						muted: o,
						settingChange: a,
						volume: c
					} = this.state;
					return i.a.createElement(O.b, {
						currentTime: e,
						hasAudio: !0,
						hideControlBar: !s || n && !this.shouldPause,
						hideFullScreenButton: !0,
						hideGradient: !1,
						isFullScreen: !1,
						isListing: !1,
						isLive: r,
						isMuted: o,
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
						volume: c,
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
					var s, n, r, o;
					const {
						isPlaying: i,
						isReady: a
					} = this.state, {
						isPlaying: c,
						isReady: d
					} = t, l = a && (c && !i);
					!d && a && i || a && (!c && i) ? (null === (s = this.videoSessionManager) || void 0 === s || s.startSession(), this.setState({
						sessionId: (null === (r = null === (n = this.videoSessionManager) || void 0 === n ? void 0 : n.sessionStats) || void 0 === r ? void 0 : r.id) || ""
					})) : l && (null === (o = this.videoSessionManager) || void 0 === o || o.pauseSession())
				}
			}
			F.contextType = w.a, t.default = R(Object(g.c)(F));
			const U = ({
				children: e
			}) => i.a.createElement("div", {
				className: P.a.Overlay
			}, e)
		},
		"./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			const o = Object(n.createContext)({
					currentTime: 0,
					setCurrentTime: () => {},
					isLive: !1,
					setIsLive: () => {},
					totalTime: 0,
					setTotalTime: () => {}
				}),
				i = ({
					children: e
				}) => {
					const [t, s] = Object(n.useState)(0), [i, a] = Object(n.useState)(!1), [c, d] = Object(n.useState)(0), l = {
						currentTime: t,
						setCurrentTime: s,
						isLive: i,
						setIsLive: a,
						totalTime: c,
						setTotalTime: d
					};
					return r.a.createElement(o.Provider, {
						value: l
					}, e)
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
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			}));
			var n = s("./node_modules/lodash/throttle.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = s("./src/reddit/controls/Dropdown/index.m.less"),
				p = s.n(m),
				h = s("./src/reddit/controls/Dropdown/row.m.less"),
				b = s.n(h);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			class v extends i.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = r()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, s = Object(a.a)(b.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? i.a.createElement(c.a, f({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href,
						disabled: e.disabled
					}), e.children && i.a.createElement("span", {
						className: s
					}, e.children), i.a.createElement("span", {
						className: Object(a.a)(b.a.text, e.textClassName)
					}, e.displayText)) : i.a.createElement(u.a, f({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: r()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? i.a.createElement("div", null, e.children) : i.a.createElement("span", {
						className: s
					}, e.children)), e.displayText && i.a.createElement("span", {
						className: Object(a.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && i.a.createElement(l.a, {
						className: b.a.checkmark
					}), e.showDropdownTriangle && i.a.createElement(d.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const s = Object(a.a)(b.a.row, e, {
					[b.a.mIsInteractive]: !t.noHover,
					[b.a.mIsSelected]: t.isSelected,
					[b.a.topics]: t.isTopicsStyle
				});
				return i.a.createElement(v, f({
					className: s
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, s) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, s) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/controls/InternalLink/index.tsx"),
				o = s("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				i = s.n(o);
			t.a = n.a.wrapped(r.a, "unstyledInternalLink", i.a)
		},
		"./src/reddit/endpoints/subreddit/subscriptions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			}));
			var n = s("./src/redditGQL/operations/SubscribedSubreddits.json"),
				r = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeApiRequest/index.ts"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/lib/omitHeaders/index.ts"),
				c = s("./src/reddit/constants/headers.ts"),
				d = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			t.a = e => Object(i.a)(e, n);
			const l = (e, {
					subredditIds: t,
					subredditNames: s,
					subscribe: n
				}) => Object(o.a)(Object(a.a)(e, [c.a]), {
					method: r.ib.POST,
					endpoint: Object(d.a)(`${e.apiUrl}/api/subscribe`),
					data: {
						action: n ? "sub" : "unsub",
						sr: t && t.join(",") || void 0,
						sr_name: s && s.join(",") || void 0,
						api_type: "json"
					}
				}),
				u = (e, t, s) => Object(o.a)(Object(a.a)(e, [c.a]), {
					method: r.ib.POST,
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
				return l
			})), s.d(t, "i", (function() {
				return u
			})), s.d(t, "j", (function() {
				return m
			})), s.d(t, "D", (function() {
				return p
			})), s.d(t, "A", (function() {
				return h
			})), s.d(t, "E", (function() {
				return b
			})), s.d(t, "C", (function() {
				return f
			})), s.d(t, "B", (function() {
				return v
			})), s.d(t, "u", (function() {
				return y
			})), s.d(t, "v", (function() {
				return O
			})), s.d(t, "x", (function() {
				return w
			})), s.d(t, "r", (function() {
				return _
			})), s.d(t, "p", (function() {
				return g
			})), s.d(t, "q", (function() {
				return x
			})), s.d(t, "o", (function() {
				return j
			})), s.d(t, "z", (function() {
				return E
			})), s.d(t, "s", (function() {
				return S
			})), s.d(t, "y", (function() {
				return I
			})), s.d(t, "G", (function() {
				return L
			})), s.d(t, "t", (function() {
				return k
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "n", (function() {
				return N
			})), s.d(t, "k", (function() {
				return M
			})), s.d(t, "b", (function() {
				return P
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
				o = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Theater = "theater", e.DU = "discovery_unit", e.Feed = "feed_post"
			}(n || (n = {}));
			const a = (e, t) => {
					if (t) {
						const s = i.media(e, t.post.id),
							n = i.post(e, t.post.id),
							r = i.subreddit(e);
						if (t.post.authorInfo && n && (n.authorId = t.post.authorInfo.id), s) {
							s.streamPublicId = t.stream.stream_id, s.id = t.stream.stream_id;
							const n = Object(o.j)(e, {
								streamIdFromPath: t.post.id
							});
							n === o.a.LIVE ? s.type = "stream_live" : n === o.a.VOD ? s.type = "stream_vod" : n === o.a.UNAVAILABLE && (s.type = "stream_unavailable")
						}
						return {
							post: n,
							media: s,
							subreddit: r
						}
					}
					return {
						subreddit: i.subreddit(e)
					}
				},
				c = (e, t, s) => {
					if (!t || !s) return;
					const n = Object(o.j)(e, {
							streamIdFromPath: t.post.id
						}),
						i = t.chat_disabled || s.chatState === r.a.None;
					return {
						id: s.id,
						sessionDurationMs: s.sessionDurationMs,
						watchDurationMs: s.watchDurationMs,
						heartbeatDurationMs: s.heartbeatDurationMs,
						isLive: n === o.a.LIVE,
						playheadOffsetMs: s.playheadOffsetMs,
						timestampMs: s.timestampMs,
						startTimeMs: s.startTimeMs,
						volume: s.volume,
						chatState: i ? r.a.None : r.a.Compact,
						scrubbingStartMs: s.scrubbingStartMs,
						scrubbingEndMs: s.scrubbingEndMs,
						playerType: s.playerType
					}
				},
				d = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				l = () => e => ({
					source: "stream_du",
					action: "view",
					noun: "stream_du",
					...a(e)
				}),
				u = () => e => ({
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
					actionInfo: i.actionInfo(s, {
						position: t || 0
					})
				}),
				p = (e, t) => s => ({
					source: "stream_player",
					action: "fail",
					noun: "stream",
					playback: c(s, e, t),
					...d(s),
					...e && {
						...a(s, e)
					}
				}),
				h = (e, t) => s => ({
					source: "stream_player",
					action: "heartbeat",
					noun: "stream",
					playback: c(s, e, t),
					...d(s),
					...a(s, e)
				}),
				b = (e, t) => s => ({
					source: "stream_player",
					action: "play",
					noun: "stream",
					playback: c(s, e, t),
					...d(s),
					...a(s, e)
				}),
				f = (e, t) => s => ({
					source: "stream_player",
					action: "complete",
					noun: "stream",
					playback: c(s, e, t),
					...d(s),
					...a(s, e)
				}),
				v = (e, t, s) => n => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(n, t, s),
					...d(n),
					...a(n, t)
				}),
				y = (e, t, s, n) => r => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(r, t, s),
					...d(r),
					...a(r, t),
					actionInfo: i.actionInfo(r, {
						referralId: n
					})
				}),
				O = (e, t, s) => n => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(n, t, s),
					...d(n),
					...a(n, t)
				}),
				w = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "stream_from_desktop",
					...d(t),
					...a(t, e)
				}),
				_ = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "upvote",
					playback: c(s, e, t),
					...d(s),
					...a(s, e)
				}),
				g = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "downvote",
					playback: c(s, e, t),
					...d(s),
					...a(s, e)
				}),
				x = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "report",
					playback: c(s, e, t),
					...d(s),
					...a(s, e)
				}),
				j = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "chat",
					playback: c(s, e, t),
					...a(s, e)
				}),
				E = e => t => {
					const s = Object(o.l)(t, e);
					return {
						source: "stream_chat",
						action: "click",
						noun: "send_chat",
						...a(t, s)
					}
				},
				S = (e, t, s) => n => ({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					},
					playback: c(n, t, s),
					...a(n, t)
				}),
				I = (e, t) => s => ({
					source: "stream_player",
					action: "scrub",
					noun: "video",
					playback: c(s, e, t),
					...d(s)
				}),
				L = e => t => ({
					source: "post",
					action: "view",
					noun: "post",
					profile: i.profile(t),
					screen: i.screen(t),
					...a(t, e)
				}),
				k = e => t => {
					const s = a(t, e);
					return {
						source: "post",
						action: "consume",
						noun: "post",
						profile: i.profile(t),
						screen: i.screen(t),
						...s
					}
				},
				C = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "follow",
					...a(t, e)
				}),
				N = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "unfollow",
					...a(t, e)
				}),
				M = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "subscribe",
					...a(t, e),
					targetSubreddit: i.subreddit(t)
				}),
				P = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "close",
					playback: c(s, e, t),
					...a(s, e)
				}),
				T = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "pause",
					playback: c(s, e, t),
					...a(s, e)
				}),
				D = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "play",
					playback: c(s, e, t),
					...a(s, e)
				}),
				A = (e, t) => s => ({
					source: "stream_player",
					action: "mute",
					noun: "volume",
					playback: c(s, e, t),
					...a(s, e)
				}),
				V = (e, t) => s => ({
					source: "stream_player",
					action: "unmute",
					noun: "volume",
					playback: c(s, e, t),
					...a(s, e)
				}),
				R = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "replay_video",
					playback: c(s, e, t),
					...a(s, e)
				}),
				F = (e, t) => s => ({
					source: "stream_player",
					action: "swipe",
					noun: "next",
					playback: c(s, e, t),
					...a(s, e),
					...d(s)
				}),
				U = (e, t) => s => ({
					source: "stream_player",
					action: "swipe",
					noun: "previous",
					playback: c(s, e, t),
					...a(s, e),
					...d(s)
				}),
				B = (e, t) => s => ({
					source: "rpanstudio_banner",
					action: "click",
					noun: e,
					...a(s, t),
					...d(s)
				}),
				H = (e, t) => s => ({
					source: "rpanstudio_modal",
					action: "click",
					noun: e,
					...a(s, t),
					...d(s)
				})
		},
		"./src/reddit/icons/fonts/Downvote/index.m.less": function(e, t, s) {
			e.exports = {
				compactDownvote: "_2GCoZTwJW7199HSwNZwlHk",
				compactDownvoteWrapper: "jR747Vd1NbfaLusf5bHre",
				downvote: "ZyxIIl4FP5gHGrJDzNpUC",
				downvoteWrapper: "_1iKd82bq_nqObFvSH1iC_Q"
			}
		},
		"./src/reddit/icons/fonts/Downvote/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Downvote/index.m.less"),
				c = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("downvote", e.isFilled), c.a.downvote, e.className)
			});
			t.a = ({
				compact: e,
				isFilled: t,
				...s
			}) => e ? r.a.createElement("span", d({}, s, {
				className: Object(o.a)(c.a.compactDownvoteWrapper, s.className)
			}), r.a.createElement(l, {
				className: c.a.compactDownvote,
				isFilled: t
			})) : r.a.createElement("span", d({}, s, {
				className: Object(o.a)(c.a.downvoteWrapper, s.className)
			}), r.a.createElement(l, {
				isFilled: t
			}))
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("share", e.isFilled), c.a.shareIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Upvote/index.m.less": function(e, t, s) {
			e.exports = {
				compactUpvote: "_39UOLMgvssWenwbRxz_iEn",
				compactUpvoteWrapper: "_3wVayy5JvIMI67DheMYra2",
				upvote: "_2Jxk822qXs4DaXwsN7yyHA",
				upvoteWrapper: "_2q7IQ0BUOWeEZoeAxN555e"
			}
		},
		"./src/reddit/icons/fonts/Upvote/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Upvote/index.m.less"),
				c = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("upvote", e.isFilled), c.a.upvote, e.className)
			});
			t.a = ({
				compact: e,
				isFilled: t,
				...s
			}) => e ? r.a.createElement("span", d({}, s, {
				className: Object(o.a)(c.a.compactUpvoteWrapper, s.className)
			}), r.a.createElement(l, {
				className: c.a.compactUpvote,
				isFilled: t
			})) : r.a.createElement("span", d({}, s, {
				className: Object(o.a)(c.a.upvoteWrapper, s.className)
			}), r.a.createElement(l, {
				isFilled: t
			}))
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, s) {},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Crosspost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("path", {
				d: "M9.06,8.64c1.12-1.26,2.2-2.45,4.44-2.6V7.5a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74L15.18,1.7a1,1,0,0,0-1.68.74V4c-3.14.17-4.69,1.88-5.93,3.28C6.58,8.42,6,9,5,9H2a1,1,0,0,0,0,2H5C6.93,11,8,9.82,9.06,8.64Z"
			}), r.a.createElement("path", {
				d: "M15.18,11.76a1,1,0,0,0-1.68.74V14c-2.23-.16-3.29-1.32-4.39-2.56-.21-.24-.43-.48-.66-.72a5.63,5.63,0,0,1-1.77,1.06,13.34,13.34,0,0,1,.94,1A7.85,7.85,0,0,0,13.5,16v1.59a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74Z"
			}))
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
				return g
			})), s.d(t, "m", (function() {
				return E
			})), s.d(t, "i", (function() {
				return L
			})), s.d(t, "d", (function() {
				return M
			})), s.d(t, "h", (function() {
				return P
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
				o = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				i = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				a = s("./src/reddit/selectors/posts.ts"),
				c = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				d = s("./node_modules/lodash/memoize.js");
			const l = e => e.publicAccessNetwork.listings,
				u = s.n(d)()(e => Object(r.a)(Object(n.a)(l, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var m = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const p = e => e.publicAccessNetwork.models,
				h = e => e.publicAccessNetwork.reports.reported,
				b = e => e.publicAccessNetwork.history,
				f = e => e.publicAccessNetwork.history.cursor,
				v = e => e.publicAccessNetwork.history.visitOrder,
				y = e => e.publicAccessNetwork.hlsStreams,
				O = Object(n.a)(y, e => e.ended),
				w = Object(n.a)(y, e => e.removed),
				_ = Object(n.a)(p, O, w, (e, t, s) => {
					const n = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const n = s.stream.state,
							r = V(n, i.a.ENDED) ? i.a.ENDED : n,
							o = s.stream.vod_accessible;
						return r === n && !0 === o ? e : {
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
							r = V(n, i.a.ENDED) ? i.a.ENDED : n,
							o = s.stream.vod_accessible;
						return r === n && !1 === o ? e : {
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
				g = (e, t) => {
					return _(e)[Object(o.g)(t)]
				},
				x = Object(n.a)((e, {
					streamIdFromPath: t
				}) => t, (e, t) => u(t.listingName)(e, t), _, h, a.h, (e, t, s, n, r) => {
					const a = [];
					if (e) {
						const t = Object(o.g)(e);
						s[t] && a.push(t)
					}
					const c = a.concat(t),
						d = [...new Set(c)],
						l = new Set([...n, ...r]);
					return d.filter(e => {
						const t = s[e];
						return !l.has(e) && !t.post.isHidden && t.stream.state !== i.a.KILLED && t.stream.state !== i.a.PURGED
					})
				}),
				j = Object(n.a)((e, {
					count: t
				}) => t, _, (e, {
					listingName: t,
					streamIdFromPath: s
				}) => x(e, {
					listingName: t,
					streamIdFromPath: s
				}), (e, t, s) => {
					const n = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? n.slice(0, e) : n
				}),
				E = Object(n.a)(_, j, (e, t) => {
					const s = t[0];
					if (s) return e[s]
				}),
				S = Object(n.a)(v, (e, {
					related: t,
					streamIdFromPath: s,
					subreddit: n
				}) => j(e, {
					listingName: t || n,
					streamIdFromPath: s
				}), (e, t) => {
					const s = new Set(e),
						n = t.filter(e => !s.has(e));
					if (n.length) return n[0]
				}),
				I = Object(n.a)((e, {
					streamIdFromPath: t
				}) => t, _, (e, {
					related: t,
					streamIdFromPath: s,
					subreddit: n
				}) => j(e, {
					listingName: t || n,
					streamIdFromPath: s
				}), b, (e, t, s, n) => {
					if (!s.length) return;
					const r = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						o = r.find(e => e.stream.state === i.a.IS_LIVE);
					if (o) return o.post.id;
					const a = r.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (n.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return a ? a.post.id : void 0
				}),
				L = Object(r.a)(Object(n.a)(I, _, (e, t) => e ? t[e] : void 0)),
				k = Object(n.a)((e, {
					streamIdFromPath: t
				}) => t ? Object(o.g)(t) : void 0, I, h, a.h, (e, {
					related: t,
					streamIdFromPath: s,
					subreddit: n
				}) => j(e, {
					listingName: t || n,
					streamIdFromPath: s
				}), (e, t, s, n, r) => !e || s.includes(e) || n.includes(e) ? t || r[0] : e),
				C = Object(n.a)(f, v, S, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				N = Object(n.a)(f, v, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				M = Object(r.a)(Object(n.a)(k, _, (e, t) => e ? t[e] : void 0)),
				P = Object(r.a)(Object(n.a)(C, _, (e, t) => e ? t[e] : void 0)),
				T = Object(r.a)(Object(n.a)(N, _, (e, t) => e ? t[e] : void 0)),
				D = (Object(r.a)(Object(n.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, _, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => ({
					...t[s],
					preloadedPreviewUrl: e[s]
				})))), Object(n.a)(k, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				A = Object(n.a)((e, {
					streamIdFromPath: t
				}) => t ? g(e, t) : void 0, e => !e || e.chat_disabled || e.post.isArchived);

			function V(e, t) {
				const s = {
					[i.a.NOT_STARTED]: 0,
					[i.a.PUBLISHED]: 1,
					[i.a.IS_LIVE]: 2,
					[i.a.DISCONNECTED]: 2,
					[i.a.ENDED]: 3,
					[i.a.KILLED]: 4,
					[i.a.PURGED]: 4
				};
				return s[t] >= s[e]
			}
			const R = Object(n.a)(k, b, (e, t) => e && t.timestamps[e] || 0);
			var F;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(F || (F = {}));
			const U = Object(n.a)(k, _, m.b, (e, t, s) => {
					if (s) return F.INTRO;
					const n = e && t[e];
					if (!n) return F.UNAVAILABLE;
					const r = n.stream.state;
					return r === i.a.IS_LIVE || r === i.a.DISCONNECTED ? F.LIVE : r === i.a.ENDED && n.stream.vod_accessible ? F.VOD : F.UNAVAILABLE
				}),
				B = Object(n.a)(M, U, m.b, c.b, c.o, (e, t, s, n, r) => s ? n : e ? t === F.LIVE || t === F.VOD ? e.stream.hls_url : r : void 0),
				H = Object(n.a)(M, U, R, (e, t, s) => e ? t === F.LIVE ? e.broadcast_time : t === F.VOD && s < e.broadcast_time ? s : 0 : 0),
				G = (e, t) => {
					const s = p(e);
					return !!s && s[t] && s[t].chat_disabled
				}
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const i = e => e.publicAccessNetwork.theaterSettings,
				a = Object(n.a)(i, o.n, (e, t) => t && !e.isIntroFinished),
				c = Object(n.a)(i, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + r.a > Date.now()
		},
		"./src/redditGQL/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"84f02d14f38a"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/LiveVideoPlayer.23bee4bfea7853f462b8.js.map