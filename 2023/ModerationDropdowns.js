// https://www.redditstatic.com/desktop2x/ModerationDropdowns.104c25775b7f7d6bcd53.js
// Retrieved at 3/16/2023, 10:30:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModerationDropdowns"], {
		"./src/devPlatform/components/ContextActions/ContextActionsLoader.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/reddit/selectors/experiments/devPlatform.ts");
			const c = Object(i.a)({
				resolved: {},
				chunkName: () => "devPlatform-components-ContextActions",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~devPlatform-components-AdminPanel-Utilities-DevPlatformConfig~devPlatform-components-ContextActions"), n.e("devPlatform-components-ContextActions")]).then(n.bind(null, "./src/devPlatform/components/ContextActions/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/devPlatform/components/ContextActions/index.tsx"
				}
			}, {
				ssr: !1
			});

			function d(e) {
				return Object(r.e)(e => Object(a.a)(e)) ? s.a.createElement(c, {
					contextType: e.contextType,
					contextData: e.contextData,
					moderator: e.moderator
				}) : null
			}
		},
		"./src/devPlatform/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			}));
			const o = "devvit-gateway-url",
				s = "devvit-mock-metadata",
				r = "devvit-debug-logging",
				i = "DEV_PLAT__OPEN_USER_INPUT_MODAL";
			var a;
			! function(e) {
				e[e.POST = 0] = "POST", e[e.COMMENT = 1] = "COMMENT", e[e.SUBREDDIT = 2] = "SUBREDDIT", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
			}(a || (a = {}))
		},
		"./src/reddit/actions/economics/predictions/modTools.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "d", (function() {
				return f
			}));
			var o = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/actions/economics/predictions/index.ts"),
				r = n("./src/reddit/reducers/features/predictions/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/constants/modals.ts"),
				d = n("./src/reddit/models/Toast/index.ts");
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			Object(o.a)({
				features: {
					predictions: r.a
				}
			});
			const u = e => {
				let {
					postId: t,
					closedAt: n
				} = e;
				return async e => {
					try {
						await e(Object(s.d)(t, {
							closedAt: n
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

			function m(e, t) {
				return async n => {
					try {
						await n(Object(s.d)(e, {
							resolvedOptionId: t
						}));
						const o = Object(a.e)(l._("Outcome changed", null, {
							hk: "Io0na"
						}), d.b.SuccessMod);
						n(Object(a.f)(o))
					} catch {
						const e = Object(a.e)(l._("Oops! Something went wrong. Please note that the outcome can be changed just once per Prediction", null, {
							hk: "4B5dNf"
						}), d.b.Error);
						n(Object(a.f)(e))
					}
				}
			}
			const p = e => Object(i.h)(c.a.ECON_PREDICTIONS_CHANGE_END_TIME, {
					postId: e
				}),
				b = e => Object(i.h)(c.a.ECON_PREDICTIONS_CANCEL_PREDICTION, {
					postId: e
				}),
				f = e => Object(i.h)(c.a.ECON_PREDICTIONS_CHANGE_OUTCOME, {
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/prettyPrintNumber/index.ts"),
				a = n("./src/reddit/components/BadgeCounter/index.m.less"),
				c = n.n(a);
			t.a = e => {
				let {
					className: t,
					isActive: n,
					showEmpty: o,
					unreadCount: a,
					testId: d
				} = e;
				return n ? s.a.createElement("span", {
					className: Object(r.a)(t, c.a.badgeCounter, {
						[c.a.mEmpty]: o || a < 1
					}),
					"data-testid": d
				}, o || a < 1 ? "" : Object(i.b)(a)) : null
			}
		},
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			const o = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				s = e => {
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
			var o;
			n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.Flair = "FLAIR", e.Spam = "SPAM", e.Remove = "REMOVE", e.Approve = "APPROVE"
				}(o || (o = {}))
		},
		"./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "c", (function() {
				return x
			}));
			var o, s, r, i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				c = n("./src/reddit/constants/postLayout.ts"),
				d = n("./src/reddit/components/ModToolsFlatlist/breakpoints.m.less"),
				l = n.n(d),
				u = n("./src/reddit/components/ModToolsFlatlist/index.m.less"),
				m = n.n(u);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(o || (o = {})),
			function(e) {
				e.Approve = "ApproveGroup", e.Remove = "RemoveGroup", e.Spam = "SpamGroup", e.Flair = "FlairGroup"
			}(s || (s = {})),
			function(e) {
				e.Classic = "ClassicVariant", e.Compact = "CompactVariant", e.Default = "DefaultVariant"
			}(r || (r = {}));
			const p = {
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
					const t = p[e.flatlistItem],
						n = e.postLayout && b[e.postLayout],
						o = l.a[e.breakpointType],
						s = l.a[t],
						a = n ? l.a[n] : l.a[r.Default];
					return Object(i.a)(o, s, a)
				},
				x = e => {
					const t = e && b[e],
						n = t ? l.a[t] : l.a[r.Default];
					return Object(i.a)(n, m.a.ButtonTextWrapper, l.a.ButtonTextWrapper)
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
				return M
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/higherOrderComponents/asTooltip.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/BadgeCounter/index.tsx"),
				u = n("./src/reddit/controls/Dropdown/index.tsx"),
				m = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				p = n("./src/reddit/helpers/trackers/modHub.ts"),
				b = n("./src/reddit/icons/fonts/index.tsx"),
				f = n("./src/reddit/selectors/experiments/shredditModNav.ts"),
				x = n("./src/reddit/selectors/moderatorPermissions.ts"),
				h = n("./src/reddit/selectors/platform.ts"),
				O = n("./src/reddit/components/ModerationDropdown/index.tsx"),
				_ = n("./src/reddit/components/ModerationDropdown/_ModerationDropdown.m.less"),
				v = n.n(_),
				E = n("./src/reddit/components/TrackingHelper/index.tsx");
			const C = d.a.wrapped(u.a, "StyledDropdown", v.a),
				k = Object(a.a)(C),
				P = d.a.div("Separator", v.a),
				j = (e, t) => n => r.a.createElement("span", {
					className: Object(c.a)(v.a.IconWrapper, n.className)
				}, r.a.createElement(l.a, {
					className: v.a.BadgeCounter,
					isActive: t,
					unreadCount: -1,
					showEmpty: !0
				}), r.a.createElement(b.a, {
					name: e
				}));

			function M(e) {
				const {
					className: t,
					unreadNotifications: n,
					isOpen: a,
					sendEventWithName: c
				} = e, d = Object(i.e)(h.e), l = Object(i.e)(e => Object(f.a)(e, !0)), u = Object(m.c)(Object(b.b)("mod_queue"), `${o.fbt._("Mod Queue",null,{hk:"2fqLkD"})}`), _ = Object(m.b)(j("message", n.hasUnreadModmail), `${o.fbt._("Modmail",null,{hk:"1IvnFd"})}`), v = Object(m.c)(Object(b.b)("statistics"), `${o.fbt._("Insights",null,{hk:"2BbADt"})}`), C = Object(i.e)(x.l)[(null == d ? void 0 : d.id) || ""], M = Object(E.b)(), g = Object(s.useCallback)(() => {
					M(Object(p.d)({
						source: "moderator",
						action: "click",
						noun: "insights_header_dropdown_entrypoint",
						paneName: void 0
					}))
				}, [M]);
				return r.a.createElement("div", {
					className: t
				}, r.a.createElement(k, {
					isFixed: !0,
					isOpen: a,
					tooltipId: O.a
				}, r.a.createElement(u, {
					href: "/r/mod/about/modqueue",
					onClick: () => c("mod_queue")
				}), r.a.createElement(P, null), r.a.createElement(_, {
					href: "https://mod.reddit.com/mail/all",
					isLit: n.hasUnreadModmail,
					onClick: () => c("mod_mail")
				}), r.a.createElement(P, null), l && (null == d ? void 0 : d.name) && C && r.a.createElement(r.a.Fragment, null, r.a.createElement(v, {
					href: `/mod/${d.name}/insights`,
					onClick: g
				}), r.a.createElement(P, null))))
			}
		},
		"./src/reddit/components/ModerationDropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./src/higherOrderComponents/makeAsync.tsx"),
				s = n("./src/lib/loadWithRetries/index.ts");
			const r = "Header--Moderation",
				i = () => null;
			t.b = Object(o.a)({
				ErrorComponent: i,
				getComponent: () => Object(s.a)(() => n.e("ModerationDropdowns").then(n.bind(null, "./src/reddit/components/ModerationDropdown/_ModerationDropdown.tsx"))).then(e => e.default),
				LoadingComponent: i
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
				return P
			}));
			var o, s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/higherOrderComponents/asModal/index.tsx"),
				u = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				p = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				b = n("./src/reddit/components/FlairPreview/index.tsx"),
				f = n("./src/reddit/components/FlairSearch/index.tsx"),
				x = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/helpers/trackers/postComposer.ts"),
				O = n("./src/reddit/models/Flair/index.ts"),
				_ = n("./src/reddit/selectors/postFlair.ts"),
				v = n("./src/reddit/selectors/subreddit.ts"),
				E = n("./src/reddit/components/PostFlairPicker/helpers.ts"),
				C = n("./src/reddit/components/PostFlairPicker/index.m.less"),
				k = n.n(C);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(o || (o = {}));
			const P = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.UNSET;
					return `PostFlair__Modal-[postId: ${e}]-isOverlay[${t}]-position[${n}]`
				},
				j = Object(c.c)({
					flairData: _.d,
					subreddit: v.X
				});
			class M extends i.a.Component {
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
					} = this.state, n = Object(E.c)(this.props.flairs) || null;
					return Object(E.b)(e, t, n)
				}
				render() {
					const {
						props: e
					} = this, {
						previewFlair: t
					} = this.state, {
						className: n,
						flairData: o,
						subreddit: r
					} = e, a = r.displayText, {
						templates: c,
						templateIds: d
					} = o, {
						canSave: l
					} = this.canSave();
					return i.a.createElement(p.a, {
						className: n
					}, i.a.createElement(m.a, {
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
			const g = Object(a.b)(j, (e, t) => ({
				closeModal: () => e(Object(u.i)(t.modalId))
			}))(M);
			t.a = Object(l.a)(Object(d.c)(g))
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
				return O
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "k", (function() {
				return C
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "b", (function() {
				return P
			})), n.d(t, "c", (function() {
				return j
			})), n.d(t, "e", (function() {
				return M
			})), n.d(t, "g", (function() {
				return g
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/Dropdown/Row.tsx"),
				a = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				d = n("./src/reddit/icons/fonts/Envelope/index.tsx"),
				l = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				u = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				m = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				p = n("./src/reddit/icons/fonts/Tag/index.tsx"),
				b = n("./src/reddit/icons/svgs/CircleCheckLight/index.tsx"),
				f = n("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				x = n.n(f);
			const h = r.a.wrapped(c.a, "Icon", x.a),
				O = r.a.wrapped(d.a, "Icon", x.a),
				_ = r.a.wrapped(l.a, "Icon", x.a),
				v = r.a.wrapped(u.a, "Icon", x.a),
				E = r.a.wrapped(m.a, "Icon", x.a),
				C = r.a.wrapped(p.a, "Icon", x.a),
				k = () => s.a.createElement(a.a, {
					name: "mod_mute",
					className: x.a.Icon
				}),
				P = () => s.a.createElement(a.a, {
					name: "calendar",
					className: x.a.Icon
				}),
				j = () => s.a.createElement(b.a, {
					className: x.a.svgIcon
				}),
				M = r.a.wrapped(i.b, "DropdownRow", x.a),
				g = r.a.div("ListContainer", x.a)
		},
		"./src/reddit/components/PostModModeDropdown/_PostModModeDropdown.m.less": function(e, t, n) {
			e.exports = {
				dropdown: "_1DqDpxxERz4UiuumI26tIZ"
			}
		},
		"./src/reddit/components/PostModModeDropdown/_PostModModeDropdown.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/actions/economics/predictions/modTools.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/postFlair.ts"),
				m = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = n("./src/reddit/components/PostFlairPicker/index.tsx"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/constants/modals.ts"),
				x = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/controls/Dropdown/index.tsx"),
				O = n("./src/reddit/featureFlags/index.ts"),
				_ = n("./src/reddit/helpers/trackers/modTools.ts"),
				v = n("./src/reddit/helpers/trackers/predictionsModTools.ts"),
				E = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				C = n("./src/reddit/selectors/tooltip.ts"),
				k = n("./node_modules/fbt/lib/FbtPublic.js"),
				P = n("./src/reddit/components/ModModeReports/helpers.ts"),
				j = n("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				M = n("./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts"),
				g = n("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				D = n("./src/reddit/helpers/isCrosspost.ts"),
				N = n("./src/reddit/models/Flair/index.ts"),
				w = n("./src/reddit/models/Prediction/index.ts"),
				S = n("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx"),
				y = n("./src/devPlatform/components/ContextActions/ContextActionsLoader.tsx"),
				T = n("./src/devPlatform/constants.ts"),
				F = n("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				I = n.n(F);
			const L = (e, t) => Object(M.b)({
					breakpointType: M.a.HideIfVWLarger,
					flatlistItem: e,
					postLayout: t
				}),
				R = () => void 0,
				A = e => {
					let {
						canEditFlair: t,
						hasModFullPerms: n,
						hasModPostPerms: o,
						isDistinguished: r,
						isModToMemberShareEnabled: i,
						isOverlay: a,
						isPostAuthor: c,
						isProfilePage: d,
						layout: l,
						modModeEnabled: u,
						onApprovePost: m,
						onCancelPrediction: p,
						onChangePredictionOutcome: b,
						onEditPredictionEnd: f,
						onDistinguishPost: x,
						onFlairPost: h,
						onLockPost: O,
						onNsfwPost: _,
						onOcPost: v,
						onCcPost: C,
						onRemovePost: M,
						onModToMemberShareOpened: F,
						onSpamPost: A,
						onStickyPost: W,
						onSpoilerPost: B,
						post: H
					} = e;
					var V, G, U, K, Z;
					const Q = (null === (V = H.pollData) || void 0 === V ? void 0 : V.isPrediction) && !(null === (G = H.pollData) || void 0 === G ? void 0 : G.resolvedOptionId),
						q = (null === (U = H.pollData) || void 0 === U ? void 0 : U.isPrediction) && null !== H.pollData.resolvedOptionId,
						z = H.flair.filter(e => e.type !== N.f.Nsfw && e.type !== N.f.Spoiler).length > 0,
						Y = Object(P.b)(H),
						J = !(!H.approvedBy || !Y),
						X = a ? void 0 : l,
						$ = Object(D.a)(H),
						ee = u ? L : R;
					return s.a.createElement(S.g, null, o && s.a.createElement(s.a.Fragment, null, !H.isSponsored && s.a.createElement(s.a.Fragment, null, s.a.createElement(S.e, {
						className: ee(j.a.Approve, X),
						displayText: J ? k.fbt._("Reapprove", null, {
							hk: "39rQqr"
						}) : H.approvedBy ? k.fbt._("Approved", null, {
							hk: "1j7d8E"
						}) : k.fbt._("Approve", null, {
							hk: "29dW3F"
						}),
						onClick: m
					}, s.a.createElement(S.a, null)), s.a.createElement(S.e, {
						className: ee(j.a.Remove, X),
						displayText: H.isRemoved ? k.fbt._("Removed", null, {
							hk: "3rSb2M"
						}) : k.fbt._("Remove", null, {
							hk: "dflNO"
						}),
						onClick: M
					}, s.a.createElement(S.i, null)), s.a.createElement(S.e, {
						className: ee(j.a.Spam, X),
						displayText: H.isSpam ? k.fbt._("Removed as spam", null, {
							hk: "2olZT7"
						}) : k.fbt._("Remove as spam", null, {
							hk: "4A9ZT8"
						}),
						onClick: A
					}, s.a.createElement(S.j, null))), t && s.a.createElement(S.e, {
						className: ee(j.a.Flair, X),
						displayText: z ? k.fbt._("Edit post flair", null, {
							hk: "2oet1"
						}) : k.fbt._("Add post flair", null, {
							hk: "1iPNLQ"
						}),
						onClick: h
					}, s.a.createElement(S.k, null))), i && n && s.a.createElement(S.e, {
						displayText: k.fbt._("Share with members", null, {
							hk: "2XMBQE"
						}),
						onClick: F
					}, s.a.createElement(S.f, null)), !H.isRemoved && !H.isSpam && !d && s.a.createElement(g.a, {
						isSelected: H.isStickied,
						onClick: W,
						text: k.fbt._("Sticky post", null, {
							hk: "3uXoIh"
						})
					}), Object(E.b)(H) && s.a.createElement(S.e, {
						disabled: Boolean((null === (K = H.pollData) || void 0 === K ? void 0 : K.resolvedOptionId) || (null === (Z = H.pollData) || void 0 === Z ? void 0 : Z.predictionStatus) === w.b.Cancelled),
						displayText: k.fbt._("Cancel Prediction", null, {
							hk: "hgWFW"
						}),
						onClick: p
					}, s.a.createElement(S.i, null)), Q && s.a.createElement(S.e, {
						displayText: k.fbt._("Update the end date", null, {
							hk: "FjDpu"
						}),
						onClick: f
					}, s.a.createElement(S.b, null)), q && s.a.createElement(S.e, {
						textClassName: I.a.text,
						onClick: b,
						displayText: k.fbt._("Change the outcome", null, {
							hk: "2FH6j9"
						})
					}, s.a.createElement(S.c, null)), c && s.a.createElement(g.a, {
						isSelected: r,
						onClick: x,
						text: k.fbt._("Distinguish as Mod", null, {
							hk: "3cCdJd"
						})
					}), s.a.createElement(g.a, {
						isSelected: H.isLocked,
						onClick: O,
						text: k.fbt._("Lock comments", null, {
							hk: "YAV8n"
						})
					}), !$ && s.a.createElement(g.a, {
						isSelected: H.isOriginalContent,
						onClick: v,
						text: k.fbt._("Mark as OC", null, {
							hk: "4yx2EO"
						})
					}), s.a.createElement(g.a, {
						isSelected: H.isNSFW,
						onClick: _,
						text: k.fbt._("Mark as NSFW", null, {
							hk: "8QQ2f"
						})
					}), o && "subreddit" === H.belongsTo.type && s.a.createElement(S.e, {
						displayText: k.fbt._("Adjust crowd control", null, {
							hk: "4Drg85"
						}),
						onClick: C
					}, s.a.createElement(S.d, null)), s.a.createElement(g.a, {
						isSelected: H.isSpoiler,
						onClick: B,
						text: k.fbt._("Mark as spoiler", null, {
							hk: "3ef0MU"
						})
					}), s.a.createElement(y.a, {
						contextType: T.a.POST,
						contextData: H,
						moderator: !0
					}))
				};
			var W = n("./src/reddit/components/PostModModeDropdown/_PostModModeDropdown.m.less"),
				B = n.n(W);
			const H = Object(x.v)({
					isProfilePage: x.L,
					pageLayer: e => e
				}),
				V = Object(i.c)({
					layout: x.U,
					isDropdownOpen: (e, t) => {
						let {
							tooltipId: n
						} = t;
						return Object(C.b)(n)(e)
					},
					isModToMemberShareEnabled: O.d.modToMemberShare
				}),
				G = Object(r.b)(V, (e, t) => {
					let {
						post: n
					} = t;
					return {
						onApprovePost: () => e(Object(l.r)(n.id)),
						onCancelPrediction: () => e(Object(c.c)(n.id)),
						onChangePredictionOutcome: () => e(Object(c.d)(n.id)),
						onEditPredictionEnd: () => e(Object(c.e)(n.id)),
						onDistinguishPost: t => e(Object(l.u)(n.id, t)),
						onFlairChanged: (t, o) => e(Object(u.h)({
							post: n,
							previewFlair: t,
							selectedTemplateId: o
						})),
						onFlairPost: t => e(Object(d.i)(t)),
						onLockPost: () => e(Object(l.D)(n.id)),
						onNsfwPost: () => e(Object(l.F)(n.id)),
						onOcPost: () => e(Object(l.I)(n.id)),
						onCcPost: () => {
							e(Object(d.i)(f.a.CROWD_CONTROL)), e(Object(l.t)(n.id))
						},
						onRemovePost: () => e(Object(l.S)(n.id, !1)),
						onModToMemberShareOpened: () => {
							e(Object(d.i)(f.a.MOD_TO_MEMBER_SHARE)), e(Object(l.E)(n.id))
						},
						onSpamPost: () => e(Object(l.S)(n.id, !0)),
						onSpoilerPost: () => e(Object(l.cb)(n.id)),
						onStickyPost: () => e(Object(l.gb)(n.id))
					}
				}),
				U = Object(m.a)(h.a);
			t.default = H(G(Object(b.c)(e => {
				let {
					canEditFlair: t,
					hasModFullPerms: n,
					hasModPostPerms: o,
					isDropdownOpen: r,
					isModToMemberShareEnabled: i,
					isOverlay: c,
					isPostAuthor: d,
					isProfilePage: l,
					layout: u,
					modModeEnabled: m,
					onApprovePost: b,
					onCancelPrediction: f,
					onChangePredictionOutcome: x,
					onEditPredictionEnd: h,
					onDistinguishPost: O,
					onFlairPost: C,
					onLockPost: k,
					onNsfwPost: P,
					onOcPost: j,
					onCcPost: M,
					onRemovePost: g,
					onModToMemberShareOpened: D,
					onSpamPost: N,
					onSpoilerPost: w,
					onStickyPost: S,
					post: y,
					sendEvent: T,
					tooltipId: F
				} = e;
				const I = y.distinguishType === a.J.MODERATOR,
					L = I ? a.J.NONE : a.J.MODERATOR,
					R = Object(p.b)(y.id, c);
				return s.a.createElement(U, {
					className: B.a.dropdown,
					isOpen: r,
					tooltipId: F
				}, s.a.createElement(A, {
					canEditFlair: t,
					hasModFullPerms: n,
					hasModPostPerms: o,
					isDistinguished: I,
					isModToMemberShareEnabled: i,
					isOverlay: c,
					isPostAuthor: d,
					isProfilePage: l,
					layout: u,
					modModeEnabled: m,
					onApprovePost: () => {
						b(), T(Object(_.n)("approve", y.id))
					},
					onCancelPrediction: () => {
						f(), T(Object(v.a)(y.id))
					},
					onChangePredictionOutcome: () => {
						x(), T(Object(v.b)(y.id))
					},
					onEditPredictionEnd: () => {
						h(), T(Object(v.c)(y.id))
					},
					onRemovePost: () => {
						g(), Object(E.b)(y) ? T(Object(v.d)(y.id)) : T(Object(_.n)("remove", y.id))
					},
					onSpamPost: () => {
						N(), T(Object(_.n)("spam", y.id))
					},
					onDistinguishPost: () => {
						O(L), T(Object(_.n)(I ? "undistinguish" : "distinguish", y.id))
					},
					onFlairPost: () => {
						C(R), T(Object(_.n)("post_flair", y.id))
					},
					onLockPost: () => {
						k(), T(Object(_.n)(y.isLocked ? "unlock" : "lock", y.id))
					},
					onNsfwPost: () => {
						P(), T(Object(_.n)(y.isNSFW ? "unmark_nsfw" : "mark_nsfw", y.id))
					},
					onOcPost: () => {
						j(), T(Object(_.n)(y.isOriginalContent ? "unmark_original_content" : "mark_original_content", y.id))
					},
					onCcPost: () => {
						M()
					},
					onModToMemberShareOpened: () => {
						D(), T(Object(_.n)("mod_to_member_share", y.id))
					},
					onSpoilerPost: () => {
						w(), T(Object(_.n)(y.isSpoiler ? "unmark_spoiler" : "mark_spoiler", y.id))
					},
					onStickyPost: () => {
						S(), T(Object(_.n)(y.isStickied ? "unsticky" : "sticky", y.id))
					},
					post: y
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
				return m
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				a = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				c = n("./src/reddit/controls/CheckboxMenuItem/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const u = e => s.a.createElement("div", {
					className: Object(r.a)(d.a.checkboxMenuItem, e.className),
					onClick: e.onClick
				}, s.a.createElement(a.a, {
					className: d.a.expandRight
				}, s.a.createElement(i.a, {
					name: "checkbox",
					isFilled: e.isSelected,
					className: d.a.checkboxIcon
				}), e.text)),
				m = e => {
					let {
						className: t,
						...n
					} = e;
					return s.a.createElement(u, l({
						className: Object(r.a)(d.a.postCheckboxMenuItem, t)
					}, n))
				}
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
				return m
			})), n.d(t, "c", (function() {
				return p
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				d = n.n(c);
			const l = a.a.button("button", d.a),
				u = e => t => s.a.createElement("div", {
					className: t.className
				}, e);

			function m(e, t, n) {
				return b(e, t, !0, {
					...n
				})
			}

			function p(e, t, n) {
				return b(e, t, !1, {
					...n
				})
			}

			function b(e, t, n, o) {
				const a = e,
					c = "function" == typeof t ? t : u(t),
					{
						meta: l
					} = o,
					m = e => s.a.createElement(s.a.Fragment, null, s.a.createElement(a, {
						className: Object(i.a)(d.a.icon, {
							[d.a.isLit]: e
						})
					}), s.a.createElement(c, {
						className: d.a.body
					}), l && s.a.createElement("div", {
						className: d.a.metaContainer
					}, l));
				return n ? e => s.a.createElement("a", {
					"data-redditstyle": !0,
					className: Object(i.a)(e.className, d.a.basicLink),
					href: e.href,
					onClick: e.onClick,
					target: "_blank",
					rel: "noopener noreferrer"
				}, m(e.isLit)) : e => e.href ? s.a.createElement(r.a, {
					"data-redditstyle": !0,
					className: Object(i.a)(e.className, d.a.basicLink),
					to: e.href,
					onClick: e.onClick
				}, m(e.isLit)) : s.a.createElement("button", {
					"data-redditstyle": !0,
					className: Object(i.a)(e.className, d.a.button),
					onClick: e.onClick
				}, m(e.isLit))
			}
		},
		"./src/reddit/helpers/trackers/modHub.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "f", (function() {
				return l
			}));
			var o = n("./src/reddit/selectors/telemetry.ts");
			const s = e => ({
					screen: o.cb(e),
					subreddit: o.lb(e),
					profile: o.T(e),
					userSubreddit: o.ub(e)
				}),
				r = e => t => ({
					source: "mod_hub_nav",
					action: "click",
					noun: e,
					...s(t)
				}),
				i = e => {
					let {
						noun: t,
						action: n,
						source: r,
						paneName: i
					} = e;
					return e => ({
						source: r,
						action: n,
						noun: t,
						...s(e),
						actionInfo: {
							...o.d(e),
							paneName: i
						}
					})
				},
				a = () => e => ({
					source: "breadcrumb",
					action: "click",
					noun: "subreddit",
					...s(e)
				}),
				c = () => e => ({
					source: "id_card",
					action: "click",
					noun: "mod_hub_nav",
					...s(e)
				}),
				d = (e, t) => n => ({
					...s(n),
					source: "modmanagement",
					action: "click",
					noun: "permission",
					setting: {
						value: e,
						values: t
					}
				}),
				l = (e, t, n) => o => ({
					...s(o),
					source: "modmanagement",
					action: "click",
					noun: e,
					setting: {
						value: "",
						values: n
					},
					chat: {
						recipient_user_id: t
					}
				})
		},
		"./src/reddit/helpers/trackers/predictionsModTools.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
			}));
			var o = n("./src/reddit/selectors/telemetry.ts");
			const s = (e, t) => ({
					...Object(o.o)(e),
					post: Object(o.K)(e, t),
					predictions: Object(o.Q)(e, t),
					subreddit: Object(o.lb)(e)
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
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("approve", e.isFilled), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(r.b)("message",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("lock", e.isFilled), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("remove", e.isFilled), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("spam", e.isFilled), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Tag/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(r.b)("tag",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, n) {},
		"./src/reddit/icons/svgs/CircleCheckLight/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
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
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, n) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				c = n.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(r.a)(e => {
				const {
					className: t,
					children: n,
					heightLeft: o,
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
						height: o,
						marginRight: a
					}
				}, Array.isArray(n) && n[0]), s.a.createElement("div", {
					className: c.a.right
				}, Array.isArray(n) && n[1]))
			}, 2)
		},
		"./src/reddit/selectors/experiments/shredditModNav.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const i = (e, t) => t && Object(s.c)(e, {
				experimentEligibilitySelector: r.S,
				experimentName: o.xf
			}) === o.Md
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModerationDropdowns.104c25775b7f7d6bcd53.js.map