// https://www.redditstatic.com/desktop2x/SubredditHovercard.3664f90313fa70cc73c8.js
// Retrieved at 9/20/2021, 8:00:09 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditHovercard"], {
		"./src/reddit/components/CommunityType/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CommunityType/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/reddit/components/Flair/index.tsx"),
				a = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/controls/IconTooltip/index.tsx"),
				u = n("./src/reddit/icons/fonts/index.tsx"),
				m = n("./src/reddit/models/Flair/index.ts"),
				p = n("./src/reddit/models/Subreddit/index.ts"),
				b = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				v = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/components/CommunityType/index.m.less"),
				f = n.n(h);
			const y = n("./src/lib/lessComponent.tsx").a.span("TypeLabel", f.a),
				E = Object(a.c)({
					restrictions: v.n
				}),
				O = e => o.a.createElement(o.a.Fragment, null, o.a.createElement(d.b, {
					flair: {
						type: m.f.Nsfw,
						text: "nsfw"
					}
				}), o.a.createElement("span", {
					className: f.a.nsfwText
				}, r.fbt._("Adult content", null, {
					hk: "3KWIyX"
				}))),
				x = () => o.a.createElement(y, null, o.a.createElement(u.a, {
					name: "quarantined",
					className: f.a.quarantinedIcon
				}), o.a.createElement("span", null, r.fbt._("Quarantined", null, {
					hk: "1GDuqm"
				}))),
				N = e => o.a.createElement(o.a.Fragment, null, o.a.createElement("span", null, e.subreddit.isNSFW && o.a.createElement(O, null)), o.a.createElement(y, {
					className: e.className
				}, e.description ? o.a.createElement(c.a, {
					icon: e.icon,
					text: e.description
				}) : e.icon, o.a.createElement("span", {
					className: e.textClassName
				}, e.text)), e.subreddit.isQuarantined && o.a.createElement(x, null)),
				I = Object(i.b)(E);
			t.a = I(({
				className: e,
				iconClassName: t,
				restrictions: n = b.e.Post,
				textClassName: s,
				subreddit: i
			}) => {
				switch (i.type) {
					case p.f.Restricted:
						return o.a.createElement(N, {
							className: e,
							icon: o.a.createElement(u.a, {
								name: "hide",
								className: Object(l.a)(f.a.restrictedIcon, t)
							}),
							text: r.fbt._("Restricted", null, {
								hk: "wixjP"
							}),
							textClassName: s,
							description: Object(b.g)(n),
							subreddit: i
						});
					case p.f.Private:
						return o.a.createElement(N, {
							className: e,
							icon: o.a.createElement(u.a, {
								name: "hide",
								className: Object(l.a)(f.a.privateIcon, t)
							}),
							text: r.fbt._("Private", null, {
								hk: "AwntX"
							}),
							textClassName: s,
							description: r.fbt._("Only approved users can view and submit to this community", null, {
								hk: "359nYX"
							}),
							subreddit: i
						});
					case p.f.EmployeesOnly:
						return o.a.createElement(N, {
							className: e,
							icon: o.a.createElement(u.a, {
								name: "admin",
								className: Object(l.a)(f.a.employeesIcon, t)
							}),
							text: i.allowContractors ? r.fbt._("Employees & Contractors", null, {
								hk: "1WUgPh"
							}) : r.fbt._("Employees Only", null, {
								hk: "4GrVK8"
							}),
							textClassName: s,
							subreddit: i
						});
					default:
						return o.a.createElement(o.a.Fragment, null, i.isQuarantined && o.a.createElement(x, null), i.isNSFW && o.a.createElement(O, null))
				}
			})
		},
		"./src/reddit/components/DiscoveryUnit/SubredditsDiscoveryUnit/communityClickContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			const o = s.a.createContext(() => {}),
				i = s.a.createContext(() => {});

			function d() {
				return Object(r.useContext)(o)
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.m.less": function(e, t, n) {
			e.exports = {
				HoverDiv: "_2mHuuvyV9doV3zwbZPtIPG",
				hoverDiv: "_2mHuuvyV9doV3zwbZPtIPG"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			})), n.d(t, "b", (function() {
				return x
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/profile/index.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/selectors/tooltip.ts");
			const u = Object(d.c)({
				dropdownIsOpen: (e, t) => Object(c.b)(t.tooltipId)(e)
			});
			var m = Object(i.b)(u, (e, t) => ({
					onCloseUserDropdown: () => e(Object(l.i)()),
					onOpenUserDropdown: async () => {
						e(Object(l.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && (await e(Object(a.d)(t.authorOrSubredditName)), t.sendHoverEvent())
					}
				})),
				p = n("./src/reddit/actions/subreddit.ts");
			const b = Object(d.c)({
				dropdownIsOpen: (e, t) => Object(c.b)(t.tooltipId)(e)
			});
			var v = Object(i.b)(b, (e, t) => ({
					onCloseUserDropdown: () => e(Object(l.i)()),
					onOpenUserDropdown: async () => {
						var n;
						e(Object(l.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(p.u)(t.authorOrSubredditName)), null === (n = t.onShow) || void 0 === n || n.call(t)
					}
				})),
				h = n("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				f = n.n(h);
			class y extends s.a.Component {
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
					return s.a.createElement("div", {
						className: t,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, e)
				}
			}
			const E = o.a.wrapped(y, "HoverDiv", f.a),
				O = m(E),
				x = v(E)
		},
		"./src/reddit/components/Hovercards/SubredditHovercard/SubredditOptions.m.less": function(e, t, n) {
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
		"./src/reddit/components/Hovercards/SubredditHovercard/_SubredditHovercard.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/components/Hovercards/helpers.ts"),
				i = n("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const l = (e, t, n) => r => ({
					source: "subreddit_hovercard",
					action: "click",
					noun: t,
					post: n ? a.post(r, n) : void 0,
					subreddit: a.subredditById(r, e),
					screen: a.screen(r)
				}),
				c = (e, t) => n => ({
					source: "subreddit_hovercard",
					action: "view",
					noun: "hover_subreddit_hovercard",
					post: t ? a.post(n, t) : void 0,
					subreddit: a.subredditById(n, e),
					screen: a.screen(n)
				});
			var u = n("./node_modules/react-redux/es/index.js"),
				m = n("./node_modules/reselect/es/index.js"),
				p = n("./src/reddit/actions/tooltip.ts"),
				b = n("./src/reddit/selectors/subreddit.ts"),
				v = n("./src/reddit/selectors/tooltip.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				f = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				y = n("./src/lib/lessComponent.tsx"),
				E = n("./src/lib/prettyPrintNumber/index.ts"),
				O = n("./src/reddit/components/CommunityType/index.tsx"),
				x = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				N = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				I = n("./src/reddit/components/SubredditIcon/index.tsx"),
				S = n("./src/reddit/controls/Button/index.tsx"),
				j = n("./src/reddit/helpers/truncateStringWithEllipsis.ts"),
				_ = n("./src/reddit/components/DiscoveryUnit/SubredditsDiscoveryUnit/communityClickContext.ts").c,
				C = n("./src/reddit/components/Hovercards/SubredditHovercard/SubredditOptions.m.less"),
				T = n.n(C);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: k
			} = n("./node_modules/fbt/lib/FbtPublic.js"), w = y.a.wrapped(I.b, "SubredditIcon", T.a), B = y.a.wrapped(f.a, "SubredditNameDisplay", T.a), g = y.a.div("SubredditDescription", T.a), H = y.a.div("SubredditNameContainer", T.a), L = y.a.div("SubredditInfoContainer", T.a), M = y.a.div("Subscribers", T.a), A = y.a.div("Online", T.a), D = y.a.div("Count", T.a), U = y.a.div("CountLabel", T.a), R = y.a.div("Container", T.a), F = y.a.div("CardContainer", T.a), K = e => s.a.createElement(L, null, s.a.createElement(M, null, s.a.createElement(D, null, Object(E.b)(e.subredditAboutInfo.subscribers)), s.a.createElement(U, null, k._({
				"*": "Members",
				_1: " Member"
			}, [k._plural(e.subredditAboutInfo.subscribers)], {
				hk: "2L8qF4"
			}))), s.a.createElement(A, null, s.a.createElement(D, null, Object(E.b)(e.subredditAboutInfo.accountsActive)), s.a.createElement(U, null, k._({
				"*": "Online",
				_1: " Online"
			}, [k._plural(e.subredditAboutInfo.accountsActive)], {
				hk: "3OMjYw"
			})))), Z = Object(N.a)(e => {
				const {
					className: t,
					hideNSFWPref: n,
					hoverId: o,
					postId: i,
					sendEvent: d,
					shouldOpenNewTabOnClicks: a,
					style: c,
					subreddit: u,
					subredditAboutInfo: m
				} = e, p = _(), b = Object(r.useCallback)(() => {
					d(l(u.id, "title", i)), i && p(i)
				}, [d, i, u]), v = Object(r.useCallback)(() => {
					d(l(u.id, "visit", i)), i && p(i)
				}, [d, i, u]);
				return u && m ? s.a.createElement(R, {
					className: t,
					id: o,
					style: c
				}, s.a.createElement(F, null, s.a.createElement(H, null, s.a.createElement(w, {
					subredditOrProfile: u,
					shouldHideNsfwIcon: n
				}), s.a.createElement(B, {
					onClick: b,
					to: `${u.url}`,
					target: a ? "_blank" : void 0,
					rel: a ? "noopener noreferrer" : void 0
				}, u.displayText)), s.a.createElement(K, {
					subredditAboutInfo: m
				}), s.a.createElement(O.a, {
					subreddit: u
				}), s.a.createElement(g, null, Object(j.a)(m.publicDescription || "", 140)), s.a.createElement(S.m, {
					onClick: v,
					to: `${u.url}`,
					target: a ? "_blank" : void 0,
					rel: a ? "noopener noreferrer" : void 0
				}, k._("View Community", null, {
					hk: "3TWTGC"
				})), s.a.createElement(x.h, {
					id: u.id,
					type: "subreddit"
				}))) : s.a.createElement(R, {
					style: c
				})
			});
			var q = e => {
				const t = e.activeTooltipId === e.tooltipId;
				return s.a.createElement(Z, P({
					isOpen: t
				}, e))
			};
			const W = Object(m.c)({
				activeTooltipId: v.a,
				hideNSFWPref: h.C,
				subreddit: b.w,
				subredditAboutInfo: b.t
			});
			var Q = Object(u.b)(W, e => ({
				onHideTooltip: () => e(Object(p.i)())
			}))(Object(d.c)(e => s.a.createElement("div", {
				className: e.className,
				id: e.tooltipId,
				onMouseLeave: e.onHideTooltip
			}, s.a.createElement(q, {
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
			const X = "SubredditInfoTooltip";
			class J extends s.a.Component {
				constructor() {
					super(...arguments), this.sendEvent = () => this.props.sendEvent(c(this.props.subredditName, this.props.postId))
				}
				render() {
					const {
						props: e
					} = this, t = Object(o.b)({
						itemId: e.postId,
						subredditName: e.subredditName,
						tooltipIdPrefix: X,
						tooltipType: e.tooltipType
					}), n = `${t}-hover-id`;
					return s.a.createElement(i.b, {
						className: this.props.className,
						hoverId: n,
						sendHoverEvent: this.sendEvent,
						authorOrSubredditName: e.subredditName,
						tooltipId: t,
						onShow: e.onShow
					}, e.children, s.a.createElement(Q, {
						className: e.className,
						hoverId: n,
						postId: e.postId,
						subredditName: e.subredditName,
						tooltipId: t,
						tooltipPosition: e.tooltipPosition,
						tooltipType: e.tooltipType,
						shouldOpenNewTabOnClicks: e.shouldOpenNewTabOnClicks
					}))
				}
			}
			t.default = Object(d.c)(J)
		},
		"./src/reddit/components/Hovercards/helpers.m.less": function(e, t, n) {
			e.exports = {
				UserActionItem: "_3HFQBVggvR9KDsFzm7jIdr",
				userActionItem: "_3HFQBVggvR9KDsFzm7jIdr"
			}
		},
		"./src/reddit/components/Hovercards/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return a
			}));
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/layout/row/Inline/index.tsx"),
				o = n("./src/reddit/components/Hovercards/helpers.m.less"),
				i = n.n(o);
			const d = r.a.wrapped(s.a, "UserActionItem", i.a),
				a = e => {
					const {
						author: t,
						itemId: n,
						subredditName: r,
						tooltipIdPrefix: s,
						tooltipType: o
					} = e;
					let i = s;
					return n && (i = `${i}--${n}`), o && (i = `${i}--${o}`), t && (i = `${i}--${t}`), r && (i = `${i}--${r}`), i
				}
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return y
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "f", (function() {
				return j
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "i", (function() {
				return T
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./node_modules/lodash/isNil.js"),
				a = n.n(d),
				l = n("./src/reddit/constants/jsapiEvents.ts");
			var c = n("./src/reddit/singleton/EventSystem.ts");
			const u = Object(i.c)({
				consumers: e => e.jsApi
			});
			class m extends r.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const {
							props: {
								className: t,
								consumers: n,
								...r
							}
						} = this;
						c.a.publish(l.a, r, e)
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
					return e.consumers.length ? s.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && s.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var p = Object(o.b)(u, {})(m),
				b = n("./src/reddit/selectors/comments.ts"),
				v = n("./src/reddit/selectors/commentSelector.ts"),
				h = n("./src/reddit/selectors/subreddit.ts");
			const f = (e, t) => {
				const n = Object(v.a)(e, t),
					r = Object(h.F)(e, t);
				return {
					comment: n,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var y = Object(o.b)(() => Object(i.a)(f, b.j, (e, t) => ({
				...e,
				depth: t
			})))(e => s.a.createElement(p, {
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
				const n = Object(v.a)(e, t),
					r = Object(h.F)(e, t);
				return {
					comment: n,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var O = Object(o.b)(() => Object(i.a)(E, e => e))(e => s.a.createElement(p, {
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
			var x = Object(o.b)(() => Object(i.c)({
					subreddit: h.Q
				}))(e => s.a.createElement(p, {
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
				N = n("./src/reddit/hooks/usePostContext.ts");
			var I = e => {
				const t = Object(N.a)(),
					n = Object(r.useMemo)(() => ({
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
				return t ? s.a.createElement(p, {
					className: e.className,
					type: "post",
					data: n
				}) : null
			};
			var S = e => {
				const t = Object(N.a)(),
					n = Object(r.useMemo)(() => ({
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
				return t ? s.a.createElement(p, {
					className: e.className,
					type: "postAuthor",
					data: n
				}) : null
			};
			var j = e => {
				const t = Object(N.a)(),
					n = Object(r.useMemo)(() => ({
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
				return t ? s.a.createElement(p, {
					className: e.className,
					type: "postModTools",
					data: n
				}) : null
			};
			var _ = Object(o.b)(() => Object(i.c)({
				subreddit: h.Q
			}))(e => s.a.createElement(p, {
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
			var C = Object(o.b)(() => Object(i.c)({
				subredditOrProfile: (e, t) => Object(h.I)(e, {
					identifier: t
				})
			}))(e => s.a.createElement(p, {
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
			var T = Object(o.b)(() => Object(i.c)({
				subreddit: (e, {
					subredditId: t
				}) => t ? Object(h.Q)(e, {
					subredditId: t
				}) : null
			}))(e => s.a.createElement(p, {
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
		"./src/reddit/constants/jsapiEvents.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			}));
			const r = "reddit",
				s = "reddit.ready",
				o = "reddit.urlChanged"
		},
		"./src/reddit/controls/Button/index.m.less": function(e, t, n) {
			e.exports = {
				Button: "_2iuoyPiKHN3kfOoeIQalDT",
				button: "_2iuoyPiKHN3kfOoeIQalDT",
				isFullWidth: "_34mIRHpFtnJ0Sk97S2Z3D9",
				xxsmallButtonStyles: "_1h6qKGhVsgNfytYFlo8m3f",
				Icon: "_1mvTX6krm3Q2d1CSyUm28s",
				icon: "_1mvTX6krm3Q2d1CSyUm28s",
				isLeft: "_1HHR_ND8U6x6YrIqKFeXZy",
				isRight: "_3tKmDp5VAtgWvabEmFkJ7T",
				xsmallButtonStyles: "_3uJP0daPEH2plzVEYyTdaH",
				smallButtonStyles: "HNozj_dKjQZ59ZsfEegz8",
				mediumButtonStyles: "_3ukcnQySDskQwK_wB2iXYl",
				largeButtonStyles: "_1J4mN6_wNfCtSyMDUNGQqN",
				xlargeButtonStyles: "XpD6n11mOiKNg8ZKtvgVR",
				primary: "_10BQ7pjWbeYP63SAPNS8Ts",
				active: "_39a0Mt5b1i2joAqIaEHOWJ",
				redditStyle: "_2nelDm85zKKmuD94NequP0",
				DangerButtonColors: "_1t63zWyh9UUgsyQc6acROM",
				dangerButtonColors: "_1t63zWyh9UUgsyQc6acROM",
				GoldButtonColors: "_10UWrWSil1Xu6pdSaa_3-K",
				goldButtonColors: "_10UWrWSil1Xu6pdSaa_3-K",
				PremiumButtonColors: "q_unSaY23rpdd3lDvGZ-",
				premiumButtonColors: "q_unSaY23rpdd3lDvGZ-",
				secondary: "_2tU8R9NTqhvBrhoNAXWWcP",
				tertiary: "_4Glnzr5LA7bNBGMWGW4pU",
				plain: "_3zbhtNO0bdck0oYbYRhjMC",
				isIconOnly: "_1tPpYVD73ugqp4k-VMFRki",
				isSquare: "_3ojSE1JW7jxNzUzZK8kt7m",
				ExtraSmallBaseButton: "_2v8rCfSRT4mr5y4pwEhX41",
				extraSmallBaseButton: "_2v8rCfSRT4mr5y4pwEhX41",
				InlineTextButton: "_3kfXQpuyMJIMeWQCwjZKfw",
				inlineTextButton: "_3kfXQpuyMJIMeWQCwjZKfw",
				ChatButton: "_13twe55MPRo1LqypxB-LJx",
				chatButton: "_13twe55MPRo1LqypxB-LJx",
				PlainLinkButton: "_2UhHcZFBOYxMULbf2p-skl",
				plainLinkButton: "_2UhHcZFBOYxMULbf2p-skl"
			}
		},
		"./src/reddit/controls/Button/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "l", (function() {
				return E
			})), n.d(t, "m", (function() {
				return O
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "o", (function() {
				return N
			})), n.d(t, "p", (function() {
				return I
			})), n.d(t, "n", (function() {
				return S
			})), n.d(t, "r", (function() {
				return j
			})), n.d(t, "q", (function() {
				return _
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "f", (function() {
				return T
			})), n.d(t, "j", (function() {
				return P
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "h", (function() {
				return w
			})), n.d(t, "i", (function() {
				return B
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/InternalLink/index.tsx"),
				d = n("./src/reddit/controls/Button/index.m.less"),
				a = n.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const c = {
				role: "button",
				tabIndex: 0
			};
			var u, m, p, b;
			! function(e) {
				e.XXS = "xxsmallButtonStyles", e.XS = "xsmallButtonStyles", e.S = "smallButtonStyles", e.M = "mediumButtonStyles", e.L = "largeButtonStyles", e.XL = "xlargeButtonStyles"
			}(u || (u = {})),
			function(e) {
				e.Primary = "primary", e.Secondary = "secondary", e.Tertiary = "tertiary", e.Plain = "plain"
			}(m || (m = {})),
			function(e) {
				e.L = "left", e.R = "right", e.C = "center"
			}(p || (p = {})),
			function(e) {
				e.Button = "button", e.ExternalLink = "external-link", e.InternalLink = "internal-link"
			}(b || (b = {}));
			const v = e => {
					const {
						"data-redditstyle": t,
						Icon: n,
						iconClassName: r,
						iconPosition: i = p.C,
						isFullWidth: d = !1,
						isSquare: v = !1,
						children: E,
						className: O,
						kind: x = b.Button,
						priority: N = m.Primary,
						redditStyle: I,
						size: S = u.S,
						text: j,
						textClassName: _,
						...C
					} = e, T = (({
						baseClassName: e,
						redditStyle: t,
						dataRedditStyle: n,
						Icon: r,
						isFullWidth: s,
						isSquare: i,
						priority: d,
						size: l,
						text: c
					}) => Object(o.a)(e, a.a.Button, d && a.a[d], l && a.a[l], {
						[a.a.isFullWidth]: s,
						[a.a.isIconOnly]: !!r && !c,
						[a.a.isSquare]: i,
						[a.a.redditStyle]: !(!t && !n)
					}))({
						baseClassName: O,
						children: E,
						dataRedditStyle: t,
						Icon: n,
						isFullWidth: d,
						isSquare: v,
						priority: N,
						redditStyle: I,
						size: S,
						text: j
					}), P = (({
						children: e,
						text: t,
						Icon: n,
						iconClassName: r,
						iconPosition: i,
						priority: d,
						textClassName: l
					}) => !n && t ? s.a.createElement("span", {
						className: l
					}, t) : s.a.createElement(s.a.Fragment, null, n && (i === p.C || i === p.L) && s.a.createElement(n, {
						className: Object(o.a)(a.a.Icon, r, {
							[a.a.isLeft]: i === p.L
						}),
						isFilled: d === m.Primary
					}), t && s.a.createElement("span", {
						className: Object(o.a)(a.a.Text, l)
					}, t), e && e, n && i === p.R && s.a.createElement(n, {
						className: Object(o.a)(a.a.Icon, r, a.a.isRight),
						isFilled: d === m.Primary
					})))({
						children: E,
						text: j,
						Icon: n,
						iconClassName: r,
						iconPosition: i,
						priority: N,
						textClassName: _
					});
					return x === b.InternalLink && (e => "to" in e)(C) ? s.a.createElement(h, l({}, c, C, {
						className: T
					}), P) : x === b.ExternalLink && (e => "href" in e)(C) ? s.a.createElement(f, l({}, c, C, {
						className: T
					}), P) : s.a.createElement(y, l({}, c, C, {
						className: T
					}), P)
				},
				h = e => s.a.createElement(i.a, e),
				f = e => s.a.createElement("a", e),
				y = e => s.a.createElement("button", e),
				E = e => s.a.createElement(v, l({
					kind: b.ExternalLink,
					priority: m.Primary
				}, e)),
				O = e => s.a.createElement(v, l({
					kind: b.InternalLink,
					priority: m.Primary
				}, e)),
				x = e => s.a.createElement(v, l({
					kind: b.Button,
					priority: m.Primary
				}, e)),
				N = e => s.a.createElement(v, l({
					kind: b.ExternalLink,
					priority: m.Secondary
				}, e)),
				I = e => s.a.createElement(v, l({
					kind: b.InternalLink,
					priority: m.Secondary
				}, e)),
				S = e => s.a.createElement(v, l({
					kind: b.Button,
					priority: m.Secondary
				}, e)),
				j = e => s.a.createElement(v, l({
					kind: b.InternalLink,
					priority: m.Plain
				}, e)),
				_ = e => s.a.createElement(v, l({
					kind: b.Button,
					priority: m.Plain
				}, e)),
				C = ({
					className: e,
					...t
				}) => s.a.createElement(v, l({
					kind: b.Button,
					priority: m.Primary,
					className: Object(o.a)(e, a.a.DangerButtonColors)
				}, t)),
				T = ({
					className: e,
					...t
				}) => s.a.createElement(v, l({
					kind: b.Button,
					className: Object(o.a)(e, a.a.GoldButtonColors)
				}, t)),
				P = ({
					className: e,
					...t
				}) => s.a.createElement(v, l({
					kind: b.Button,
					className: Object(o.a)(e, a.a.PremiumButtonColors)
				}, t)),
				k = ({
					className: e,
					...t
				}) => s.a.createElement(v, l({
					kind: b.Button,
					className: Object(o.a)(e, a.a.ChatButton)
				}, t)),
				w = ({
					className: e,
					...t
				}) => s.a.createElement(v, l({
					kind: b.Button,
					className: Object(o.a)(e, a.a.InlineTextButton)
				}, t)),
				B = ({
					className: e,
					...t
				}) => s.a.createElement(v, l({
					kind: b.Button,
					className: Object(o.a)(e, a.a.PlainLinkButton)
				}, t));
			t.s = v
		},
		"./src/reddit/controls/IconTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				tooltip: "_3bX7W3J0lU78fp7cayvNxx"
			}
		},
		"./src/reddit/controls/IconTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/higherOrderComponents/asTooltip.tsx"),
				i = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = n("./src/reddit/controls/IconTooltip/index.m.less"),
				a = n.n(d);
			const l = Object(o.a)(i.b),
				c = ["center", "top"],
				u = ["center", "bottom"];
			class m extends s.a.Component {
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
					return s.a.createElement("span", {
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						ref: this.setTooltipTargetRef
					}, this.props.icon, s.a.createElement(l, {
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
		"./src/reddit/helpers/truncateStringWithEllipsis.ts": function(e, t, n) {
			"use strict";
			t.a = (e, t) => e.length > t ? e.slice(0, t - 1).replace(/\s*$/, "") + "…" : e
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, n) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/layout/row/Inline/index.m.less"),
				o = n.n(s);
			t.a = r.a.div("inlineRow", o.a)
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				s = n("./src/lib/fastdom/index.ts"),
				o = n("./src/reddit/actions/jsApi.ts");
			const i = "JSAPI customEvent.detail.name is deprecated. Please upgrade to <meta>",
				d = "jsapi.consumer",
				a = "/r/redesign/wiki/jsapi";
			var l = n("./src/reddit/constants/jsapiEvents.ts");
			const c = 100;
			const u = new class {
				constructor() {
					if (this.queue = [], this.active = !1, "undefined" == typeof document) return;
					let e;
					this.store = new Promise(t => e = t), this.attachStore = t => e(t);
					const t = document.querySelectorAll(`meta[name="${d}"]`);
					t.length && (t.forEach(e => {
						const t = e.content;
						this.store.then(e => e.dispatch(o.b(t)))
					}), this.store.then(() => this.fireEventsQueue())), document.addEventListener(l.b, e => this.onReadyEvent(e), !0)
				}
				onReadyEvent(e) {
					let t;
					if (this.active = !0, e.target && e.target instanceof HTMLMetaElement && e.target.name === d && (t = e.target.content), !t) try {
						e.detail && (t = e.detail.name, console.warn(i, `${r.a.redditUrl}${a}`, e))
					} catch (n) {
						return void console.error(i, `${r.a.redditUrl}${a}`, n)
					}
					this.store.then(e => {
						e.dispatch(o.b(t || "")), this.fireEventsQueue()
					})
				}
				publish(e, t, n) {
					const r = {
						name: e,
						props: t,
						element: n
					};
					this.queue.push(r), this.queue.length > c && this.queue.shift(), this.active && this.fireEvent(r)
				}
				fireEvent(e) {
					e.element.dispatchEvent(new CustomEvent(e.name, {
						detail: e.props
					}))
				}
				fireEventsQueue() {
					s.a.read(() => {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditHovercard.3664f90313fa70cc73c8.js.map