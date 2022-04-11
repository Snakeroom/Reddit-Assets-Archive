// https://www.redditstatic.com/desktop2x/ModerationDropdowns.6199cae57a9afd84c2cf.js
// Retrieved at 4/11/2022, 4:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModerationDropdowns"], {
		"./src/reddit/actions/economics/predictions/modTools.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "d", (function() {
				return x
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/actions/economics/predictions/index.ts"),
				r = n("./src/reddit/reducers/features/predictions/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/constants/modals.ts"),
				d = n("./src/reddit/models/Toast/index.ts");
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			Object(s.a)({
				features: {
					predictions: r.a
				}
			});
			const m = e => {
				let {
					postId: t,
					closedAt: n
				} = e;
				return async e => {
					try {
						await e(Object(o.d)(t, {
							closedAt: n
						})), e(Object(i.f)({
							duration: i.a,
							kind: d.b.SuccessCommunity,
							text: l._("Updated", null, {
								hk: "4cncaA"
							})
						}))
					} catch {
						(e => e(Object(i.f)({
							duration: i.a,
							kind: d.b.Error,
							text: l._("Error: Failed to update prediction end time, please try again later", null, {
								hk: "MkaNA"
							})
						})))(e)
					}
				}
			};

			function p(e, t) {
				return async n => {
					try {
						await n(Object(o.d)(e, {
							resolvedOptionId: t
						}));
						const s = Object(i.e)(l._("Outcome changed", null, {
							hk: "Io0na"
						}), d.b.SuccessMod);
						n(Object(i.f)(s))
					} catch {
						const e = Object(i.e)(l._("Oops! Something went wrong. Please note that the outcome can be changed just once per Prediction", null, {
							hk: "4B5dNf"
						}), d.b.Error);
						n(Object(i.f)(e))
					}
				}
			}
			const u = e => Object(a.h)(c.a.ECON_PREDICTIONS_CHANGE_END_TIME, {
					postId: e
				}),
				b = e => Object(a.h)(c.a.ECON_PREDICTIONS_CANCEL_PREDICTION, {
					postId: e
				}),
				x = e => Object(a.h)(c.a.ECON_PREDICTIONS_CHANGE_OUTCOME, {
					postId: e
				})
		},
		"./src/reddit/components/BadgeCounter/index.m.less": function(e, t, n) {
			e.exports = {
				badgeCounter: "_1-nIsCaWhGBFN-L4ZHnbGp",
				mEmpty: "_3FX9lCQKNdKXkfBiSWCjSb"
			}
		},
		"./src/reddit/components/BadgeCounter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/components/BadgeCounter/index.m.less"),
				c = n.n(i);
			t.a = e => {
				let {
					className: t,
					isActive: n,
					showEmpty: s,
					unreadCount: i
				} = e;
				return n ? o.a.createElement("span", {
					className: Object(r.a)(t, c.a.badgeCounter, {
						[c.a.mEmpty]: s || i < 1
					})
				}, s || i < 1 ? "" : Object(a.b)(i)) : null
			}
		},
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				o = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				r = e => (e.numReports || 0) > 0
		},
		"./src/reddit/components/ModToolsFlatlist/breakpoints.m.less": function(e, t, n) {
			e.exports = {
				HideIfVWSmaller: "_3_rOJpfw54EqNa6daNkKzY",
				hideIfVwSmaller: "_3_rOJpfw54EqNa6daNkKzY",
				ApproveGroup: "LoIAKSBD5_isA5qtrC3Kt",
				approveGroup: "LoIAKSBD5_isA5qtrC3Kt",
				DefaultVariant: "_1LDTBaBSnv4jL7lV98ayQL",
				defaultVariant: "_1LDTBaBSnv4jL7lV98ayQL",
				CompactVariant: "_2SLG9GIeu2AqBhz2XpW8ow",
				compactVariant: "_2SLG9GIeu2AqBhz2XpW8ow",
				ClassicVariant: "_1u3Z1cqZ8_083AStFVo71a",
				classicVariant: "_1u3Z1cqZ8_083AStFVo71a",
				RemoveGroup: "_3LzZxt89CjBbx__WYlCPCh",
				removeGroup: "_3LzZxt89CjBbx__WYlCPCh",
				SpamGroup: "_2WaHNFliLea9SKyF3nlBx8",
				spamGroup: "_2WaHNFliLea9SKyF3nlBx8",
				FlairGroup: "_129dedXMiIcel_grUelwoG",
				flairGroup: "_129dedXMiIcel_grUelwoG",
				HideIfVWLarger: "_1RO0TIeDG89QPdOWgZwUvR",
				hideIfVwLarger: "_1RO0TIeDG89QPdOWgZwUvR",
				ButtonTextWrapper: "_2xZQ73fYkUDMcVkB0PnaU9",
				buttonTextWrapper: "_2xZQ73fYkUDMcVkB0PnaU9"
			}
		},
		"./src/reddit/components/ModToolsFlatlist/constants.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.Flair = "FLAIR", e.Spam = "SPAM", e.Remove = "REMOVE", e.Approve = "APPROVE"
				}(s || (s = {}))
		},
		"./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return f
			}));
			var s, o, r, a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				c = n("./src/reddit/constants/postLayout.ts"),
				d = n("./src/reddit/components/ModToolsFlatlist/breakpoints.m.less"),
				l = n.n(d),
				m = n("./src/reddit/components/ModToolsFlatlist/index.m.less"),
				p = n.n(m);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(s || (s = {})),
			function(e) {
				e.Approve = "ApproveGroup", e.Remove = "RemoveGroup", e.Spam = "SpamGroup", e.Flair = "FlairGroup"
			}(o || (o = {})),
			function(e) {
				e.Classic = "ClassicVariant", e.Compact = "CompactVariant", e.Default = "DefaultVariant"
			}(r || (r = {}));
			const u = {
					[i.a.Approve]: o.Approve,
					[i.a.Remove]: o.Remove,
					[i.a.Spam]: o.Spam,
					[i.a.Flair]: o.Flair
				},
				b = {
					[c.g.Classic]: r.Classic,
					[c.g.Compact]: r.Compact,
					[c.g.Large]: r.Default,
					[c.g.Medium]: r.Default,
					[c.g.Search]: r.Default
				},
				x = e => {
					const t = u[e.flatlistItem],
						n = e.postLayout && b[e.postLayout],
						s = l.a[e.breakpointType],
						o = l.a[t],
						i = n ? l.a[n] : l.a[r.Default];
					return Object(a.a)(s, o, i)
				},
				f = e => {
					const t = e && b[e],
						n = t ? l.a[t] : l.a[r.Default];
					return Object(a.a)(n, p.a.ButtonTextWrapper, l.a.ButtonTextWrapper)
				}
		},
		"./src/reddit/components/ModToolsFlatlist/index.m.less": function(e, t, n) {
			e.exports = {
				container: "OccjSdFd6HkHhShRg6DOl",
				tooltip: "_2a9swcTo72vLia4mUm08Fk",
				ButtonTextWrapper: "_3kA8j4bWXyfQV-T-H2dkNq",
				buttonTextWrapper: "_3kA8j4bWXyfQV-T-H2dkNq"
			}
		},
		"./src/reddit/components/ModerationDropdown/_ModerationDropdown.m.less": function(e, t, n) {
			e.exports = {
				StyledDropdown: "_3WeRItzSNTP8PlJhYPlcOV",
				styledDropdown: "_3WeRItzSNTP8PlJhYPlcOV",
				Separator: "_25jFfk04fRizfTaV4T8_fC",
				separator: "_25jFfk04fRizfTaV4T8_fC",
				IconWrapper: "_3sg-oQTG-KtWNGZEzdlnV9",
				iconWrapper: "_3sg-oQTG-KtWNGZEzdlnV9",
				BadgeCounter: "O2gjjKs4ae_nDFlxL3cbh",
				badgeCounter: "O2gjjKs4ae_nDFlxL3cbh"
			}
		},
		"./src/reddit/components/ModerationDropdown/_ModerationDropdown.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "default", (function() {
				return k
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/higherOrderComponents/asTooltip.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/BadgeCounter/index.tsx"),
				l = n("./src/reddit/controls/Dropdown/index.tsx"),
				m = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				p = n("./src/reddit/icons/fonts/index.tsx"),
				u = n("./src/reddit/components/ModerationDropdown/index.tsx"),
				b = n("./src/reddit/components/ModerationDropdown/_ModerationDropdown.m.less"),
				x = n.n(b);
			const f = c.a.wrapped(l.a, "StyledDropdown", x.a),
				h = Object(a.a)(f),
				_ = c.a.div("Separator", x.a),
				O = (e, t) => n => r.a.createElement("span", {
					className: Object(i.a)(x.a.IconWrapper, n.className)
				}, r.a.createElement(d.a, {
					className: x.a.BadgeCounter,
					isActive: t,
					unreadCount: -1,
					showEmpty: !0
				}), r.a.createElement(p.a, {
					name: e
				}));

			function k(e) {
				const {
					className: t,
					unreadNotifications: n,
					isOpen: o,
					sendEventWithName: a
				} = e, i = Object(m.c)(Object(p.b)("mod_queue"), `${s.fbt._("Mod Queue",null,{hk:"2fqLkD"})}`), c = Object(m.b)(O("message", n.hasUnreadModmail), `${s.fbt._("Modmail",null,{hk:"1IvnFd"})}`);
				return r.a.createElement("div", {
					className: t
				}, r.a.createElement(h, {
					isFixed: !0,
					isOpen: o,
					tooltipId: u.a
				}, r.a.createElement(i, {
					href: "/r/mod/about/modqueue",
					onClick: () => a("mod_queue")
				}), r.a.createElement(_, null), r.a.createElement(c, {
					href: "https://mod.reddit.com/mail/all",
					isLit: n.hasUnreadModmail,
					onClick: () => a("mod_mail")
				}), r.a.createElement(_, null)))
			}
		},
		"./src/reddit/components/ModerationDropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				o = n("./src/lib/loadWithRetries/index.ts");
			const r = "Header--Moderation",
				a = () => null;
			t.b = Object(s.a)({
				ErrorComponent: a,
				getComponent: () => Object(o.a)(() => n.e("ModerationDropdowns").then(n.bind(null, "./src/reddit/components/ModerationDropdown/_ModerationDropdown.tsx"))).then(e => e.default),
				LoadingComponent: a
			})
		},
		"./src/reddit/components/PostFlairPicker/index.m.less": function(e, t, n) {
			e.exports = {
				buttonsRow: "cF9DU_4WDAKS4gs43ct2_",
				clearButton: "_3vB6Y9PiwJ0YV6c9MGbDwT"
			}
		},
		"./src/reddit/components/PostFlairPicker/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return j
			}));
			var s, o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/higherOrderComponents/asModal/index.tsx"),
				m = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				u = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				b = n("./src/reddit/components/FlairPreview/index.tsx"),
				x = n("./src/reddit/components/FlairSearch/index.tsx"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/helpers/trackers/postComposer.ts"),
				_ = n("./src/reddit/models/Flair/index.ts"),
				O = n("./src/reddit/selectors/postFlair.ts"),
				k = n("./src/reddit/selectors/subreddit.ts"),
				C = n("./src/reddit/components/PostFlairPicker/helpers.ts"),
				E = n("./src/reddit/components/PostFlairPicker/index.m.less"),
				v = n.n(E);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(s || (s = {}));
			const j = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.UNSET;
					return `PostFlair__Modal-[postId: ${e}]-isOverlay[${t}]-position[${n}]`
				},
				M = Object(c.c)({
					flairData: O.d,
					subreddit: k.S
				});
			class w extends a.a.Component {
				constructor(e) {
					super(e), this.trackEvent = () => {
						this.props.sendEvent(Object(h.F)(this.props.subredditId))
					}, this.onApply = () => {
						const {
							previewFlair: e
						} = this.state, t = e && e.templateId;
						this.props.onFlairChanged({
							previewFlair: e,
							selectedTemplateId: t
						}), this.props.closeModal && this.props.closeModal(), this.trackEvent()
					}, this.onClear = () => {
						this.props.sendEvent(Object(h.b)()), this.setSelectedFlair(null)
					}, this.setSelectedFlair = e => {
						this.setState({
							previewFlair: e
						})
					};
					const t = Object(C.c)(e.flairs);
					this.state = {
						previewFlair: t || null
					}
				}
				canSave() {
					const {
						templates: e
					} = this.props.flairData, {
						previewFlair: t
					} = this.state, n = Object(C.c)(this.props.flairs) || null;
					return Object(C.b)(e, t, n)
				}
				render() {
					const {
						props: e
					} = this, {
						previewFlair: t
					} = this.state, {
						className: n,
						flairData: s,
						subreddit: r
					} = e, i = r.displayText, {
						templates: c,
						templateIds: d
					} = s, {
						canSave: l
					} = this.canSave();
					return a.a.createElement(u.a, {
						className: n
					}, a.a.createElement(p.a, {
						onClosePressed: e.closeModal,
						title: o.fbt._("Select {subredditName} flair", [o.fbt._param("subredditName", i)], {
							hk: "1lDMWS"
						})
					}), a.a.createElement(b.a, {
						flair: t,
						flairTemplateType: _.d.LinkFlair,
						placeholderText: o.fbt._("Post Title", null, {
							hk: "43RsbC"
						})
					}), a.a.createElement(x.a, {
						flair: t,
						flairTemplateType: _.d.LinkFlair,
						subredditId: r.id,
						templates: c,
						templateIds: d,
						onChange: this.setSelectedFlair
					}), a.a.createElement("div", {
						className: v.a.buttonsRow
					}, a.a.createElement(f.l, {
						disabled: !l,
						onClick: this.onApply
					}, o.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), a.a.createElement(f.o, {
						className: v.a.clearButton,
						onClick: this.onClear
					}, o.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const P = Object(i.b)(M, (e, t) => ({
				closeModal: () => e(Object(m.i)(t.modalId))
			}))(w);
			t.a = Object(l.a)(Object(d.c)(P))
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less": function(e, t, n) {
			e.exports = {
				ListContainer: "VHCAEHBEuD8bln8MDFl35",
				listContainer: "VHCAEHBEuD8bln8MDFl35",
				Icon: "_3WbGqnEpw_ds1P508Qawma",
				icon: "_3WbGqnEpw_ds1P508Qawma",
				DropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				dropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				text: "_1llB9GXV3OPp_55xrtgYNh",
				svgIcon: "_2mkCGM7pDFARBtuKmKCBf0"
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "i", (function() {
				return k
			})), n.d(t, "j", (function() {
				return C
			})), n.d(t, "k", (function() {
				return E
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "b", (function() {
				return j
			})), n.d(t, "c", (function() {
				return M
			})), n.d(t, "e", (function() {
				return w
			})), n.d(t, "g", (function() {
				return P
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/Dropdown/Row.tsx"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				d = n("./src/reddit/icons/fonts/Envelope/index.tsx"),
				l = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				m = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				p = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				u = n("./src/reddit/icons/fonts/Tag/index.tsx"),
				b = n("./src/reddit/icons/svgs/CircleCheckLight/index.tsx"),
				x = n("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				f = n.n(x);
			const h = r.a.wrapped(c.a, "Icon", f.a),
				_ = r.a.wrapped(d.a, "Icon", f.a),
				O = r.a.wrapped(l.a, "Icon", f.a),
				k = r.a.wrapped(m.a, "Icon", f.a),
				C = r.a.wrapped(p.a, "Icon", f.a),
				E = r.a.wrapped(u.a, "Icon", f.a),
				v = () => o.a.createElement(i.a, {
					name: "mod_mute",
					className: f.a.Icon
				}),
				j = () => o.a.createElement(i.a, {
					name: "calendar",
					className: f.a.Icon
				}),
				M = () => o.a.createElement(b.a, {
					className: f.a.svgIcon
				}),
				w = r.a.wrapped(a.b, "DropdownRow", f.a),
				P = r.a.div("ListContainer", f.a)
		},
		"./src/reddit/components/PostModModeDropdown/_PostModModeDropdown.m.less": function(e, t, n) {
			e.exports = {
				dropdown: "_1DqDpxxERz4UiuumI26tIZ"
			}
		},
		"./src/reddit/components/PostModModeDropdown/_PostModModeDropdown.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/actions/economics/predictions/modTools.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/actions/postFlair.ts"),
				p = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = n("./src/reddit/components/PostFlairPicker/index.tsx"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				x = n("./src/reddit/constants/modals.ts"),
				f = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/controls/Dropdown/index.tsx"),
				_ = n("./src/reddit/featureFlags/index.ts"),
				O = n("./src/reddit/helpers/trackers/modTools.ts"),
				k = n("./src/reddit/helpers/trackers/predictionsModTools.ts"),
				C = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				E = n("./src/reddit/selectors/tooltip.ts"),
				v = n("./node_modules/fbt/lib/FbtPublic.js"),
				j = n("./src/reddit/components/ModModeReports/helpers.ts"),
				M = n("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				w = n("./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts"),
				P = n("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				g = n("./src/reddit/helpers/isCrosspost.ts"),
				N = n("./src/reddit/models/Flair/index.ts"),
				D = n("./src/reddit/models/Prediction/index.ts"),
				y = n("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx"),
				S = n("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				I = n.n(S);
			const L = (e, t) => Object(w.b)({
					breakpointType: w.a.HideIfVWLarger,
					flatlistItem: e,
					postLayout: t
				}),
				F = () => void 0,
				T = e => {
					let {
						canEditFlair: t,
						hasModFullPerms: n,
						hasModPostPerms: s,
						isDistinguished: r,
						isModToMemberShareEnabled: a,
						isOverlay: i,
						isPostAuthor: c,
						isProfilePage: d,
						layout: l,
						modModeEnabled: m,
						onApprovePost: p,
						onCancelPrediction: u,
						onChangePredictionOutcome: b,
						onEditPredictionEnd: x,
						onDistinguishPost: f,
						onFlairPost: h,
						onLockPost: _,
						onNsfwPost: O,
						onOcPost: k,
						onCcPost: E,
						onRemovePost: w,
						onModToMemberShareOpened: S,
						onSpamPost: T,
						onStickyPost: R,
						onSpoilerPost: A,
						post: W
					} = e;
					var B, H, G, V, U;
					const K = (null === (B = W.pollData) || void 0 === B ? void 0 : B.isPrediction) && !(null === (H = W.pollData) || void 0 === H ? void 0 : H.resolvedOptionId),
						Q = (null === (G = W.pollData) || void 0 === G ? void 0 : G.isPrediction) && null !== W.pollData.resolvedOptionId,
						Z = W.flair.filter(e => e.type !== N.f.Nsfw && e.type !== N.f.Spoiler).length > 0,
						q = Object(j.b)(W),
						z = !(!W.approvedBy || !q),
						Y = i ? void 0 : l,
						J = Object(g.a)(W),
						X = m ? L : F;
					return o.a.createElement(y.g, null, s && o.a.createElement(o.a.Fragment, null, !W.isSponsored && o.a.createElement(o.a.Fragment, null, o.a.createElement(y.e, {
						className: X(M.a.Approve, Y),
						displayText: z ? v.fbt._("Reapprove", null, {
							hk: "39rQqr"
						}) : W.approvedBy ? v.fbt._("Approved", null, {
							hk: "1j7d8E"
						}) : v.fbt._("Approve", null, {
							hk: "29dW3F"
						}),
						onClick: p
					}, o.a.createElement(y.a, null)), o.a.createElement(y.e, {
						className: X(M.a.Remove, Y),
						displayText: W.isRemoved ? v.fbt._("Removed", null, {
							hk: "3rSb2M"
						}) : v.fbt._("Remove", null, {
							hk: "dflNO"
						}),
						onClick: w
					}, o.a.createElement(y.i, null)), o.a.createElement(y.e, {
						className: X(M.a.Spam, Y),
						displayText: W.isSpam ? v.fbt._("Removed as spam", null, {
							hk: "2olZT7"
						}) : v.fbt._("Remove as spam", null, {
							hk: "4A9ZT8"
						}),
						onClick: T
					}, o.a.createElement(y.j, null))), t && o.a.createElement(y.e, {
						className: X(M.a.Flair, Y),
						displayText: Z ? v.fbt._("Edit post flair", null, {
							hk: "2oet1"
						}) : v.fbt._("Add post flair", null, {
							hk: "1iPNLQ"
						}),
						onClick: h
					}, o.a.createElement(y.k, null))), a && n && o.a.createElement(y.e, {
						displayText: v.fbt._("Share with members", null, {
							hk: "2XMBQE"
						}),
						onClick: S
					}, o.a.createElement(y.f, null)), !W.isRemoved && !d && o.a.createElement(P.a, {
						isSelected: W.isStickied,
						onClick: R,
						text: v.fbt._("Sticky post", null, {
							hk: "3uXoIh"
						})
					}), Object(C.b)(W) && o.a.createElement(y.e, {
						disabled: Boolean((null === (V = W.pollData) || void 0 === V ? void 0 : V.resolvedOptionId) || (null === (U = W.pollData) || void 0 === U ? void 0 : U.predictionStatus) === D.b.Cancelled),
						displayText: v.fbt._("Cancel Prediction", null, {
							hk: "hgWFW"
						}),
						onClick: u
					}, o.a.createElement(y.i, null)), K && o.a.createElement(y.e, {
						displayText: v.fbt._("Update the end date", null, {
							hk: "FjDpu"
						}),
						onClick: x
					}, o.a.createElement(y.b, null)), Q && o.a.createElement(y.e, {
						textClassName: I.a.text,
						onClick: b,
						displayText: v.fbt._("Change the outcome", null, {
							hk: "2FH6j9"
						})
					}, o.a.createElement(y.c, null)), c && o.a.createElement(P.a, {
						isSelected: r,
						onClick: f,
						text: v.fbt._("Distinguish as Mod", null, {
							hk: "3cCdJd"
						})
					}), o.a.createElement(P.a, {
						isSelected: W.isLocked,
						onClick: _,
						text: v.fbt._("Lock comments", null, {
							hk: "YAV8n"
						})
					}), !J && o.a.createElement(P.a, {
						isSelected: W.isOriginalContent,
						onClick: k,
						text: v.fbt._("Mark as OC", null, {
							hk: "4yx2EO"
						})
					}), o.a.createElement(P.a, {
						isSelected: W.isNSFW,
						onClick: O,
						text: v.fbt._("Mark as NSFW", null, {
							hk: "8QQ2f"
						})
					}), n && "subreddit" === W.belongsTo.type && o.a.createElement(y.e, {
						displayText: v.fbt._("Adjust crowd control", null, {
							hk: "4Drg85"
						}),
						onClick: E
					}, o.a.createElement(y.d, null)), o.a.createElement(P.a, {
						isSelected: W.isSpoiler,
						onClick: A,
						text: v.fbt._("Mark as spoiler", null, {
							hk: "3ef0MU"
						})
					}))
				};
			var R = n("./src/reddit/components/PostModModeDropdown/_PostModModeDropdown.m.less"),
				A = n.n(R);
			const W = Object(f.u)({
					isProfilePage: f.J,
					pageLayer: e => e
				}),
				B = Object(a.c)({
					layout: f.R,
					isDropdownOpen: (e, t) => {
						let {
							tooltipId: n
						} = t;
						return Object(E.b)(n)(e)
					},
					isModToMemberShareEnabled: _.d.modToMemberShare
				}),
				H = Object(r.b)(B, (e, t) => {
					let {
						post: n
					} = t;
					return {
						onApprovePost: () => e(Object(l.s)(n.id)),
						onCancelPrediction: () => e(Object(c.c)(n.id)),
						onChangePredictionOutcome: () => e(Object(c.d)(n.id)),
						onEditPredictionEnd: () => e(Object(c.e)(n.id)),
						onDistinguishPost: t => e(Object(l.v)(n.id, t)),
						onFlairChanged: (t, s) => e(Object(m.h)({
							post: n,
							previewFlair: t,
							selectedTemplateId: s
						})),
						onFlairPost: t => e(Object(d.i)(t)),
						onLockPost: () => e(Object(l.E)(n.id)),
						onNsfwPost: () => e(Object(l.G)(n.id)),
						onOcPost: () => e(Object(l.J)(n.id)),
						onCcPost: () => {
							e(Object(d.i)(x.a.CROWD_CONTROL)), e(Object(l.u)(n.id))
						},
						onRemovePost: () => e(Object(l.U)(n.id, !1)),
						onModToMemberShareOpened: () => {
							e(Object(d.i)(x.a.MOD_TO_MEMBER_SHARE)), e(Object(l.F)(n.id))
						},
						onSpamPost: () => e(Object(l.U)(n.id, !0)),
						onSpoilerPost: () => e(Object(l.eb)(n.id)),
						onStickyPost: () => e(Object(l.ib)(n.id))
					}
				}),
				G = Object(p.a)(h.a);
			t.default = W(H(Object(b.c)(e => {
				let {
					canEditFlair: t,
					hasModFullPerms: n,
					hasModPostPerms: s,
					isDropdownOpen: r,
					isModToMemberShareEnabled: a,
					isOverlay: c,
					isPostAuthor: d,
					isProfilePage: l,
					layout: m,
					modModeEnabled: p,
					onApprovePost: b,
					onCancelPrediction: x,
					onChangePredictionOutcome: f,
					onEditPredictionEnd: h,
					onDistinguishPost: _,
					onFlairPost: E,
					onLockPost: v,
					onNsfwPost: j,
					onOcPost: M,
					onCcPost: w,
					onRemovePost: P,
					onModToMemberShareOpened: g,
					onSpamPost: N,
					onSpoilerPost: D,
					onStickyPost: y,
					post: S,
					sendEvent: I,
					tooltipId: L
				} = e;
				const F = S.distinguishType === i.G.MODERATOR,
					R = F ? i.G.NONE : i.G.MODERATOR,
					W = Object(u.b)(S.id, c);
				return o.a.createElement(G, {
					className: A.a.dropdown,
					isOpen: r,
					tooltipId: L
				}, o.a.createElement(T, {
					canEditFlair: t,
					hasModFullPerms: n,
					hasModPostPerms: s,
					isDistinguished: F,
					isModToMemberShareEnabled: a,
					isOverlay: c,
					isPostAuthor: d,
					isProfilePage: l,
					layout: m,
					modModeEnabled: p,
					onApprovePost: () => {
						b(), I(Object(O.j)("approve", S.id))
					},
					onCancelPrediction: () => {
						x(), I(Object(k.a)(S.id))
					},
					onChangePredictionOutcome: () => {
						f(), I(Object(k.b)(S.id))
					},
					onEditPredictionEnd: () => {
						h(), I(Object(k.c)(S.id))
					},
					onRemovePost: () => {
						P(), Object(C.b)(S) ? I(Object(k.d)(S.id)) : I(Object(O.j)("remove", S.id))
					},
					onSpamPost: () => {
						N(), I(Object(O.j)("spam", S.id))
					},
					onDistinguishPost: () => {
						_(R), I(Object(O.j)(F ? "undistinguish" : "distinguish", S.id))
					},
					onFlairPost: () => {
						E(W), I(Object(O.j)("post_flair", S.id))
					},
					onLockPost: () => {
						v(), I(Object(O.j)(S.isLocked ? "unlock" : "lock", S.id))
					},
					onNsfwPost: () => {
						j(), I(Object(O.j)(S.isNSFW ? "unmark_nsfw" : "mark_nsfw", S.id))
					},
					onOcPost: () => {
						M(), I(Object(O.j)(S.isOriginalContent ? "unmark_original_content" : "mark_original_content", S.id))
					},
					onCcPost: () => {
						w()
					},
					onModToMemberShareOpened: () => {
						g(), I(Object(O.j)("mod_to_member_share", S.id))
					},
					onSpoilerPost: () => {
						D(), I(Object(O.j)(S.isSpoiler ? "unmark_spoiler" : "mark_spoiler", S.id))
					},
					onStickyPost: () => {
						y(), I(Object(O.j)(S.isStickied ? "unsticky" : "sticky", S.id))
					},
					post: S
				}))
			})))
		},
		"./src/reddit/controls/CheckboxMenuItem/index.m.less": function(e, t, n) {
			e.exports = {
				checkboxIcon: "_3Ebr0mkLD0A7HiowzExNW-",
				checkboxMenuItem: "_2eawLPCtwzvTZhWKtaUgZQ",
				expandRight: "_34Odk7t6y-rCPxPcYJa4Nw",
				postCheckboxMenuItem: "_3LyKu57c-QkPvlFvAgWop5"
			}
		},
		"./src/reddit/controls/CheckboxMenuItem/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/index.tsx"),
				i = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				c = n("./src/reddit/controls/CheckboxMenuItem/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = e => o.a.createElement("div", {
					className: Object(r.a)(d.a.checkboxMenuItem, e.className),
					onClick: e.onClick
				}, o.a.createElement(i.a, {
					className: d.a.expandRight
				}, o.a.createElement(a.a, {
					name: "checkbox",
					isFilled: e.isSelected,
					className: d.a.checkboxIcon
				}), e.text)),
				p = e => {
					let {
						className: t,
						...n
					} = e;
					return o.a.createElement(m, l({
						className: Object(r.a)(d.a.postCheckboxMenuItem, t)
					}, n))
				}
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/index.m.less"),
				u = n.n(p),
				b = n("./src/reddit/controls/Dropdown/row.m.less"),
				x = n.n(b);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class h extends a.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = o()(() => {
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
					}, n = Object(i.a)(x.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? a.a.createElement(c.a, f({}, t, {
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
					}), e.children && a.a.createElement("span", {
						className: n
					}, e.children), a.a.createElement("span", {
						className: Object(i.a)(x.a.text, e.textClassName)
					}, e.displayText)) : a.a.createElement(m.a, f({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: o()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? a.a.createElement("div", null, e.children) : a.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && a.a.createElement("span", {
						className: Object(i.a)(x.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && a.a.createElement(l.a, {
						className: x.a.checkmark
					}), e.showDropdownTriangle && a.a.createElement(d.a, {
						className: u.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				let {
					className: t,
					...n
				} = e;
				const s = Object(i.a)(x.a.row, t, {
					[x.a.mIsInteractive]: !n.noHover,
					[x.a.mIsSelected]: n.isSelected,
					[x.a.topics]: n.isTopicsStyle
				});
				return a.a.createElement(h, f({
					className: s
				}, n))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				modNotes: "sK8_uuNiAqPNlw-HoD2HG",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/InternalLink/index.tsx"),
				r = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				a = n.n(r);
			t.a = s.a.wrapped(o.a, "unstyledInternalLink", a.a)
		},
		"./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less": function(e, t, n) {
			e.exports = {
				basicLink: "_1YWXCINvcuU7nk0ED-bta8",
				metaContainer: "_1HGeWoy6faY2UWkCD7cYoW",
				outboundLink: "_1Jtes5zRWNpwobWM4O2Unx",
				button: "_2KotRmn9DgdA58Ikji2mnV",
				headingContent: "vLtBjS_8SMsuZByMrcgJH",
				icon: "_2BQPq3iyS8t6kKtFmtkB30",
				isLit: "_3RofgwJEAbXD6OnLxEZ8Kg",
				body: "vzhy90YD0qH7ZDJi7xMGw"
			}
		},
		"./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "c", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				d = n.n(c);
			const l = i.a.button("button", d.a),
				m = e => t => o.a.createElement("div", {
					className: t.className
				}, e);

			function p(e, t, n) {
				return b(e, t, !0, {
					...n
				})
			}

			function u(e, t, n) {
				return b(e, t, !1, {
					...n
				})
			}

			function b(e, t, n, s) {
				const i = e,
					c = "function" == typeof t ? t : m(t),
					{
						meta: l
					} = s,
					p = e => o.a.createElement(o.a.Fragment, null, o.a.createElement(i, {
						className: Object(a.a)(d.a.icon, {
							[d.a.isLit]: e
						})
					}), o.a.createElement(c, {
						className: d.a.body
					}), l && o.a.createElement("div", {
						className: d.a.metaContainer
					}, l));
				return n ? e => o.a.createElement("a", {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, d.a.basicLink),
					href: e.href,
					onClick: e.onClick,
					target: "_blank",
					rel: "noopener noreferrer"
				}, p(e.isLit)) : e => e.href ? o.a.createElement(r.a, {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, d.a.basicLink),
					to: e.href,
					onClick: e.onClick
				}, p(e.isLit)) : o.a.createElement("button", {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, d.a.button),
					onClick: e.onClick
				}, p(e.isLit))
			}
		},
		"./src/reddit/helpers/trackers/predictionsModTools.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = (e, t) => ({
					...Object(s.n)(e),
					post: Object(s.H)(e, t),
					predictions: Object(s.N)(e, t),
					subreddit: Object(s.gb)(e)
				}),
				r = e => t => ({
					...o(t, e),
					source: "predictions",
					action: "click",
					noun: "edit_prediction_end_dt"
				}),
				a = e => t => ({
					...o(t, e),
					source: "edit_prediction_end_dt",
					action: "click",
					noun: "confirm"
				}),
				i = e => t => ({
					...o(t, e),
					source: "predictions",
					action: "click",
					noun: "cancel_prediction"
				}),
				c = e => t => ({
					...o(t, e),
					source: "predictions",
					action: "click",
					noun: "remove_post"
				}),
				d = e => t => ({
					...o(t, e),
					source: "predictions",
					action: "click",
					noun: "prediction_change_outcome"
				}),
				l = e => t => ({
					...o(t, e),
					source: "prediction_change_outcome",
					action: "click",
					noun: "confirm"
				})
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("approve", e.isFilled), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("message",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("lock", e.isFilled), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("remove", e.isFilled), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("spam", e.isFilled), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Tag/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("tag",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, n) {},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/CircleCheckLight/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			const r = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M18.04 7.67457C18.5905 9.55741 18.4654 11.5734 17.6865 13.3738C16.9076 15.1742 15.5238 16.6457 13.7746 17.5336C12.0254 18.4215 10.0209 18.67 8.1078 18.2362C6.19473 17.8023 4.49351 16.7133 3.29851 15.1576C2.10351 13.602 1.48992 11.6775 1.5639 9.71728C1.63788 7.75702 2.39478 5.88429 3.70364 4.42313C5.01249 2.96197 6.79095 2.00431 8.73128 1.71586C10.6716 1.42742 12.6517 1.82633 14.329 2.84357L15.189 1.90557C13.2556 0.658893 10.9412 0.141738 8.661 0.446834C6.38077 0.75193 4.2838 1.85932 2.74608 3.57044C1.20837 5.28156 0.330485 7.4845 0.269845 9.78425C0.209205 12.084 0.969774 14.3301 2.41518 16.1199C3.86058 17.9097 5.89628 19.1261 8.15726 19.5509C10.4182 19.9757 12.7566 19.5813 14.7531 18.4382C16.7496 17.2952 18.2736 15.4783 19.0519 13.3134C19.8301 11.1485 19.8118 8.77715 19 6.62457L18.04 7.67457Z",
				fill: "inherit"
			}), o.a.createElement("path", {
				d: "M9.99503 12.6426C9.91293 12.6427 9.83162 12.6266 9.75577 12.5952C9.67991 12.5638 9.61101 12.5177 9.55303 12.4596L5.54703 8.45257L6.43203 7.56957L9.97603 11.1146L19.013 1.24657L19.935 2.08957L10.456 12.4396C10.3989 12.5013 10.3298 12.5509 10.253 12.5852C10.1762 12.6196 10.0932 12.6381 10.009 12.6396L9.99503 12.6426Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, n) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				c = n.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(r.a)(e => {
				const {
					className: t,
					children: n,
					heightLeft: s,
					widthLeft: r,
					gutter: i,
					...l
				} = e;
				return o.a.createElement("div", d({
					className: Object(a.a)(c.a.expandRightContainer, t)
				}, l), o.a.createElement("div", {
					className: c.a.left,
					style: {
						flexBasis: r,
						height: s,
						marginRight: i
					}
				}, Array.isArray(n) && n[0]), o.a.createElement("div", {
					className: c.a.right
				}, Array.isArray(n) && n[1]))
			}, 2)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModerationDropdowns.6199cae57a9afd84c2cf.js.map