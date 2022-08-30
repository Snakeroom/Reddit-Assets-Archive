// https://www.redditstatic.com/desktop2x/ModerationDropdowns.722fd3d7b49b2d5229bb.js
// Retrieved at 8/30/2022, 3:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModerationDropdowns"], {
		"./src/devPlatform/singleton/constants.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return n
			})), o.d(t, "c", (function() {
				return s
			})), o.d(t, "d", (function() {
				return r
			})), o.d(t, "a", (function() {
				return i
			}));
			const n = "devvit-gateway-url",
				s = "devvit-mock-metadata",
				r = "devvit-debug-logging";
			var i;
			! function(e) {
				e[e.POST = 0] = "POST", e[e.COMMENT = 1] = "COMMENT", e[e.SUBREDDIT = 2] = "SUBREDDIT", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
			}(i || (i = {}))
		},
		"./src/reddit/actions/economics/predictions/modTools.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return m
			})), o.d(t, "b", (function() {
				return p
			})), o.d(t, "e", (function() {
				return u
			})), o.d(t, "c", (function() {
				return b
			})), o.d(t, "d", (function() {
				return f
			}));
			var n = o("./src/lib/initializeClient/installReducer.ts"),
				s = o("./src/reddit/actions/economics/predictions/index.ts"),
				r = o("./src/reddit/reducers/features/predictions/index.ts"),
				i = o("./src/reddit/actions/modal.ts"),
				a = o("./src/reddit/actions/toaster.ts"),
				c = o("./src/reddit/constants/modals.ts"),
				d = o("./src/reddit/models/Toast/index.ts");
			const {
				fbt: l
			} = o("./node_modules/fbt/lib/FbtPublic.js");
			Object(n.a)({
				features: {
					predictions: r.a
				}
			});
			const m = e => {
				let {
					postId: t,
					closedAt: o
				} = e;
				return async e => {
					try {
						await e(Object(s.d)(t, {
							closedAt: o
						})), e(Object(a.f)({
							duration: a.a,
							kind: d.b.SuccessCommunity,
							text: l._("Updated", null, {
								hk: "4cncaA"
							})
						}))
					} catch {
						(e => e(Object(a.f)({
							duration: a.a,
							kind: d.b.Error,
							text: l._("Error: Failed to update prediction end time, please try again later", null, {
								hk: "MkaNA"
							})
						})))(e)
					}
				}
			};

			function p(e, t) {
				return async o => {
					try {
						await o(Object(s.d)(e, {
							resolvedOptionId: t
						}));
						const n = Object(a.e)(l._("Outcome changed", null, {
							hk: "Io0na"
						}), d.b.SuccessMod);
						o(Object(a.f)(n))
					} catch {
						const e = Object(a.e)(l._("Oops! Something went wrong. Please note that the outcome can be changed just once per Prediction", null, {
							hk: "4B5dNf"
						}), d.b.Error);
						o(Object(a.f)(e))
					}
				}
			}
			const u = e => Object(i.h)(c.a.ECON_PREDICTIONS_CHANGE_END_TIME, {
					postId: e
				}),
				b = e => Object(i.h)(c.a.ECON_PREDICTIONS_CANCEL_PREDICTION, {
					postId: e
				}),
				f = e => Object(i.h)(c.a.ECON_PREDICTIONS_CHANGE_OUTCOME, {
					postId: e
				})
		},
		"./src/reddit/components/BadgeCounter/index.m.less": function(e, t, o) {
			e.exports = {
				badgeCounter: "_1-nIsCaWhGBFN-L4ZHnbGp",
				mEmpty: "_3FX9lCQKNdKXkfBiSWCjSb"
			}
		},
		"./src/reddit/components/BadgeCounter/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/lib/prettyPrintNumber/index.ts"),
				a = o("./src/reddit/components/BadgeCounter/index.m.less"),
				c = o.n(a);
			t.a = e => {
				let {
					className: t,
					isActive: o,
					showEmpty: n,
					unreadCount: a
				} = e;
				return o ? s.a.createElement("span", {
					className: Object(r.a)(t, c.a.badgeCounter, {
						[c.a.mEmpty]: n || a < 1
					})
				}, n || a < 1 ? "" : Object(i.b)(a)) : null
			}
		},
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return n
			})), o.d(t, "a", (function() {
				return s
			})), o.d(t, "b", (function() {
				return r
			}));
			const n = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				s = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				r = e => (e.numReports || 0) > 0
		},
		"./src/reddit/components/ModToolsFlatlist/breakpoints.m.less": function(e, t, o) {
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
		"./src/reddit/components/ModToolsFlatlist/constants.ts": function(e, t, o) {
			"use strict";
			var n;
			o.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.Flair = "FLAIR", e.Spam = "SPAM", e.Remove = "REMOVE", e.Approve = "APPROVE"
				}(n || (n = {}))
		},
		"./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return n
			})), o.d(t, "b", (function() {
				return f
			})), o.d(t, "c", (function() {
				return x
			}));
			var n, s, r, i = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				c = o("./src/reddit/constants/postLayout.ts"),
				d = o("./src/reddit/components/ModToolsFlatlist/breakpoints.m.less"),
				l = o.n(d),
				m = o("./src/reddit/components/ModToolsFlatlist/index.m.less"),
				p = o.n(m);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(n || (n = {})),
			function(e) {
				e.Approve = "ApproveGroup", e.Remove = "RemoveGroup", e.Spam = "SpamGroup", e.Flair = "FlairGroup"
			}(s || (s = {})),
			function(e) {
				e.Classic = "ClassicVariant", e.Compact = "CompactVariant", e.Default = "DefaultVariant"
			}(r || (r = {}));
			const u = {
					[a.a.Approve]: s.Approve,
					[a.a.Remove]: s.Remove,
					[a.a.Spam]: s.Spam,
					[a.a.Flair]: s.Flair
				},
				b = {
					[c.g.Classic]: r.Classic,
					[c.g.Compact]: r.Compact,
					[c.g.Large]: r.Default,
					[c.g.Medium]: r.Default,
					[c.g.Search]: r.Default
				},
				f = e => {
					const t = u[e.flatlistItem],
						o = e.postLayout && b[e.postLayout],
						n = l.a[e.breakpointType],
						s = l.a[t],
						a = o ? l.a[o] : l.a[r.Default];
					return Object(i.a)(n, s, a)
				},
				x = e => {
					const t = e && b[e],
						o = t ? l.a[t] : l.a[r.Default];
					return Object(i.a)(o, p.a.ButtonTextWrapper, l.a.ButtonTextWrapper)
				}
		},
		"./src/reddit/components/ModToolsFlatlist/index.m.less": function(e, t, o) {
			e.exports = {
				container: "OccjSdFd6HkHhShRg6DOl",
				tooltip: "_2a9swcTo72vLia4mUm08Fk",
				ButtonTextWrapper: "_3kA8j4bWXyfQV-T-H2dkNq",
				buttonTextWrapper: "_3kA8j4bWXyfQV-T-H2dkNq"
			}
		},
		"./src/reddit/components/ModerationDropdown/_ModerationDropdown.m.less": function(e, t, o) {
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
		"./src/reddit/components/ModerationDropdown/_ModerationDropdown.tsx": function(e, t, o) {
			"use strict";
			o.r(t), o.d(t, "default", (function() {
				return v
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				i = o("./src/higherOrderComponents/asTooltip.tsx"),
				a = o("./src/lib/classNames/index.ts"),
				c = o("./src/lib/lessComponent.tsx"),
				d = o("./src/reddit/components/BadgeCounter/index.tsx"),
				l = o("./src/reddit/controls/Dropdown/index.tsx"),
				m = o("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				p = o("./src/reddit/icons/fonts/index.tsx"),
				u = o("./src/reddit/components/ModerationDropdown/index.tsx"),
				b = o("./src/reddit/components/ModerationDropdown/_ModerationDropdown.m.less"),
				f = o.n(b);
			const x = c.a.wrapped(l.a, "StyledDropdown", f.a),
				h = Object(i.a)(x),
				O = c.a.div("Separator", f.a),
				_ = (e, t) => o => r.a.createElement("span", {
					className: Object(a.a)(f.a.IconWrapper, o.className)
				}, r.a.createElement(d.a, {
					className: f.a.BadgeCounter,
					isActive: t,
					unreadCount: -1,
					showEmpty: !0
				}), r.a.createElement(p.a, {
					name: e
				}));

			function v(e) {
				const {
					className: t,
					unreadNotifications: o,
					isOpen: s,
					sendEventWithName: i
				} = e, a = Object(m.c)(Object(p.b)("mod_queue"), `${n.fbt._("Mod Queue",null,{hk:"2fqLkD"})}`), c = Object(m.b)(_("message", o.hasUnreadModmail), `${n.fbt._("Modmail",null,{hk:"1IvnFd"})}`);
				return r.a.createElement("div", {
					className: t
				}, r.a.createElement(h, {
					isFixed: !0,
					isOpen: s,
					tooltipId: u.a
				}, r.a.createElement(a, {
					href: "/r/mod/about/modqueue",
					onClick: () => i("mod_queue")
				}), r.a.createElement(O, null), r.a.createElement(c, {
					href: "https://mod.reddit.com/mail/all",
					isLit: o.hasUnreadModmail,
					onClick: () => i("mod_mail")
				}), r.a.createElement(O, null)))
			}
		},
		"./src/reddit/components/ModerationDropdown/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return r
			}));
			var n = o("./src/higherOrderComponents/makeAsync.tsx"),
				s = o("./src/lib/loadWithRetries/index.ts");
			const r = "Header--Moderation",
				i = () => null;
			t.b = Object(n.a)({
				ErrorComponent: i,
				getComponent: () => Object(s.a)(() => o.e("ModerationDropdowns").then(o.bind(null, "./src/reddit/components/ModerationDropdown/_ModerationDropdown.tsx"))).then(e => e.default),
				LoadingComponent: i
			})
		},
		"./src/reddit/components/PostFlairPicker/index.m.less": function(e, t, o) {
			e.exports = {
				buttonsRow: "cF9DU_4WDAKS4gs43ct2_",
				clearButton: "_3vB6Y9PiwJ0YV6c9MGbDwT"
			}
		},
		"./src/reddit/components/PostFlairPicker/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return P
			}));
			var n, s = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./node_modules/react/index.js"),
				i = o.n(r),
				a = o("./node_modules/react-redux/es/index.js"),
				c = o("./node_modules/reselect/es/index.js"),
				d = o("./src/reddit/components/TrackingHelper/index.tsx"),
				l = o("./src/higherOrderComponents/asModal/index.tsx"),
				m = o("./src/reddit/actions/modal.ts"),
				p = o("./src/reddit/components/FlairPickerTitle/index.tsx"),
				u = o("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				b = o("./src/reddit/components/FlairPreview/index.tsx"),
				f = o("./src/reddit/components/FlairSearch/index.tsx"),
				x = o("./src/reddit/controls/Button/index.tsx"),
				h = o("./src/reddit/helpers/trackers/postComposer.ts"),
				O = o("./src/reddit/models/Flair/index.ts"),
				_ = o("./src/reddit/selectors/postFlair.ts"),
				v = o("./src/reddit/selectors/subreddit.ts"),
				E = o("./src/reddit/components/PostFlairPicker/helpers.ts"),
				C = o("./src/reddit/components/PostFlairPicker/index.m.less"),
				k = o.n(C);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(n || (n = {}));
			const P = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.UNSET;
					return `PostFlair__Modal-[postId: ${e}]-isOverlay[${t}]-position[${o}]`
				},
				M = Object(c.c)({
					flairData: _.d,
					subreddit: v.V
				});
			class j extends i.a.Component {
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
					const t = Object(E.c)(e.flairs);
					this.state = {
						previewFlair: t || null
					}
				}
				canSave() {
					const {
						templates: e
					} = this.props.flairData, {
						previewFlair: t
					} = this.state, o = Object(E.c)(this.props.flairs) || null;
					return Object(E.b)(e, t, o)
				}
				render() {
					const {
						props: e
					} = this, {
						previewFlair: t
					} = this.state, {
						className: o,
						flairData: n,
						subreddit: r
					} = e, a = r.displayText, {
						templates: c,
						templateIds: d
					} = n, {
						canSave: l
					} = this.canSave();
					return i.a.createElement(u.a, {
						className: o
					}, i.a.createElement(p.a, {
						onClosePressed: e.closeModal,
						title: s.fbt._("Select {subredditName} flair", [s.fbt._param("subredditName", a)], {
							hk: "1lDMWS"
						})
					}), i.a.createElement(b.a, {
						flair: t,
						flairTemplateType: O.d.LinkFlair,
						placeholderText: s.fbt._("Post Title", null, {
							hk: "43RsbC"
						})
					}), i.a.createElement(f.a, {
						flair: t,
						flairTemplateType: O.d.LinkFlair,
						subredditId: r.id,
						templates: c,
						templateIds: d,
						onChange: this.setSelectedFlair
					}), i.a.createElement("div", {
						className: k.a.buttonsRow
					}, i.a.createElement(x.l, {
						disabled: !l,
						onClick: this.onApply
					}, s.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), i.a.createElement(x.o, {
						className: k.a.clearButton,
						onClick: this.onClear
					}, s.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const g = Object(a.b)(M, (e, t) => ({
				closeModal: () => e(Object(m.i)(t.modalId))
			}))(j);
			t.a = Object(l.a)(Object(d.c)(g))
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less": function(e, t, o) {
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
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return h
			})), o.d(t, "f", (function() {
				return O
			})), o.d(t, "h", (function() {
				return _
			})), o.d(t, "i", (function() {
				return v
			})), o.d(t, "j", (function() {
				return E
			})), o.d(t, "k", (function() {
				return C
			})), o.d(t, "d", (function() {
				return k
			})), o.d(t, "b", (function() {
				return P
			})), o.d(t, "c", (function() {
				return M
			})), o.d(t, "e", (function() {
				return j
			})), o.d(t, "g", (function() {
				return g
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/lessComponent.tsx"),
				i = o("./src/reddit/controls/Dropdown/Row.tsx"),
				a = o("./src/reddit/icons/fonts/index.tsx"),
				c = o("./src/reddit/icons/fonts/Approve/index.tsx"),
				d = o("./src/reddit/icons/fonts/Envelope/index.tsx"),
				l = o("./src/reddit/icons/fonts/Lock/index.tsx"),
				m = o("./src/reddit/icons/fonts/Remove/index.tsx"),
				p = o("./src/reddit/icons/fonts/Spam/index.tsx"),
				u = o("./src/reddit/icons/fonts/Tag/index.tsx"),
				b = o("./src/reddit/icons/svgs/CircleCheckLight/index.tsx"),
				f = o("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				x = o.n(f);
			const h = r.a.wrapped(c.a, "Icon", x.a),
				O = r.a.wrapped(d.a, "Icon", x.a),
				_ = r.a.wrapped(l.a, "Icon", x.a),
				v = r.a.wrapped(m.a, "Icon", x.a),
				E = r.a.wrapped(p.a, "Icon", x.a),
				C = r.a.wrapped(u.a, "Icon", x.a),
				k = () => s.a.createElement(a.a, {
					name: "mod_mute",
					className: x.a.Icon
				}),
				P = () => s.a.createElement(a.a, {
					name: "calendar",
					className: x.a.Icon
				}),
				M = () => s.a.createElement(b.a, {
					className: x.a.svgIcon
				}),
				j = r.a.wrapped(i.b, "DropdownRow", x.a),
				g = r.a.div("ListContainer", x.a)
		},
		"./src/reddit/components/PostModModeDropdown/PostModModeList.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return k
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o.n(n),
				r = o("./node_modules/react/index.js"),
				i = o.n(r),
				a = o("./node_modules/@loadable/component/dist/loadable.esm.js"),
				c = o("./src/reddit/components/ModModeReports/helpers.ts"),
				d = o("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				l = o("./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts"),
				m = o("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				p = o("./src/reddit/helpers/isCrosspost.ts"),
				u = o("./src/reddit/models/Flair/index.ts"),
				b = o("./src/reddit/models/Prediction/index.ts"),
				f = o("./src/reddit/models/Prediction/Tournament/index.ts"),
				x = o("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx"),
				h = o("./src/devPlatform/singleton/constants.ts"),
				O = o("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				_ = o.n(O);
			const v = Object(a.a)({
					resolved: {},
					chunkName: () => "DevPlatform",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!o.m[t]
					},
					importAsync: () => Promise.all([o.e("vendors~AdminPanel~DevPlatform"), o.e("DevPlatform")]).then(o.bind(null, "./src/devPlatform/components/ContextActions/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return o(t)
					},
					resolve() {
						return "./src/devPlatform/components/ContextActions/index.tsx"
					}
				}, {
					ssr: !1
				}),
				E = (e, t) => Object(l.b)({
					breakpointType: l.a.HideIfVWLarger,
					flatlistItem: e,
					postLayout: t
				}),
				C = () => void 0,
				k = e => {
					let {
						canEditFlair: t,
						hasModFullPerms: o,
						hasModPostPerms: s,
						isDistinguished: r,
						isModToMemberShareEnabled: a,
						isOverlay: l,
						isPostAuthor: O,
						isProfilePage: k,
						layout: P,
						modModeEnabled: M,
						onApprovePost: j,
						onCancelPrediction: g,
						onChangePredictionOutcome: D,
						onEditPredictionEnd: w,
						onDistinguishPost: N,
						onFlairPost: S,
						onLockPost: y,
						onNsfwPost: F,
						onOcPost: T,
						onCcPost: I,
						onRemovePost: L,
						onModToMemberShareOpened: R,
						onSpamPost: A,
						onStickyPost: W,
						onSpoilerPost: B,
						post: H
					} = e;
					var V, G, U, K, Z;
					const Q = (null === (V = H.pollData) || void 0 === V ? void 0 : V.isPrediction) && !(null === (G = H.pollData) || void 0 === G ? void 0 : G.resolvedOptionId),
						q = (null === (U = H.pollData) || void 0 === U ? void 0 : U.isPrediction) && null !== H.pollData.resolvedOptionId,
						z = H.flair.filter(e => e.type !== u.f.Nsfw && e.type !== u.f.Spoiler).length > 0,
						Y = Object(c.b)(H),
						J = !(!H.approvedBy || !Y),
						X = l ? void 0 : P,
						$ = Object(p.a)(H),
						ee = M ? E : C;
					return i.a.createElement(x.g, null, s && i.a.createElement(i.a.Fragment, null, !H.isSponsored && i.a.createElement(i.a.Fragment, null, i.a.createElement(x.e, {
						className: ee(d.a.Approve, X),
						displayText: J ? n.fbt._("Reapprove", null, {
							hk: "39rQqr"
						}) : H.approvedBy ? n.fbt._("Approved", null, {
							hk: "1j7d8E"
						}) : n.fbt._("Approve", null, {
							hk: "29dW3F"
						}),
						onClick: j
					}, i.a.createElement(x.a, null)), i.a.createElement(x.e, {
						className: ee(d.a.Remove, X),
						displayText: H.isRemoved ? n.fbt._("Removed", null, {
							hk: "3rSb2M"
						}) : n.fbt._("Remove", null, {
							hk: "dflNO"
						}),
						onClick: L
					}, i.a.createElement(x.i, null)), i.a.createElement(x.e, {
						className: ee(d.a.Spam, X),
						displayText: H.isSpam ? n.fbt._("Removed as spam", null, {
							hk: "2olZT7"
						}) : n.fbt._("Remove as spam", null, {
							hk: "4A9ZT8"
						}),
						onClick: A
					}, i.a.createElement(x.j, null))), t && i.a.createElement(x.e, {
						className: ee(d.a.Flair, X),
						displayText: z ? n.fbt._("Edit post flair", null, {
							hk: "2oet1"
						}) : n.fbt._("Add post flair", null, {
							hk: "1iPNLQ"
						}),
						onClick: S
					}, i.a.createElement(x.k, null))), a && o && i.a.createElement(x.e, {
						displayText: n.fbt._("Share with members", null, {
							hk: "2XMBQE"
						}),
						onClick: R
					}, i.a.createElement(x.f, null)), !H.isRemoved && !H.isSpam && !k && i.a.createElement(m.a, {
						isSelected: H.isStickied,
						onClick: W,
						text: n.fbt._("Sticky post", null, {
							hk: "3uXoIh"
						})
					}), Object(f.b)(H) && i.a.createElement(x.e, {
						disabled: Boolean((null === (K = H.pollData) || void 0 === K ? void 0 : K.resolvedOptionId) || (null === (Z = H.pollData) || void 0 === Z ? void 0 : Z.predictionStatus) === b.b.Cancelled),
						displayText: n.fbt._("Cancel Prediction", null, {
							hk: "hgWFW"
						}),
						onClick: g
					}, i.a.createElement(x.i, null)), Q && i.a.createElement(x.e, {
						displayText: n.fbt._("Update the end date", null, {
							hk: "FjDpu"
						}),
						onClick: w
					}, i.a.createElement(x.b, null)), q && i.a.createElement(x.e, {
						textClassName: _.a.text,
						onClick: D,
						displayText: n.fbt._("Change the outcome", null, {
							hk: "2FH6j9"
						})
					}, i.a.createElement(x.c, null)), O && i.a.createElement(m.a, {
						isSelected: r,
						onClick: N,
						text: n.fbt._("Distinguish as Mod", null, {
							hk: "3cCdJd"
						})
					}), i.a.createElement(m.a, {
						isSelected: H.isLocked,
						onClick: y,
						text: n.fbt._("Lock comments", null, {
							hk: "YAV8n"
						})
					}), !$ && i.a.createElement(m.a, {
						isSelected: H.isOriginalContent,
						onClick: T,
						text: n.fbt._("Mark as OC", null, {
							hk: "4yx2EO"
						})
					}), i.a.createElement(m.a, {
						isSelected: H.isNSFW,
						onClick: F,
						text: n.fbt._("Mark as NSFW", null, {
							hk: "8QQ2f"
						})
					}), s && "subreddit" === H.belongsTo.type && i.a.createElement(x.e, {
						displayText: n.fbt._("Adjust crowd control", null, {
							hk: "4Drg85"
						}),
						onClick: I
					}, i.a.createElement(x.d, null)), i.a.createElement(m.a, {
						isSelected: H.isSpoiler,
						onClick: B,
						text: n.fbt._("Mark as spoiler", null, {
							hk: "3ef0MU"
						})
					}), i.a.createElement(v, {
						contextType: h.a.POST,
						contextData: H,
						moderator: !0
					}))
				}
		},
		"./src/reddit/components/PostModModeDropdown/_PostModModeDropdown.m.less": function(e, t, o) {
			e.exports = {
				dropdown: "_1DqDpxxERz4UiuumI26tIZ"
			}
		},
		"./src/reddit/components/PostModModeDropdown/_PostModModeDropdown.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
				a = o("./src/lib/constants/index.ts"),
				c = o("./src/reddit/actions/economics/predictions/modTools.ts"),
				d = o("./src/reddit/actions/modal.ts"),
				l = o("./src/reddit/actions/post.ts"),
				m = o("./src/reddit/actions/postFlair.ts"),
				p = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = o("./src/reddit/components/PostFlairPicker/index.tsx"),
				b = o("./src/reddit/components/TrackingHelper/index.tsx"),
				f = o("./src/reddit/constants/modals.ts"),
				x = o("./src/reddit/contexts/PageLayer/index.tsx"),
				h = o("./src/reddit/controls/Dropdown/index.tsx"),
				O = o("./src/reddit/featureFlags/index.ts"),
				_ = o("./src/reddit/helpers/trackers/modTools.ts"),
				v = o("./src/reddit/helpers/trackers/predictionsModTools.ts"),
				E = o("./src/reddit/models/Prediction/Tournament/index.ts"),
				C = o("./src/reddit/selectors/tooltip.ts"),
				k = o("./src/reddit/components/PostModModeDropdown/PostModModeList.tsx"),
				P = o("./src/reddit/components/PostModModeDropdown/_PostModModeDropdown.m.less"),
				M = o.n(P);
			const j = Object(x.u)({
					isProfilePage: x.J,
					pageLayer: e => e
				}),
				g = Object(i.c)({
					layout: x.S,
					isDropdownOpen: (e, t) => {
						let {
							tooltipId: o
						} = t;
						return Object(C.b)(o)(e)
					},
					isModToMemberShareEnabled: O.d.modToMemberShare
				}),
				D = Object(r.b)(g, (e, t) => {
					let {
						post: o
					} = t;
					return {
						onApprovePost: () => e(Object(l.s)(o.id)),
						onCancelPrediction: () => e(Object(c.c)(o.id)),
						onChangePredictionOutcome: () => e(Object(c.d)(o.id)),
						onEditPredictionEnd: () => e(Object(c.e)(o.id)),
						onDistinguishPost: t => e(Object(l.v)(o.id, t)),
						onFlairChanged: (t, n) => e(Object(m.h)({
							post: o,
							previewFlair: t,
							selectedTemplateId: n
						})),
						onFlairPost: t => e(Object(d.i)(t)),
						onLockPost: () => e(Object(l.E)(o.id)),
						onNsfwPost: () => e(Object(l.G)(o.id)),
						onOcPost: () => e(Object(l.J)(o.id)),
						onCcPost: () => {
							e(Object(d.i)(f.a.CROWD_CONTROL)), e(Object(l.u)(o.id))
						},
						onRemovePost: () => e(Object(l.U)(o.id, !1)),
						onModToMemberShareOpened: () => {
							e(Object(d.i)(f.a.MOD_TO_MEMBER_SHARE)), e(Object(l.F)(o.id))
						},
						onSpamPost: () => e(Object(l.U)(o.id, !0)),
						onSpoilerPost: () => e(Object(l.eb)(o.id)),
						onStickyPost: () => e(Object(l.ib)(o.id))
					}
				}),
				w = Object(p.a)(h.a);
			t.default = j(D(Object(b.c)(e => {
				let {
					canEditFlair: t,
					hasModFullPerms: o,
					hasModPostPerms: n,
					isDropdownOpen: r,
					isModToMemberShareEnabled: i,
					isOverlay: c,
					isPostAuthor: d,
					isProfilePage: l,
					layout: m,
					modModeEnabled: p,
					onApprovePost: b,
					onCancelPrediction: f,
					onChangePredictionOutcome: x,
					onEditPredictionEnd: h,
					onDistinguishPost: O,
					onFlairPost: C,
					onLockPost: P,
					onNsfwPost: j,
					onOcPost: g,
					onCcPost: D,
					onRemovePost: N,
					onModToMemberShareOpened: S,
					onSpamPost: y,
					onSpoilerPost: F,
					onStickyPost: T,
					post: I,
					sendEvent: L,
					tooltipId: R
				} = e;
				const A = I.distinguishType === a.H.MODERATOR,
					W = A ? a.H.NONE : a.H.MODERATOR,
					B = Object(u.b)(I.id, c);
				return s.a.createElement(w, {
					className: M.a.dropdown,
					isOpen: r,
					tooltipId: R
				}, s.a.createElement(k.a, {
					canEditFlair: t,
					hasModFullPerms: o,
					hasModPostPerms: n,
					isDistinguished: A,
					isModToMemberShareEnabled: i,
					isOverlay: c,
					isPostAuthor: d,
					isProfilePage: l,
					layout: m,
					modModeEnabled: p,
					onApprovePost: () => {
						b(), L(Object(_.l)("approve", I.id))
					},
					onCancelPrediction: () => {
						f(), L(Object(v.a)(I.id))
					},
					onChangePredictionOutcome: () => {
						x(), L(Object(v.b)(I.id))
					},
					onEditPredictionEnd: () => {
						h(), L(Object(v.c)(I.id))
					},
					onRemovePost: () => {
						N(), Object(E.b)(I) ? L(Object(v.d)(I.id)) : L(Object(_.l)("remove", I.id))
					},
					onSpamPost: () => {
						y(), L(Object(_.l)("spam", I.id))
					},
					onDistinguishPost: () => {
						O(W), L(Object(_.l)(A ? "undistinguish" : "distinguish", I.id))
					},
					onFlairPost: () => {
						C(B), L(Object(_.l)("post_flair", I.id))
					},
					onLockPost: () => {
						P(), L(Object(_.l)(I.isLocked ? "unlock" : "lock", I.id))
					},
					onNsfwPost: () => {
						j(), L(Object(_.l)(I.isNSFW ? "unmark_nsfw" : "mark_nsfw", I.id))
					},
					onOcPost: () => {
						g(), L(Object(_.l)(I.isOriginalContent ? "unmark_original_content" : "mark_original_content", I.id))
					},
					onCcPost: () => {
						D()
					},
					onModToMemberShareOpened: () => {
						S(), L(Object(_.l)("mod_to_member_share", I.id))
					},
					onSpoilerPost: () => {
						F(), L(Object(_.l)(I.isSpoiler ? "unmark_spoiler" : "mark_spoiler", I.id))
					},
					onStickyPost: () => {
						T(), L(Object(_.l)(I.isStickied ? "unsticky" : "sticky", I.id))
					},
					post: I
				}))
			})))
		},
		"./src/reddit/controls/CheckboxMenuItem/index.m.less": function(e, t, o) {
			e.exports = {
				checkboxIcon: "_3Ebr0mkLD0A7HiowzExNW-",
				checkboxMenuItem: "_2eawLPCtwzvTZhWKtaUgZQ",
				expandRight: "_34Odk7t6y-rCPxPcYJa4Nw",
				postCheckboxMenuItem: "_3LyKu57c-QkPvlFvAgWop5"
			}
		},
		"./src/reddit/controls/CheckboxMenuItem/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return p
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/icons/fonts/index.tsx"),
				a = o("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				c = o("./src/reddit/controls/CheckboxMenuItem/index.m.less"),
				d = o.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const m = e => s.a.createElement("div", {
					className: Object(r.a)(d.a.checkboxMenuItem, e.className),
					onClick: e.onClick
				}, s.a.createElement(a.a, {
					className: d.a.expandRight
				}, s.a.createElement(i.a, {
					name: "checkbox",
					isFilled: e.isSelected,
					className: d.a.checkboxIcon
				}), e.text)),
				p = e => {
					let {
						className: t,
						...o
					} = e;
					return s.a.createElement(m, l({
						className: Object(r.a)(d.a.postCheckboxMenuItem, t)
					}, o))
				}
		},
		"./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less": function(e, t, o) {
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
		"./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return l
			})), o.d(t, "b", (function() {
				return p
			})), o.d(t, "c", (function() {
				return u
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = o("./src/lib/classNames/index.ts"),
				a = o("./src/lib/lessComponent.tsx"),
				c = o("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				d = o.n(c);
			const l = a.a.button("button", d.a),
				m = e => t => s.a.createElement("div", {
					className: t.className
				}, e);

			function p(e, t, o) {
				return b(e, t, !0, {
					...o
				})
			}

			function u(e, t, o) {
				return b(e, t, !1, {
					...o
				})
			}

			function b(e, t, o, n) {
				const a = e,
					c = "function" == typeof t ? t : m(t),
					{
						meta: l
					} = n,
					p = e => s.a.createElement(s.a.Fragment, null, s.a.createElement(a, {
						className: Object(i.a)(d.a.icon, {
							[d.a.isLit]: e
						})
					}), s.a.createElement(c, {
						className: d.a.body
					}), l && s.a.createElement("div", {
						className: d.a.metaContainer
					}, l));
				return o ? e => s.a.createElement("a", {
					"data-redditstyle": !0,
					className: Object(i.a)(e.className, d.a.basicLink),
					href: e.href,
					onClick: e.onClick,
					target: "_blank",
					rel: "noopener noreferrer"
				}, p(e.isLit)) : e => e.href ? s.a.createElement(r.a, {
					"data-redditstyle": !0,
					className: Object(i.a)(e.className, d.a.basicLink),
					to: e.href,
					onClick: e.onClick
				}, p(e.isLit)) : s.a.createElement("button", {
					"data-redditstyle": !0,
					className: Object(i.a)(e.className, d.a.button),
					onClick: e.onClick
				}, p(e.isLit))
			}
		},
		"./src/reddit/helpers/trackers/predictionsModTools.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return r
			})), o.d(t, "f", (function() {
				return i
			})), o.d(t, "a", (function() {
				return a
			})), o.d(t, "d", (function() {
				return c
			})), o.d(t, "b", (function() {
				return d
			})), o.d(t, "e", (function() {
				return l
			}));
			var n = o("./src/reddit/selectors/telemetry.ts");
			const s = (e, t) => ({
					...Object(n.n)(e),
					post: Object(n.J)(e, t),
					predictions: Object(n.P)(e, t),
					subreddit: Object(n.ib)(e)
				}),
				r = e => t => ({
					...s(t, e),
					source: "predictions",
					action: "click",
					noun: "edit_prediction_end_dt"
				}),
				i = e => t => ({
					...s(t, e),
					source: "edit_prediction_end_dt",
					action: "click",
					noun: "confirm"
				}),
				a = e => t => ({
					...s(t, e),
					source: "predictions",
					action: "click",
					noun: "cancel_prediction"
				}),
				c = e => t => ({
					...s(t, e),
					source: "predictions",
					action: "click",
					noun: "remove_post"
				}),
				d = e => t => ({
					...s(t, e),
					source: "predictions",
					action: "click",
					noun: "prediction_change_outcome"
				}),
				l = e => t => ({
					...s(t, e),
					source: "prediction_change_outcome",
					action: "click",
					noun: "confirm"
				})
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/icons/fonts/helpers.tsx"),
				a = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = o.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("approve", e.isFilled), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(r.b)("message",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/icons/fonts/helpers.tsx"),
				a = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = o.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("lock", e.isFilled), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/icons/fonts/helpers.tsx"),
				a = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = o.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("remove", e.isFilled), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/icons/fonts/helpers.tsx"),
				a = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = o.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("spam", e.isFilled), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Tag/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(r.b)("tag",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, o) {},
		"./src/reddit/icons/svgs/CircleCheckLight/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return r
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);
			const r = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M18.04 7.67457C18.5905 9.55741 18.4654 11.5734 17.6865 13.3738C16.9076 15.1742 15.5238 16.6457 13.7746 17.5336C12.0254 18.4215 10.0209 18.67 8.1078 18.2362C6.19473 17.8023 4.49351 16.7133 3.29851 15.1576C2.10351 13.602 1.48992 11.6775 1.5639 9.71728C1.63788 7.75702 2.39478 5.88429 3.70364 4.42313C5.01249 2.96197 6.79095 2.00431 8.73128 1.71586C10.6716 1.42742 12.6517 1.82633 14.329 2.84357L15.189 1.90557C13.2556 0.658893 10.9412 0.141738 8.661 0.446834C6.38077 0.75193 4.2838 1.85932 2.74608 3.57044C1.20837 5.28156 0.330485 7.4845 0.269845 9.78425C0.209205 12.084 0.969774 14.3301 2.41518 16.1199C3.86058 17.9097 5.89628 19.1261 8.15726 19.5509C10.4182 19.9757 12.7566 19.5813 14.7531 18.4382C16.7496 17.2952 18.2736 15.4783 19.0519 13.3134C19.8301 11.1485 19.8118 8.77715 19 6.62457L18.04 7.67457Z",
				fill: "inherit"
			}), s.a.createElement("path", {
				d: "M9.99503 12.6426C9.91293 12.6427 9.83162 12.6266 9.75577 12.5952C9.67991 12.5638 9.61101 12.5177 9.55303 12.4596L5.54703 8.45257L6.43203 7.56957L9.97603 11.1146L19.013 1.24657L19.935 2.08957L10.456 12.4396C10.3989 12.5013 10.3298 12.5509 10.253 12.5852C10.1762 12.6196 10.0932 12.6381 10.009 12.6396L9.99503 12.6426Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, o) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				c = o.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(r.a)(e => {
				const {
					className: t,
					children: o,
					heightLeft: n,
					widthLeft: r,
					gutter: a,
					...l
				} = e;
				return s.a.createElement("div", d({
					className: Object(i.a)(c.a.expandRightContainer, t)
				}, l), s.a.createElement("div", {
					className: c.a.left,
					style: {
						flexBasis: r,
						height: n,
						marginRight: a
					}
				}, Array.isArray(o) && o[0]), s.a.createElement("div", {
					className: c.a.right
				}, Array.isArray(o) && o[1]))
			}, 2)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModerationDropdowns.722fd3d7b49b2d5229bb.js.map