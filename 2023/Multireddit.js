// https://www.redditstatic.com/desktop2x/Multireddit.ea30d399f763a63599da.js
// Retrieved at 8/14/2023, 5:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Multireddit"], {
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, n) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				c = n("./src/higherOrderComponents/asModal/index.tsx"),
				o = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				a = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = n.n(l);
			const m = e => e.preventDefault();
			t.a = Object(c.a)(e => i.a.createElement(o.e, null, i.a.createElement(o.i, null, i.a.createElement(d.a, null, i.a.createElement(o.q, null, e.headerText || r.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), i.a.createElement(a.a, {
				onClick: t => {
					e.onClose && e.onClose(t), e.toggleModal && e.toggleModal()
				}
			}, i.a.createElement(o.b, null)))), i.a.createElement(o.l, null, i.a.createElement(o.p, {
				className: u.a.ModalText
			}, e.modalText)), i.a.createElement(o.g, null, !e.hideCancelButton && i.a.createElement(o.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || r.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), i.a.createElement(o.u, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(t), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle,
				disabled: e.isDisabled
			}, e.actionText))))
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, n) {
			e.exports = {
				BaseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				baseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				c = n("./src/reddit/controls/Button/index.tsx"),
				o = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				a = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				d = n.n(a),
				l = n("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const m = (e, t, n) => null != n ? n : t ? e : c.c.Plain,
				b = e => {
					let {
						border: t,
						priority: n,
						small: r,
						...s
					} = e;
					return i.a.createElement(c.t, u({}, s, {
						priority: m(c.c.Primary, t, n),
						className: Object(l.a)(s.className, d.a.BaseButton),
						size: r ? c.d.S : c.d.M
					}))
				},
				p = e => i.a.createElement(i.a.Fragment, null, i.a.createElement("span", {
					className: d.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? r.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : r.fbt._("Following", null, {
					hk: "1wQlVR"
				})), i.a.createElement("span", {
					className: d.a.UnsubscribeButtonHover
				}, "subreddit" === e ? r.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : r.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				f = e => {
					let {
						buttonType: t,
						border: n,
						priority: r,
						small: s,
						...o
					} = e;
					return i.a.createElement(c.t, u({}, o, {
						priority: m(c.c.Secondary, n, r),
						className: Object(l.a)(o.className, d.a.BaseButton),
						size: s ? c.d.S : c.d.M,
						text: p(t)
					}))
				};
			class x extends i.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? (this.props.onUnsubscribe(), this.props.afterUnsubscribeAction && this.props.afterUnsubscribeAction()) : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						id: n,
						priority: r,
						small: s = !1,
						isFullWidth: c = !1,
						style: a
					} = this.props, d = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: r,
						small: s,
						isFullWidth: c,
						style: a
					};
					return this.props.userIsSubscriber ? i.a.createElement(f, u({}, d, {
						buttonType: this.props.identifier.type
					})) : i.a.createElement(b, u({}, d, {
						id: n
					}), this.props.children, Object(o.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				s = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				i = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(s.a)(Object(r.c)(i.a))
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				c = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				d = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				u = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				m = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				b = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				p = n.n(b);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const x = Object(o.c)({
					currentUser: d.m,
					isNightMode: d.fb,
					isPresenceUserPrefEnabled: d.X,
					shouldHideNSFW: d.H
				}),
				h = Object(c.b)(x);
			t.a = h(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: s,
					wrapperClassName: c,
					...o
				} = e, d = Object(a.a)(null == t ? void 0 : t.accountIcon);
				return i.a.createElement("div", {
					className: Object(r.a)(p.a.currentUserIconWrapper, c)
				}, d ? i.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : i.a.createElement(m.b, f({}, o, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), n && i.a.createElement(l.default, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/helpers/counters/nsfwblocking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return d
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/sample/index.ts"),
				i = n("./src/telemetry/helpers/sendCounter.ts");
			const c = () => !1;
			var o;
			! function(e) {
				e.Dismiss = "dismiss", e.Login = "login", e.Signup = "signup", e.View = "view"
			}(o || (o = {}));
			const a = e => {
					c() || Object(i.b)(r.n.Redesign, {
						type: i.a.NsfwBlocking,
						data: {
							action: e
						}
					})
				},
				d = e => {
					!c() && e && Object(s.b)(10) && Object(i.b)(r.n.Redesign, {
						type: i.a.NsfwBlocking,
						data: {
							action: o.View,
							variant: e
						}
					})
				}
		},
		"./src/reddit/helpers/isListingFocused/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/brcast/dist/brcast.es.js");
			const s = Object(r.a)({
				isListingFocused: !1
			})
		},
		"./src/reddit/helpers/trackers/customFeeds.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "g", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "f", (function() {
				return u
			}));
			var r = n("./src/reddit/selectors/telemetry.ts");
			const s = (e, t) => ({
					...Object(r.q)(t),
					customFeed: Object(r.p)(t, e),
					source: "custom_feeds"
				}),
				i = e => t => ({
					...s(e, t),
					action: "click",
					noun: "delete"
				}),
				c = e => t => ({
					...s(e, t),
					action: "click",
					noun: "follow"
				}),
				o = e => t => ({
					...s(e, t),
					action: "click",
					noun: "unfollow"
				}),
				a = e => t => ({
					...s(e, t),
					action: "click",
					noun: "duplicate"
				}),
				d = e => t => ({
					...s(e, t),
					action: "click",
					noun: "share"
				}),
				l = e => t => ({
					...s(e, t),
					action: "click",
					noun: "favorite",
					source: "community_nav"
				}),
				u = e => t => ({
					...s(e, t),
					action: "click",
					noun: "unfavorite",
					source: "community_nav"
				})
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, s.a.createElement("g", null, s.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), s.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		},
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
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
				i = n.n(s);
			t.a = r.a.div("inlineRow", i.a)
		},
		"./src/reddit/models/ContentGate.ts": function(e, t, n) {
			"use strict";
			var r;
			n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.CustomFeedDoesNotExist = "CustomFeedDoesNotExist", e.GoldSubreddit = "GoldSubreddit", e.Nsfw = "Nsfw", e.NsfwCustomFeed = "NsfwCustomFeed", e.PrivateSubreddit = "PrivateSubreddit", e.ProfileDoesNotExist = "ProfileDoesNotExist", e.ProfileDeleted = "ProfileDeleted", e.ProfileSuspended = "ProfileSuspended", e.ProfileBlockedForLegalReason = "ProfileBlockedForLegalReason", e.QuarantinedSubreddit = "QuarantinedSubreddit", e.GatedSubreddit = "GatedSubreddit", e.SubredditBanned = "SubredditBanned", e.SubredditBlockedForLegalReason = "SubredditBlockedForLegalReason", e.SubredditDoesNotExist = "SubredditDoesNotExist", e.PostBlockedForLegalReason = "PostBlockedForLegalReason"
				}(r || (r = {}))
		},
		"./src/reddit/selectors/experiments/joinOptimizations.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts"),
				c = n("./src/reddit/selectors/experiments/index.ts");
			const o = Object(r.a)(e => Object(i.c)(e, {
					experimentName: s.Rb,
					experimentEligibilitySelector: c.e
				}), e => e === s.V.Enabled),
				a = Object(r.a)(e => Object(i.c)(e, {
					experimentName: s.Sb,
					experimentEligibilitySelector: c.e
				}), e => e === s.W.Enabled),
				d = Object(r.a)(e => Object(i.c)(e, {
					experimentName: s.Tb,
					experimentEligibilitySelector: c.e
				}), e => e === s.X.Enabled),
				l = Object(r.a)(e => Object(i.c)(e, {
					experimentName: s.Ub,
					experimentEligibilitySelector: c.e
				}), e => e === s.Y.Enabled),
				u = Object(r.a)(e => Object(i.c)(e, {
					experimentName: s.Wb,
					experimentEligibilitySelector: c.e
				}), e => e === s.ab.Enabled),
				m = Object(r.a)(e => Object(i.c)(e, {
					experimentName: s.Vb,
					experimentEligibilitySelector: c.e
				}), e => e === s.Z.Enabled)
		},
		"./src/reddit/selectors/experiments/shredditMigration.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return p
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "h", (function() {
				return S
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/experiments/index.ts");
			const c = /^\/?(new|top|hot|controversial|rising|best)?\/?$/,
				o = /^\/r\/all\/?((new|top|hot|controversial|rising|best)\/?)?$/,
				a = /^\/r\/popular\/?((new|top|hot|controversial|rising|best)\/?)?$/,
				d = /^\/r\/[^/]+\/?((controversial|new|about|top)\/?)?$/,
				l = /^\/r\/[^/]+\/w(iki)?\/?([^/]+\/?)?$/,
				u = /^\/u(?:ser)?\/[^/]+(\/[^/]+)?\/?$/,
				m = e => !!e.match(c) || !!e.match(a),
				b = e => !e.match(a) && (!e.match(o) && (!!e.match(d) || !!e.match(l))),
				p = (e, t) => !!m(t) && [r.Wf.Enabled, r.Wf.HardReload].includes(Object(s.c)(e, {
					experimentEligibilitySelector: i.f,
					experimentName: r.Ff
				})),
				f = (e, t) => !!t.match(o) && [r.Wf.Enabled, r.Wf.HardReload].includes(Object(s.c)(e, {
					experimentEligibilitySelector: i.f,
					experimentName: r.Df
				})),
				x = (e, t) => !!b(t) && [r.Wf.Enabled, r.Wf.HardReload].includes(Object(s.c)(e, {
					experimentEligibilitySelector: i.f,
					experimentName: r.Ef
				})),
				h = (e, t) => !(!b(t) && !m(t)) && Object(s.c)(e, {
					experimentEligibilitySelector: i.f,
					experimentName: r.me
				}) === r.Rd,
				E = (e, t) => {
					if (!t.match(o) && !m(t)) return !1;
					return Object(s.c)(e, {
						experimentEligibilitySelector: i.e,
						experimentName: r.Cf
					}) === r.Rd
				},
				g = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: i.f,
						experimentName: r.Gf
					})
				},
				v = (e, t) => !!(e => !!e.match(u))(t) && (g(e) === r.Wf.Enabled || g(e) === r.Wf.HardReload),
				j = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: i.e,
						experimentName: r.Jf
					})
				},
				S = (e, t) => !!(e => !!e.match(u))(t) && j(e) === r.Wf.Enabled
		},
		"./src/reddit/selectors/experiments/shredditParity.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return b
			}));
			var r = n("./src/reddit/helpers/installGoodVisitFeedSearchTracker/index.ts"),
				s = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/selectors/user.ts"),
				c = n("./src/reddit/selectors/experiments/shredditMigration.ts"),
				o = n("./src/reddit/constants/experiments.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				d = n("./src/reddit/selectors/experiments/index.ts");
			const l = e => {
					return /^(?:\/r\/[^\/]+)?\/search\/?$/i.test(e) || /^\/u(?:ser)?\/[^\/]+\/m\/[^\/]+\/search\/?$/i.test(e)
				},
				u = (e, t) => {
					if (!l(t)) return !1;
					const n = (e => {
						return Object(a.c)(e, {
							experimentEligibilitySelector: d.e,
							experimentName: o.Bf
						})
					})(e);
					return n === o.Wf.Enabled || n === o.Wf.HardReload
				},
				m = Object(s.a)(i.S, e => !e),
				b = (e, t) => {
					const n = t();
					e.block(e => {
						let t = !1;
						if (Object(i.S)(n)) {
							const r = Object(c.h)(n, e.pathname),
								s = Object(c.b)(n, e.pathname);
							(r || s) && (t = !0)
						} else {
							const r = (e => !!e.match(/^\/(?:r\/[^\/]+\/)?comments\/([a-z0-9]*)/i) || !!e.match(/^\/u(?:ser)?\/[^/]+\/comments\/[a-z0-9]+/i))(e.pathname),
								s = Object(c.c)(n, e.pathname),
								i = Object(c.f)(n, e.pathname),
								o = Object(c.d)(n, e.pathname),
								a = Object(c.e)(n, e.pathname),
								m = ((e, t) => l(t) && Object(d.f)(e))(n, e.pathname),
								b = u(n, e.pathname),
								p = Object(c.g)(n, e.pathname);
							(s || r || i || o || a || m || b || p) && (t = !0)
						}
						if (t) {
							const t = e.pathname + e.search;
							return Object(r.f)(n), window.location.href = t, !1
						}
					})
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Multireddit.ea30d399f763a63599da.js.map