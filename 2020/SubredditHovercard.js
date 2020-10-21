// https://www.redditstatic.com/desktop2x/SubredditHovercard.ef5e918d5d889410bd83.js
// Retrieved at 10/21/2020, 2:40:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditHovercard"], {
		"./node_modules/lodash/_assignMergeValue.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseAssignValue.js"),
				r = s("./node_modules/lodash/eq.js");
			e.exports = function(e, t, s) {
				(void 0 === s || r(e[t], s)) && (void 0 !== s || t in e) || o(e, t, s)
			}
		},
		"./node_modules/lodash/_baseMerge.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_Stack.js"),
				r = s("./node_modules/lodash/_assignMergeValue.js"),
				n = s("./node_modules/lodash/_baseFor.js"),
				d = s("./node_modules/lodash/_baseMergeDeep.js"),
				i = s("./node_modules/lodash/isObject.js"),
				a = s("./node_modules/lodash/keysIn.js"),
				c = s("./node_modules/lodash/_safeGet.js");
			e.exports = function e(t, s, l, u, m) {
				t !== s && n(s, (function(n, a) {
					if (m || (m = new o), i(n)) d(t, s, a, l, e, u, m);
					else {
						var p = u ? u(c(t, a), n, a + "", t, s, m) : void 0;
						void 0 === p && (p = n), r(t, a, p)
					}
				}), a)
			}
		},
		"./node_modules/lodash/_baseMergeDeep.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_assignMergeValue.js"),
				r = s("./node_modules/lodash/_cloneBuffer.js"),
				n = s("./node_modules/lodash/_cloneTypedArray.js"),
				d = s("./node_modules/lodash/_copyArray.js"),
				i = s("./node_modules/lodash/_initCloneObject.js"),
				a = s("./node_modules/lodash/isArguments.js"),
				c = s("./node_modules/lodash/isArray.js"),
				l = s("./node_modules/lodash/isArrayLikeObject.js"),
				u = s("./node_modules/lodash/isBuffer.js"),
				m = s("./node_modules/lodash/isFunction.js"),
				p = s("./node_modules/lodash/isObject.js"),
				b = s("./node_modules/lodash/isPlainObject.js"),
				v = s("./node_modules/lodash/isTypedArray.js"),
				h = s("./node_modules/lodash/_safeGet.js"),
				f = s("./node_modules/lodash/toPlainObject.js");
			e.exports = function(e, t, s, j, O, _, x) {
				var E = h(e, s),
					y = h(t, s),
					I = x.get(y);
				if (I) o(e, s, I);
				else {
					var g = _ ? _(E, y, s + "", e, t, x) : void 0,
						C = void 0 === g;
					if (C) {
						var T = c(y),
							N = !T && u(y),
							w = !T && !N && v(y);
						g = y, T || N || w ? c(E) ? g = E : l(E) ? g = d(E) : N ? (C = !1, g = r(y, !0)) : w ? (C = !1, g = n(y, !0)) : g = [] : b(y) || a(y) ? (g = E, a(E) ? g = f(E) : p(E) && !m(E) || (g = i(y))) : C = !1
					}
					C && (x.set(y, g), O(g, y, j, _, x), x.delete(y)), o(e, s, g)
				}
			}
		},
		"./node_modules/lodash/_createAssigner.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseRest.js"),
				r = s("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e) {
				return o((function(t, s) {
					var o = -1,
						n = s.length,
						d = n > 1 ? s[n - 1] : void 0,
						i = n > 2 ? s[2] : void 0;
					for (d = e.length > 3 && "function" == typeof d ? (n--, d) : void 0, i && r(s[0], s[1], i) && (d = n < 3 ? void 0 : d, n = 1), t = Object(t); ++o < n;) {
						var a = s[o];
						a && e(t, a, o, d)
					}
					return t
				}))
			}
		},
		"./node_modules/lodash/_safeGet.js": function(e, t) {
			e.exports = function(e, t) {
				if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
			}
		},
		"./node_modules/lodash/merge.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseMerge.js"),
				r = s("./node_modules/lodash/_createAssigner.js")((function(e, t, s) {
					o(e, t, s)
				}));
			e.exports = r
		},
		"./node_modules/lodash/toPlainObject.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_copyObject.js"),
				r = s("./node_modules/lodash/keysIn.js");
			e.exports = function(e) {
				return o(e, r(e))
			}
		},
		"./src/reddit/components/CommunityType/index.m.less": function(e, t, s) {
			e.exports = {
				nsfwText: "_1x9diBHPBP-hL1JiwUwJ5J",
				privateIcon: "_2B0OHMLKb9TXNdd9g5Ere-",
				quarantinedIcon: "_1xKxnscCn2PjBiXhorZef4",
				employeesIcon: "_1LLqoNXrOsaIkMtOuTBmO5",
				restrictedIcon: "QB2Yrr8uihZVRhvwrKuMS",
				TypeLabel: "_3w_KK8BUvCMkCPWZVsZQn0",
				typeLabel: "_3w_KK8BUvCMkCPWZVsZQn0"
			}
		},
		"./src/reddit/components/CommunityType/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				d = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/components/Flair/index.tsx"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/controls/IconTooltip/index.tsx"),
				u = s("./src/reddit/icons/svgs/Admin/index.tsx"),
				m = s("./src/reddit/icons/svgs/Eye/index.tsx"),
				p = s("./src/reddit/icons/svgs/Lock/index.tsx"),
				b = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				v = s("./src/reddit/models/Flair/index.ts"),
				h = s("./src/reddit/models/Subreddit/index.ts"),
				f = s("./src/reddit/models/SubredditRestrictions/index.ts"),
				j = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/components/CommunityType/index.m.less"),
				_ = s.n(O);
			const x = s("./src/lib/lessComponent.tsx").a.span("TypeLabel", _.a),
				E = Object(a.c)({
					restrictions: j.q
				}),
				y = e => n.a.createElement(n.a.Fragment, null, n.a.createElement(i.b, {
					flair: {
						type: v.f.Nsfw,
						text: "nsfw"
					}
				}), n.a.createElement("span", {
					className: _.a.nsfwText
				}, o.fbt._("Adult content", null, {
					hk: "3KWIyX"
				}))),
				I = () => n.a.createElement(x, null, n.a.createElement(b.a, {
					className: _.a.quarantinedIcon
				}), n.a.createElement("span", null, o.fbt._("Quarantined", null, {
					hk: "1GDuqm"
				}))),
				g = e => n.a.createElement(n.a.Fragment, null, n.a.createElement("span", null, e.subreddit.isNSFW && n.a.createElement(y, null)), n.a.createElement(x, {
					className: e.className
				}, e.description ? n.a.createElement(l.a, {
					icon: e.icon,
					text: e.description
				}) : e.icon, n.a.createElement("span", {
					className: e.textClassName
				}, e.text)), e.subreddit.isQuarantined && n.a.createElement(I, null)),
				C = Object(d.b)(E);
			t.a = C(e => {
				let {
					className: t,
					iconClassName: s,
					restrictions: r = f.e.Post,
					textClassName: d,
					subreddit: i
				} = e;
				switch (i.type) {
					case h.e.Restricted:
						return n.a.createElement(g, {
							className: t,
							icon: n.a.createElement(m.a, {
								className: Object(c.a)(_.a.restrictedIcon, s)
							}),
							text: o.fbt._("Restricted", null, {
								hk: "wixjP"
							}),
							textClassName: d,
							description: Object(f.g)(r),
							subreddit: i
						});
					case h.e.Private:
						return n.a.createElement(g, {
							className: t,
							icon: n.a.createElement(p.a, {
								className: Object(c.a)(_.a.privateIcon, s)
							}),
							text: o.fbt._("Private", null, {
								hk: "AwntX"
							}),
							textClassName: d,
							description: o.fbt._("Only approved users can view and submit to this community", null, {
								hk: "359nYX"
							}),
							subreddit: i
						});
					case h.e.EmployeesOnly:
						return n.a.createElement(g, {
							className: t,
							icon: n.a.createElement(u.a, {
								className: Object(c.a)(_.a.employeesIcon, s)
							}),
							text: i.allowContractors ? o.fbt._("Employees & Contractors", null, {
								hk: "1WUgPh"
							}) : o.fbt._("Employees Only", null, {
								hk: "4GrVK8"
							}),
							textClassName: d,
							subreddit: i
						});
					default:
						return n.a.createElement(n.a.Fragment, null, i.isQuarantined && n.a.createElement(I, null), i.isNSFW && n.a.createElement(y, null))
				}
			})
		},
		"./src/reddit/components/DiscoveryUnit/SubredditsDiscoveryUnit/communityClickContext.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "c", (function() {
				return i
			}));
			var o = s("./node_modules/react/index.js"),
				r = s.n(o);
			const n = r.a.createContext(() => {}),
				d = r.a.createContext(() => {});

			function i() {
				return Object(o.useContext)(n)
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.m.less": function(e, t, s) {
			e.exports = {
				HoverDiv: "_2mHuuvyV9doV3zwbZPtIPG",
				hoverDiv: "_2mHuuvyV9doV3zwbZPtIPG"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return _
			})), s.d(t, "b", (function() {
				return x
			}));
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/lib/lessComponent.tsx"),
				d = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/profile/index.ts"),
				c = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/selectors/tooltip.ts");
			const u = Object(i.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var m = Object(d.b)(u, (e, t) => ({
					onCloseUserDropdown: () => e(Object(c.i)()),
					onOpenUserDropdown: async () => {
						e(Object(c.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(a.d)(t.authorOrSubredditName))
					}
				})),
				p = s("./src/reddit/actions/subreddit.ts");
			const b = Object(i.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var v = Object(d.b)(b, (e, t) => ({
					onCloseUserDropdown: () => e(Object(c.i)()),
					onOpenUserDropdown: async () => {
						e(Object(c.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(p.t)(t.authorOrSubredditName))
					}
				})),
				h = s("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				f = s.n(h);
			class j extends r.a.Component {
				constructor() {
					super(...arguments), this.closeHovercardTimeoutId = 0, this.openHovercardTimeoutId = 0, this.isHovering = !1, this.hoverEl = void 0, this.onHoverElMouseEnter = () => {
						this.isHovering = !0
					}, this.onHoverElMouseLeave = () => {
						this.isHovering = !1
					}, this.onMouseEnter = e => {
						this.closeHovercardTimeoutId && clearTimeout(this.closeHovercardTimeoutId), this.openHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.dropdownIsOpen || (this.props.onOpenUserDropdown(), this.props.sendHoverEvent())
						}, 500)
					}, this.onMouseLeave = () => {
						this.openHovercardTimeoutId && clearTimeout(this.openHovercardTimeoutId), this.closeHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.onCloseUserDropdown()
						}, 300)
					}
				}
				componentDidMount() {
					const e = document.getElementById(this.props.hoverId);
					e && (this.hoverEl = e, this.addHoverListeners(this.hoverEl))
				}
				componentWillUnmount() {
					this.hoverEl && this.removeHoverListeners(this.hoverEl), this.hoverEl = void 0, this.openHovercardTimeoutId && window.clearTimeout(this.openHovercardTimeoutId)
				}
				addHoverListeners(e) {
					e.addEventListener("mouseenter", this.onHoverElMouseEnter), e.addEventListener("mouseleave", this.onHoverElMouseLeave)
				}
				removeHoverListeners(e) {
					e.removeEventListener("mouseenter", this.onHoverElMouseEnter), e.removeEventListener("mouseleave", this.onHoverElMouseLeave)
				}
				render() {
					const {
						children: e,
						className: t
					} = this.props;
					return r.a.createElement("div", {
						className: t,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, e)
				}
			}
			const O = n.a.wrapped(j, "HoverDiv", f.a),
				_ = m(O),
				x = v(O)
		},
		"./src/reddit/components/Hovercards/SubredditHovercard/SubredditOptions.m.less": function(e, t, s) {
			e.exports = {
				SubredditIcon: "_1P90KdCErwhRNJuZZheua7",
				subredditIcon: "_1P90KdCErwhRNJuZZheua7",
				SubredditNameDisplay: "_3yYcNCaibIQ7tljrEg4otg",
				subredditNameDisplay: "_3yYcNCaibIQ7tljrEg4otg",
				SubredditDescription: "XZpmTYGkFbfGNV3Osr1mJ",
				subredditDescription: "XZpmTYGkFbfGNV3Osr1mJ",
				SubredditNameContainer: "bIjG4TmpAGTshjKedXK4d",
				subredditNameContainer: "bIjG4TmpAGTshjKedXK4d",
				SubredditInfoContainer: "_3eP0ejGOD9ZSdYAZ5VMpke",
				subredditInfoContainer: "_3eP0ejGOD9ZSdYAZ5VMpke",
				Subscribers: "_1483avlTnkR6Eyr0gcsB-_",
				subscribers: "_1483avlTnkR6Eyr0gcsB-_",
				Online: "_3t6knJ998hsjJpD8rf_kd1",
				online: "_3t6knJ998hsjJpD8rf_kd1",
				Count: "_2fZqHR5v7J_cK10VMb1oQ-",
				count: "_2fZqHR5v7J_cK10VMb1oQ-",
				CountLabel: "_2zg4pUVwjyFfXZlzpqSI0a",
				countLabel: "_2zg4pUVwjyFfXZlzpqSI0a",
				CardContainer: "_197SqY-gDtObhzjz9SlSEp",
				cardContainer: "_197SqY-gDtObhzjz9SlSEp",
				Container: "cwnB_XN2JIEYp4vZcMrLM",
				container: "cwnB_XN2JIEYp4vZcMrLM"
			}
		},
		"./src/reddit/components/Hovercards/SubredditHovercard/_SubredditHovercard.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/reddit/components/Hovercards/helpers.ts"),
				d = s("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				i = s("./src/reddit/components/TrackingHelper/index.tsx"),
				a = s("./src/reddit/selectors/telemetry.ts");
			const c = (e, t, s) => o => ({
					source: "subreddit_hovercard",
					action: "click",
					noun: t,
					post: s ? a.post(o, s) : void 0,
					subreddit: a.subredditById(o, e),
					screen: a.screen(o)
				}),
				l = (e, t) => s => ({
					source: "subreddit_hovercard",
					action: "view",
					noun: "hover_subreddit_hovercard",
					post: t ? a.post(s, t) : void 0,
					subreddit: a.subredditById(s, e),
					screen: a.screen(s)
				});
			var u = s("./node_modules/react-redux/es/index.js"),
				m = s("./node_modules/reselect/es/index.js"),
				p = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/selectors/subreddit.ts"),
				v = s("./src/reddit/selectors/tooltip.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				f = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				j = s("./src/lib/lessComponent.tsx"),
				O = s("./src/lib/prettyPrintNumber/index.ts"),
				_ = s("./src/reddit/components/CommunityType/index.tsx"),
				x = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				E = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				y = s("./src/reddit/components/SubredditIcon/index.tsx"),
				I = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/helpers/truncateStringWithEllipsis.ts"),
				C = s("./src/reddit/components/DiscoveryUnit/SubredditsDiscoveryUnit/communityClickContext.ts").c,
				T = s("./src/reddit/components/Hovercards/SubredditHovercard/SubredditOptions.m.less"),
				N = s.n(T);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: P
			} = s("./node_modules/fbt/lib/FbtPublic.js"), S = j.a.wrapped(y.b, "SubredditIcon", N.a), H = j.a.wrapped(f.a, "SubredditNameDisplay", N.a), A = j.a.div("SubredditDescription", N.a), M = j.a.div("SubredditNameContainer", N.a), L = j.a.div("SubredditInfoContainer", N.a), k = j.a.div("Subscribers", N.a), D = j.a.div("Online", N.a), B = j.a.div("Count", N.a), U = j.a.div("CountLabel", N.a), R = j.a.div("Container", N.a), V = j.a.div("CardContainer", N.a), Z = e => r.a.createElement(L, null, r.a.createElement(k, null, r.a.createElement(B, null, Object(O.b)(e.subredditAboutInfo.subscribers)), r.a.createElement(U, null, P._({
				"*": "Members",
				_1: " Member"
			}, [P._plural(e.subredditAboutInfo.subscribers)], {
				hk: "2L8qF4"
			}))), r.a.createElement(D, null, r.a.createElement(B, null, Object(O.b)(e.subredditAboutInfo.accountsActive)), r.a.createElement(U, null, P._({
				"*": "Online",
				_1: " Online"
			}, [P._plural(e.subredditAboutInfo.accountsActive)], {
				hk: "3OMjYw"
			})))), F = Object(E.a)(e => {
				const {
					className: t,
					hideNSFWPref: s,
					hoverId: n,
					postId: d,
					sendEvent: i,
					style: a,
					subreddit: l,
					subredditAboutInfo: u
				} = e, m = C(), p = Object(o.useCallback)(() => {
					i(c(l.id, "title", d)), d && m(d)
				}, [i, d, l]), b = Object(o.useCallback)(() => {
					i(c(l.id, "visit", d)), d && m(d)
				}, [i, d, l]);
				return l && u ? r.a.createElement(R, {
					className: t,
					id: n,
					style: a
				}, r.a.createElement(V, null, r.a.createElement(M, null, r.a.createElement(S, {
					subredditOrProfile: l,
					shouldHideNsfwIcon: s
				}), r.a.createElement(H, {
					onClick: p,
					to: "".concat(l.url)
				}, l.displayText)), r.a.createElement(Z, {
					subredditAboutInfo: u
				}), r.a.createElement(_.a, {
					subreddit: l
				}), r.a.createElement(A, null, Object(g.a)(u.publicDescription || "", 140)), r.a.createElement(I.k, {
					onClick: b,
					to: "".concat(l.url)
				}, P._("View Community", null, {
					hk: "3TWTGC"
				})), r.a.createElement(x.h, {
					id: l.id,
					type: "subreddit"
				}))) : r.a.createElement(R, {
					style: a
				})
			});
			var K = e => {
				const t = e.activeTooltipId === e.tooltipId;
				return r.a.createElement(F, w({
					isOpen: t
				}, e))
			};
			const J = Object(m.c)({
				activeTooltipId: v.a,
				hideNSFWPref: h.A,
				subreddit: b.B,
				subredditAboutInfo: b.y
			});
			var z = Object(u.b)(J, e => ({
				onHideTooltip: () => e(Object(p.i)())
			}))(Object(i.c)(e => r.a.createElement("div", {
				className: e.className,
				id: e.tooltipId,
				onMouseLeave: e.onHideTooltip
			}, r.a.createElement(K, {
				activeTooltipId: e.activeTooltipId,
				hideNSFWPref: e.hideNSFWPref,
				hoverId: e.hoverId,
				onHideTooltip: e.onHideTooltip,
				postId: e.postId,
				sendEvent: e.sendEvent,
				subreddit: e.subreddit,
				subredditAboutInfo: e.subredditAboutInfo,
				tooltipId: e.tooltipId,
				tooltipPosition: e.tooltipPosition,
				tooltipType: e.tooltipType
			}))));
			const W = "SubredditInfoTooltip";
			class G extends r.a.Component {
				constructor() {
					super(...arguments), this.sendEvent = () => this.props.sendEvent(l(this.props.subredditName, this.props.postId))
				}
				render() {
					const {
						props: e
					} = this, t = Object(n.b)({
						itemId: e.postId,
						subredditName: e.subredditName,
						tooltipIdPrefix: W,
						tooltipType: e.tooltipType
					}), s = "".concat(t, "-hover-id");
					return r.a.createElement(d.b, {
						hoverId: s,
						sendHoverEvent: this.sendEvent,
						authorOrSubredditName: e.subredditName,
						tooltipId: t
					}, e.children, r.a.createElement(z, {
						className: e.className,
						hoverId: s,
						postId: e.postId,
						subredditName: e.subredditName,
						tooltipId: t,
						tooltipPosition: e.tooltipPosition,
						tooltipType: e.tooltipType
					}))
				}
			}
			t.default = Object(i.c)(G)
		},
		"./src/reddit/components/Hovercards/helpers.m.less": function(e, t, s) {
			e.exports = {
				UserActionItem: "_3HFQBVggvR9KDsFzm7jIdr",
				userActionItem: "_3HFQBVggvR9KDsFzm7jIdr"
			}
		},
		"./src/reddit/components/Hovercards/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return a
			}));
			var o = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/layout/row/Inline/index.tsx"),
				n = s("./src/reddit/components/Hovercards/helpers.m.less"),
				d = s.n(n);
			const i = o.a.wrapped(r.a, "UserActionItem", d.a),
				a = e => {
					const {
						author: t,
						itemId: s,
						subredditName: o,
						tooltipIdPrefix: r,
						tooltipType: n
					} = e;
					let d = r;
					return s && (d = "".concat(d, "--").concat(s)), n && (d = "".concat(d, "--").concat(n)), t && (d = "".concat(d, "--").concat(t)), o && (d = "".concat(d, "--").concat(o)), d
				}
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return j
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "c", (function() {
				return x
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "e", (function() {
				return I
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "g", (function() {
				return C
			})), s.d(t, "h", (function() {
				return T
			})), s.d(t, "i", (function() {
				return N
			}));
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				i = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/lodash/isNil.js")),
				a = s.n(i),
				c = s("./src/reddit/constants/jsapiEvents.ts");
			var l = s("./src/reddit/singleton/EventSystem.ts"),
				u = function(e, t) {
					var s = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (s[o[r]] = e[o[r]])
					}
					return s
				};
			const m = Object(d.c)({
				consumers: e => e.jsApi
			});
			class p extends o.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const t = this.props,
							{
								className: s,
								consumers: o
							} = t,
							r = u(t, ["className", "consumers"]);
						l.a.publish(c.a, r, e)
					}, this.setRef = e => this.el = e
				}
				componentDidMount() {
					a()(this.el) || this.fireEvent(this.el)
				}
				componentDidUpdate() {
					a()(this.el) || this.fireEvent(this.el)
				}
				render() {
					const {
						props: e
					} = this;
					return e.consumers.length ? r.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && r.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var b = Object(n.b)(m, {})(p),
				v = s("./src/reddit/selectors/comments.ts"),
				h = s("./src/reddit/selectors/subreddit.ts");
			const f = (e, t) => {
				const s = Object(v.n)(e, t),
					o = Object(h.J)(e, t);
				return {
					comment: s,
					isModerator: !(!o || !o.name) && !!e.moderatingSubreddits[o.name],
					subredditOrProfile: o
				}
			};
			var j = Object(n.b)(() => Object(d.a)(f, v.j, (e, t) => Object.assign(Object.assign({}, e), {
				depth: t
			})))(e => r.a.createElement(b, {
				type: "comment",
				data: {
					author: e.comment.author,
					approvedAtUTC: e.comment.approvedAtUTC,
					approvedBy: e.comment.approvedBy,
					bannedAtUTC: e.comment.bannedAtUTC,
					body: e.comment.body,
					created: e.comment.created,
					distinguishType: e.comment.distinguishType,
					id: e.comment.id,
					isApproved: e.comment.isApproved,
					isRemoved: e.comment.isRemoved,
					isSpam: e.comment.isSpam,
					isStickied: e.comment.isStickied,
					isTopLevel: 0 === e.depth,
					post: {
						id: e.comment.postId
					},
					removedBy: e.comment.bannedBy,
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			const O = (e, t) => {
				const s = Object(v.n)(e, t),
					o = Object(h.J)(e, t);
				return {
					comment: s,
					isModerator: !(!o || !o.name) && !!e.moderatingSubreddits[o.name],
					subredditOrProfile: o
				}
			};
			var _ = Object(n.b)(() => Object(d.a)(O, e => e))(e => r.a.createElement(b, {
				type: "commentAuthor",
				data: {
					author: e.comment.author,
					comment: {
						id: e.commentId
					},
					isModerator: e.isModerator,
					post: {
						id: e.comment.postId
					},
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			var x = Object(n.b)(() => Object(d.c)({
					subreddit: h.T
				}))(e => r.a.createElement(b, {
					className: e.className,
					type: "communityTools",
					data: {
						sectionName: e.sectionName,
						subreddit: e.subreddit ? {
							id: e.subreddit.id,
							name: e.subreddit.name,
							type: e.subreddit.type
						} : {}
					}
				})),
				E = s("./src/reddit/selectors/posts.ts");
			var y = Object(n.b)(() => Object(d.c)({
				post: E.N,
				subredditOrProfile: E.ab,
				isModerator: (e, t) => {
					const s = Object(E.ab)(e, t);
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => r.a.createElement(b, {
				className: e.className,
				type: "post",
				data: {
					author: e.post.author,
					approvedAtUTC: e.post.approvedAtUTC,
					approvedBy: e.post.approvedBy,
					bannedAtUTC: e.post.bannedAtUTC,
					created: e.post.created,
					numComments: e.post.numComments,
					distinguishType: e.post.distinguishType,
					domain: e.post.source && e.post.source.displayText,
					flair: e.post.flair,
					id: e.post.id,
					isApproved: e.post.isApproved,
					isRemoved: e.post.isRemoved,
					isSpam: e.post.isSpam,
					media: e.post.media,
					permalink: e.post.permalink,
					removedBy: e.post.bannedBy,
					sourceUrl: e.post.source && e.post.source.url,
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {},
					title: e.post.title,
					voteState: e.post.voteState
				}
			}));
			var I = Object(n.b)(() => Object(d.c)({
				subredditOrProfile: (e, t) => Object(E.ab)(e, {
					postId: t.post.id
				}),
				isModerator: (e, t) => {
					const s = Object(E.ab)(e, {
						postId: t.post.id
					});
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => r.a.createElement(b, {
				className: e.className,
				type: "postAuthor",
				data: {
					author: e.post.author,
					isModerator: e.isModerator,
					post: {
						id: e.post.id
					},
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {}
				}
			}));
			var g = Object(n.b)(() => Object(d.c)({
				post: E.N,
				subredditOrProfile: E.ab,
				isModerator: (e, t) => {
					const s = Object(E.ab)(e, t);
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => r.a.createElement(b, {
				className: e.className,
				type: "postModTools",
				data: {
					author: e.post.author,
					approvedAtUTC: e.post.approvedAtUTC,
					approvedBy: e.post.approvedBy,
					bannedAtUTC: e.post.bannedAtUTC,
					distinguishType: e.post.distinguishType,
					flair: e.post.flair,
					id: e.post.id,
					isApproved: e.post.isApproved,
					isRemoved: e.post.isRemoved,
					isSpam: e.post.isSpam,
					media: e.post.media,
					numComments: e.post.numComments,
					permalink: e.post.permalink,
					removedBy: e.post.bannedBy,
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {},
					title: e.post.title,
					voteState: e.post.voteState
				}
			}));
			var C = Object(n.b)(() => Object(d.c)({
				subreddit: h.T
			}))(e => r.a.createElement(b, {
				className: e.className,
				type: "sidebar",
				data: {
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}));
			var T = Object(n.b)(() => Object(d.c)({
				subredditOrProfile: (e, t) => Object(h.M)(e, {
					identifier: t
				})
			}))(e => r.a.createElement(b, {
				className: e.className,
				type: "subreddit",
				data: {
					id: e.subredditOrProfile.id,
					displayText: e.subredditOrProfile.displayText,
					name: e.subredditOrProfile.name,
					title: e.subredditOrProfile.title,
					url: e.subredditOrProfile.title
				}
			}));
			var N = Object(n.b)(() => Object(d.c)({
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return s ? Object(h.T)(e, {
						subredditId: s
					}) : null
				}
			}))(e => r.a.createElement(b, {
				className: e.className,
				type: "userHovercard",
				data: {
					user: e.user,
					contextId: e.contextId,
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}))
		},
		"./src/reddit/controls/IconTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				tooltip: "_3bX7W3J0lU78fp7cayvNxx"
			}
		},
		"./src/reddit/controls/IconTooltip/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/higherOrderComponents/asTooltip.tsx"),
				d = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				i = s("./src/reddit/controls/IconTooltip/index.m.less"),
				a = s.n(i);
			const c = Object(n.a)(d.b),
				l = ["center", "top"],
				u = ["center", "bottom"];
			class m extends r.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						showTooltip: !1
					}
				}
				render() {
					return r.a.createElement("span", {
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						ref: this.setTooltipTargetRef
					}, this.props.icon, r.a.createElement(c, {
						className: a.a.tooltip,
						isOpen: this.state.showTooltip,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: l,
						text: this.props.text,
						tooltipPosition: u
					}))
				}
			}
		},
		"./src/reddit/helpers/truncateStringWithEllipsis.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			t.a = (e, t) => e.length > t ? e.slice(0, t - 1).replace(/\s*$/, "") + "…" : e
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, s) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/icons/svgs/Admin/index.m.less"),
				i = s.n(d);
			t.a = e => r.a.createElement("svg", {
				className: Object(n.a)(e.className, i.a.admin, {
					[i.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && r.a.createElement("title", null, e.title), e.desc && r.a.createElement("desc", null, e.desc), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), r.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, r.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), r.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/Eye/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./node_modules/react/index.js"),
				r = s.n(o);

			function n(e) {
				return r.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 40 40"
				}, r.a.createElement("g", null, r.a.createElement("path", {
					d: "M20,8C9.1,8,0.5,14,0.5,21.7h4c0-3.6,3.4-6.9,8.2-8.5C11,15,10,17.4,10,20c0,5.5,4.5,10,10,10s10-4.5,10-10c0-2.6-1-5-2.7-6.8c4.8,1.7,8.2,4.9,8.2,8.5h4C39.5,14,30.9,8,20,8z"
				})))
			}
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o);
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
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o);
			t.a = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("svg", {
					className: t,
					viewBox: "0 0 12 12",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("g", {
					fillRule: "evenodd"
				}, r.a.createElement("path", {
					d: "M0 12h12V0H0z",
					fill: "none"
				}), r.a.createElement("path", {
					d: "M6.367 6.704a.376.376 0 0 1-.734 0l-.75-3.5a.376.376 0 0 1 .367-.454h1.5a.376.376 0 0 1 .367.454l-.75 3.5zm.166 2.701A.756.756 0 0 1 6 9.622a.74.74 0 0 1-.75-.75c0-.097.023-.195.06-.285a.74.74 0 0 1 .158-.24.778.778 0 0 1 1.065 0 .74.74 0 0 1 .157.24.76.76 0 0 1 .06.285c0 .203-.083.39-.217.533zm5.284-.373l-4.5-8.25a1.5 1.5 0 0 0-2.634 0l-4.5 8.25A1.501 1.501 0 0 0 1.5 11.25h9a1.5 1.5 0 0 0 1.317-2.218z",
					fill: "inherit"
				})))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditHovercard.ef5e918d5d889410bd83.js.map