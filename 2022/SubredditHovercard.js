// https://www.redditstatic.com/desktop2x/SubredditHovercard.4ac70b14f66bf05449c9.js
// Retrieved at 2/2/2022, 2:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditHovercard"], {
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
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/reddit/components/Flair/index.tsx"),
				a = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/controls/IconTooltip/index.tsx"),
				u = s("./src/reddit/icons/fonts/index.tsx"),
				p = s("./src/reddit/models/Flair/index.ts"),
				m = s("./src/reddit/models/Subreddit/index.ts"),
				b = s("./src/reddit/models/SubredditRestrictions/index.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				h = s("./src/reddit/components/CommunityType/index.m.less"),
				f = s.n(h);
			const O = s("./src/lib/lessComponent.tsx").a.span("TypeLabel", f.a),
				E = Object(a.c)({
					restrictions: v.m
				}),
				y = e => n.a.createElement(n.a.Fragment, null, n.a.createElement(d.b, {
					flair: {
						type: p.f.Nsfw,
						text: "nsfw"
					}
				}), n.a.createElement("span", {
					className: f.a.nsfwText
				}, o.fbt._("Adult content", null, {
					hk: "3KWIyX"
				}))),
				x = () => n.a.createElement(O, null, n.a.createElement(u.a, {
					name: "quarantined",
					className: f.a.quarantinedIcon
				}), n.a.createElement("span", null, o.fbt._("Quarantined", null, {
					hk: "1GDuqm"
				}))),
				I = e => n.a.createElement(n.a.Fragment, null, n.a.createElement("span", null, e.subreddit.isNSFW && n.a.createElement(y, null)), n.a.createElement(O, {
					className: e.className
				}, e.description ? n.a.createElement(c.a, {
					icon: e.icon,
					text: e.description
				}) : e.icon, n.a.createElement("span", {
					className: e.textClassName
				}, e.text)), e.subreddit.isQuarantined && n.a.createElement(x, null)),
				T = Object(i.b)(E);
			t.a = T(({
				className: e,
				iconClassName: t,
				restrictions: s = b.e.Post,
				textClassName: r,
				subreddit: i
			}) => {
				switch (i.type) {
					case m.f.Restricted:
						return n.a.createElement(I, {
							className: e,
							icon: n.a.createElement(u.a, {
								name: "hide",
								className: Object(l.a)(f.a.restrictedIcon, t)
							}),
							text: o.fbt._("Restricted", null, {
								hk: "wixjP"
							}),
							textClassName: r,
							description: Object(b.g)(s),
							subreddit: i
						});
					case m.f.Private:
						return n.a.createElement(I, {
							className: e,
							icon: n.a.createElement(u.a, {
								name: "hide",
								className: Object(l.a)(f.a.privateIcon, t)
							}),
							text: o.fbt._("Private", null, {
								hk: "AwntX"
							}),
							textClassName: r,
							description: o.fbt._("Only approved users can view and submit to this community", null, {
								hk: "359nYX"
							}),
							subreddit: i
						});
					case m.f.EmployeesOnly:
						return n.a.createElement(I, {
							className: e,
							icon: n.a.createElement(u.a, {
								name: "admin",
								className: Object(l.a)(f.a.employeesIcon, t)
							}),
							text: i.allowContractors ? o.fbt._("Employees & Contractors", null, {
								hk: "1WUgPh"
							}) : o.fbt._("Employees Only", null, {
								hk: "4GrVK8"
							}),
							textClassName: r,
							subreddit: i
						});
					default:
						return n.a.createElement(n.a.Fragment, null, i.isQuarantined && n.a.createElement(x, null), i.isNSFW && n.a.createElement(y, null))
				}
			})
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
				return y
			})), s.d(t, "b", (function() {
				return x
			}));
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/lib/lessComponent.tsx"),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/profile/index.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/selectors/tooltip.ts");
			const u = Object(d.c)({
				dropdownIsOpen: (e, t) => Object(c.b)(t.tooltipId)(e)
			});
			var p = Object(i.b)(u, (e, t) => ({
					onCloseUserDropdown: () => e(Object(l.i)()),
					onOpenUserDropdown: async () => {
						e(Object(l.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && (await e(Object(a.d)(t.authorOrSubredditName)), t.sendHoverEvent())
					}
				})),
				m = s("./src/reddit/actions/subreddit.ts");
			const b = Object(d.c)({
				dropdownIsOpen: (e, t) => Object(c.b)(t.tooltipId)(e)
			});
			var v = Object(i.b)(b, (e, t) => ({
					onCloseUserDropdown: () => e(Object(l.i)()),
					onOpenUserDropdown: async () => {
						var s;
						e(Object(l.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(m.u)(t.authorOrSubredditName)), null === (s = t.onShow) || void 0 === s || s.call(t)
					}
				})),
				h = s("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				f = s.n(h);
			class O extends r.a.Component {
				constructor() {
					super(...arguments), this.closeHovercardTimeoutId = 0, this.openHovercardTimeoutId = 0, this.isHovering = !1, this.hoverEl = void 0, this.onHoverElMouseEnter = () => {
						this.isHovering = !0
					}, this.onHoverElMouseLeave = () => {
						this.isHovering = !1
					}, this.onMouseEnter = e => {
						this.closeHovercardTimeoutId && clearTimeout(this.closeHovercardTimeoutId), this.openHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.dropdownIsOpen || this.props.onOpenUserDropdown()
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
			const E = n.a.wrapped(O, "HoverDiv", f.a),
				y = p(E),
				x = v(E)
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
				i = s("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				a = s("./src/reddit/selectors/telemetry.ts");
			const l = (e, t, s) => o => ({
					source: "subreddit_hovercard",
					action: "click",
					noun: t,
					post: s ? a.G(o, s) : void 0,
					subreddit: a.hb(o, e),
					screen: a.Y(o)
				}),
				c = (e, t) => s => ({
					source: "subreddit_hovercard",
					action: "view",
					noun: "hover_subreddit_hovercard",
					post: t ? a.G(s, t) : void 0,
					subreddit: a.hb(s, e),
					screen: a.Y(s)
				});
			var u = s("./node_modules/react-redux/es/index.js"),
				p = s("./node_modules/reselect/es/index.js"),
				m = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/selectors/subreddit.ts"),
				v = s("./src/reddit/selectors/tooltip.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				f = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				O = s("./src/lib/lessComponent.tsx"),
				E = s("./src/lib/prettyPrintNumber/index.ts"),
				y = s("./src/reddit/components/CommunityType/index.tsx"),
				x = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				I = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				T = s("./src/reddit/components/SubredditIcon/index.tsx"),
				j = s("./src/reddit/controls/Button/index.tsx"),
				N = s("./src/reddit/helpers/truncateStringWithEllipsis.ts");
			const C = r.a.createContext(() => {});
			r.a.createContext(() => {});
			var _ = function() {
					return Object(o.useContext)(C)
				},
				w = s("./src/reddit/components/Hovercards/SubredditHovercard/SubredditOptions.m.less"),
				S = s.n(w);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: H
			} = s("./node_modules/fbt/lib/FbtPublic.js"), g = O.a.wrapped(T.b, "SubredditIcon", S.a), A = O.a.wrapped(f.a, "SubredditNameDisplay", S.a), M = O.a.div("SubredditDescription", S.a), k = O.a.div("SubredditNameContainer", S.a), L = O.a.div("SubredditInfoContainer", S.a), D = O.a.div("Subscribers", S.a), U = O.a.div("Online", S.a), B = O.a.div("Count", S.a), R = O.a.div("CountLabel", S.a), Z = O.a.div("Container", S.a), F = O.a.div("CardContainer", S.a), K = e => r.a.createElement(L, null, r.a.createElement(D, null, r.a.createElement(B, null, Object(E.b)(e.subredditAboutInfo.subscribers)), r.a.createElement(R, null, H._({
				"*": "Members",
				_1: " Member"
			}, [H._plural(e.subredditAboutInfo.subscribers)], {
				hk: "2L8qF4"
			}))), r.a.createElement(U, null, r.a.createElement(B, null, Object(E.b)(e.subredditAboutInfo.accountsActive)), r.a.createElement(R, null, H._({
				"*": "Online",
				_1: " Online"
			}, [H._plural(e.subredditAboutInfo.accountsActive)], {
				hk: "3OMjYw"
			})))), G = Object(I.a)(e => {
				const {
					className: t,
					hideNSFWPref: s,
					hoverId: n,
					postId: i,
					sendEvent: d,
					shouldOpenNewTabOnClicks: a,
					style: c,
					subreddit: u,
					subredditAboutInfo: p
				} = e, m = _(), b = Object(o.useCallback)(() => {
					d(l(u.id, "title", i)), i && m(i)
				}, [d, i, u]), v = Object(o.useCallback)(() => {
					d(l(u.id, "visit", i)), i && m(i)
				}, [d, i, u]);
				return u && p ? r.a.createElement(Z, {
					className: t,
					id: n,
					style: c
				}, r.a.createElement(F, null, r.a.createElement(k, null, r.a.createElement(g, {
					subredditOrProfile: u,
					shouldHideNsfwIcon: s
				}), r.a.createElement(A, {
					onClick: b,
					to: `${u.url}`,
					target: a ? "_blank" : void 0,
					rel: a ? "noopener noreferrer" : void 0
				}, u.displayText)), r.a.createElement(K, {
					subredditAboutInfo: p
				}), r.a.createElement(y.a, {
					subreddit: u
				}), r.a.createElement(M, null, Object(N.a)(p.publicDescription || "", 140)), r.a.createElement(j.n, {
					onClick: v,
					to: `${u.url}`,
					target: a ? "_blank" : void 0,
					rel: a ? "noopener noreferrer" : void 0
				}, H._("View Community", null, {
					hk: "3TWTGC"
				})), r.a.createElement(x.h, {
					id: u.id,
					type: "subreddit"
				}))) : r.a.createElement(Z, {
					style: c
				})
			});
			var J = e => {
				const t = e.activeTooltipId === e.tooltipId;
				return r.a.createElement(G, P({
					isOpen: t
				}, e))
			};
			const q = Object(p.c)({
				activeTooltipId: v.a,
				hideNSFWPref: h.C,
				subreddit: b.w,
				subredditAboutInfo: b.t
			});
			var V = Object(u.b)(q, e => ({
				onHideTooltip: () => e(Object(m.i)())
			}))(Object(d.c)(e => r.a.createElement("div", {
				className: e.className,
				id: e.tooltipId,
				onMouseLeave: e.onHideTooltip
			}, r.a.createElement(J, {
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
				tooltipType: e.tooltipType,
				shouldOpenNewTabOnClicks: e.shouldOpenNewTabOnClicks
			}))));
			const Q = "SubredditInfoTooltip";
			class $ extends r.a.Component {
				constructor() {
					super(...arguments), this.sendEvent = () => this.props.sendEvent(c(this.props.subredditName, this.props.postId))
				}
				render() {
					const {
						props: e
					} = this, t = Object(n.b)({
						itemId: e.postId,
						subredditName: e.subredditName,
						tooltipIdPrefix: Q,
						tooltipType: e.tooltipType
					}), s = `${t}-hover-id`;
					return r.a.createElement(i.b, {
						className: this.props.className,
						hoverId: s,
						sendHoverEvent: this.sendEvent,
						authorOrSubredditName: e.subredditName,
						tooltipId: t,
						onShow: e.onShow
					}, e.children, r.a.createElement(V, {
						className: e.className,
						hoverId: s,
						postId: e.postId,
						subredditName: e.subredditName,
						tooltipId: t,
						tooltipPosition: e.tooltipPosition,
						tooltipType: e.tooltipType,
						shouldOpenNewTabOnClicks: e.shouldOpenNewTabOnClicks
					}))
				}
			}
			t.default = Object(d.c)($)
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
				return d
			})), s.d(t, "b", (function() {
				return a
			}));
			var o = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/layout/row/Inline/index.tsx"),
				n = s("./src/reddit/components/Hovercards/helpers.m.less"),
				i = s.n(n);
			const d = o.a.wrapped(r.a, "UserActionItem", i.a),
				a = e => {
					const {
						author: t,
						itemId: s,
						subredditName: o,
						tooltipIdPrefix: r,
						tooltipType: n
					} = e;
					let i = r;
					return s && (i = `${i}--${s}`), n && (i = `${i}--${n}`), t && (i = `${i}--${t}`), o && (i = `${i}--${o}`), i
				}
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return O
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "c", (function() {
				return x
			})), s.d(t, "d", (function() {
				return T
			})), s.d(t, "e", (function() {
				return j
			})), s.d(t, "f", (function() {
				return N
			})), s.d(t, "g", (function() {
				return C
			})), s.d(t, "h", (function() {
				return _
			})), s.d(t, "i", (function() {
				return w
			}));
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./node_modules/lodash/isNil.js"),
				a = s.n(d),
				l = s("./src/reddit/constants/jsapiEvents.ts");
			var c = s("./src/reddit/singleton/EventSystem.ts");
			const u = Object(i.c)({
				consumers: e => e.jsApi
			});
			class p extends o.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const {
							props: {
								className: t,
								consumers: s,
								...o
							}
						} = this;
						c.a.publish(l.a, o, e)
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
			var m = Object(n.b)(u, {})(p),
				b = s("./src/reddit/selectors/comments.ts"),
				v = s("./src/reddit/selectors/commentSelector.ts"),
				h = s("./src/reddit/selectors/subreddit.ts");
			const f = (e, t) => {
				var s;
				const o = null !== (s = t.comment) && void 0 !== s ? s : Object(v.b)(e, t),
					r = Object(h.G)(e, t);
				return {
					comment: o,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var O = Object(n.b)(() => Object(i.a)(f, b.j, (e, t) => ({
				...e,
				depth: t
			})))(e => r.a.createElement(m, {
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
			const E = (e, t) => {
				var s;
				const o = null !== (s = t.comment) && void 0 !== s ? s : Object(v.b)(e, t),
					r = Object(h.G)(e, t);
				return {
					comment: o,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var y = Object(n.b)(() => Object(i.a)(E, e => e))(e => r.a.createElement(m, {
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
			var x = Object(n.b)(() => Object(i.c)({
					subreddit: h.R
				}))(e => r.a.createElement(m, {
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
				I = s("./src/reddit/hooks/usePostContext.ts");
			var T = e => {
				const t = Object(I.a)(),
					s = Object(o.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						approvedAtUTC: null == t ? void 0 : t.post.approvedAtUTC,
						approvedBy: null == t ? void 0 : t.post.approvedBy,
						bannedAtUTC: null == t ? void 0 : t.post.bannedAtUTC,
						created: null == t ? void 0 : t.post.created,
						numComments: null == t ? void 0 : t.post.numComments,
						distinguishType: null == t ? void 0 : t.post.distinguishType,
						domain: (null == t ? void 0 : t.post.source) && (null == t ? void 0 : t.post.source.displayText),
						flair: null == t ? void 0 : t.post.flair,
						id: null == t ? void 0 : t.post.id,
						isApproved: null == t ? void 0 : t.post.isApproved,
						isRemoved: null == t ? void 0 : t.post.isRemoved,
						isSpam: null == t ? void 0 : t.post.isSpam,
						media: null == t ? void 0 : t.post.media,
						permalink: null == t ? void 0 : t.post.permalink,
						removedBy: null == t ? void 0 : t.post.bannedBy,
						sourceUrl: (null == t ? void 0 : t.post.source) && (null == t ? void 0 : t.post.source.url),
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {},
						title: null == t ? void 0 : t.post.title,
						voteState: null == t ? void 0 : t.post.voteState
					}), [t]);
				return t ? r.a.createElement(m, {
					className: e.className,
					type: "post",
					data: s
				}) : null
			};
			var j = e => {
				const t = Object(I.a)(),
					s = Object(o.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						isModerator: null == t ? void 0 : t.isModerator,
						post: {
							id: null == t ? void 0 : t.post.id
						},
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {}
					}), [t]);
				return t ? r.a.createElement(m, {
					className: e.className,
					type: "postAuthor",
					data: s
				}) : null
			};
			var N = e => {
				const t = Object(I.a)(),
					s = Object(o.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						approvedAtUTC: null == t ? void 0 : t.post.approvedAtUTC,
						approvedBy: null == t ? void 0 : t.post.approvedBy,
						bannedAtUTC: null == t ? void 0 : t.post.bannedAtUTC,
						distinguishType: null == t ? void 0 : t.post.distinguishType,
						flair: null == t ? void 0 : t.post.flair,
						id: null == t ? void 0 : t.post.id,
						isApproved: null == t ? void 0 : t.post.isApproved,
						isRemoved: null == t ? void 0 : t.post.isRemoved,
						isSpam: null == t ? void 0 : t.post.isSpam,
						media: null == t ? void 0 : t.post.media,
						numComments: null == t ? void 0 : t.post.numComments,
						permalink: null == t ? void 0 : t.post.permalink,
						removedBy: null == t ? void 0 : t.post.bannedBy,
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {},
						title: null == t ? void 0 : t.post.title,
						voteState: null == t ? void 0 : t.post.voteState
					}), [t]);
				return t ? r.a.createElement(m, {
					className: e.className,
					type: "postModTools",
					data: s
				}) : null
			};
			var C = Object(n.b)(() => Object(i.c)({
				subreddit: h.R
			}))(e => r.a.createElement(m, {
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
			var _ = Object(n.b)(() => Object(i.c)({
				subredditOrProfile: (e, t) => Object(h.J)(e, {
					identifier: t
				})
			}))(e => r.a.createElement(m, {
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
			var w = Object(n.b)(() => Object(i.c)({
				subreddit: (e, {
					subredditId: t
				}) => t ? Object(h.R)(e, {
					subredditId: t
				}) : null
			}))(e => r.a.createElement(m, {
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
		"./src/reddit/constants/jsapiEvents.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return n
			}));
			const o = "reddit",
				r = "reddit.ready",
				n = "reddit.urlChanged"
		},
		"./src/reddit/controls/IconTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				tooltip: "_3bX7W3J0lU78fp7cayvNxx"
			}
		},
		"./src/reddit/controls/IconTooltip/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			}));
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/higherOrderComponents/asTooltip.tsx"),
				i = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = s("./src/reddit/controls/IconTooltip/index.m.less"),
				a = s.n(d);
			const l = Object(n.a)(i.b),
				c = ["center", "top"],
				u = ["center", "bottom"];
			class p extends r.a.Component {
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
					}, this.props.icon, r.a.createElement(l, {
						className: a.a.tooltip,
						isOpen: this.state.showTooltip,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: c,
						text: this.props.text,
						tooltipPosition: u
					}))
				}
			}
		},
		"./src/reddit/helpers/truncateStringWithEllipsis.ts": function(e, t, s) {
			"use strict";
			t.a = (e, t) => e.length > t ? e.slice(0, t - 1).replace(/\s*$/, "") + "…" : e
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, s) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/layout/row/Inline/index.m.less"),
				n = s.n(r);
			t.a = o.a.div("inlineRow", n.a)
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, s) {
			"use strict";
			var o = s("./src/config.ts"),
				r = s("./src/lib/fastdom/index.ts"),
				n = s("./src/reddit/actions/jsApi.ts");
			const i = "JSAPI customEvent.detail.name is deprecated. Please upgrade to <meta>",
				d = "jsapi.consumer",
				a = "/r/redesign/wiki/jsapi";
			var l = s("./src/reddit/constants/jsapiEvents.ts");
			const c = 100;
			const u = new class {
				constructor() {
					if (this.queue = [], this.active = !1, "undefined" == typeof document) return;
					let e;
					this.store = new Promise(t => e = t), this.attachStore = t => e(t);
					const t = document.querySelectorAll(`meta[name="${d}"]`);
					t.length && (t.forEach(e => {
						const t = e.content;
						this.store.then(e => e.dispatch(n.b(t)))
					}), this.store.then(() => this.fireEventsQueue())), document.addEventListener(l.b, e => this.onReadyEvent(e), !0)
				}
				onReadyEvent(e) {
					let t;
					if (this.active = !0, e.target && e.target instanceof HTMLMetaElement && e.target.name === d && (t = e.target.content), !t) try {
						e.detail && (t = e.detail.name, console.warn(i, `${o.a.redditUrl}${a}`, e))
					} catch (s) {
						return void console.error(i, `${o.a.redditUrl}${a}`, s)
					}
					this.store.then(e => {
						e.dispatch(n.b(t || "")), this.fireEventsQueue()
					})
				}
				publish(e, t, s) {
					const o = {
						name: e,
						props: t,
						element: s
					};
					this.queue.push(o), this.queue.length > c && this.queue.shift(), this.active && this.fireEvent(o)
				}
				fireEvent(e) {
					e.element.dispatchEvent(new CustomEvent(e.name, {
						detail: e.props
					}))
				}
				fireEventsQueue() {
					r.a.read(() => {
						for (let e = 0; e < this.queue.length; e++) {
							const t = this.queue[e];
							this.fireEvent(t)
						}
					})
				}
			};
			t.a = u
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditHovercard.4ac70b14f66bf05449c9.js.map