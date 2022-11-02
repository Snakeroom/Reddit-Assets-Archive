// https://www.redditstatic.com/desktop2x/ModerationDropdowns.0c19f6023a85d45b6914.js
// Retrieved at 11/2/2022, 1:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModerationDropdowns"], {
		"./src/devPlatform/components/ContextActions/ContextActionsLoader.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return d
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/@loadable/component/dist/loadable.esm.js"),
				i = o("./src/reddit/selectors/experiments/devPlatform.ts");
			const c = Object(a.a)({
				resolved: {},
				chunkName: () => "devPlatform-components-ContextActions",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!o.m[t]
				},
				importAsync: () => Promise.all([o.e("vendors~devPlatform-components-AdminPanel-Utilities-DevPlatformConfig~devPlatform-components-ContextActions"), o.e("devPlatform-components-ContextActions")]).then(o.bind(null, "./src/devPlatform/components/ContextActions/index.tsx")),
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
			});

			function d(e) {
				return Object(r.e)(e => Object(i.a)(e)) ? s.a.createElement(c, {
					contextType: e.contextType,
					contextData: e.contextData,
					moderator: e.moderator
				}) : null
			}
		},
		"./src/devPlatform/constants.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return n
			})), o.d(t, "c", (function() {
				return s
			})), o.d(t, "d", (function() {
				return r
			})), o.d(t, "e", (function() {
				return a
			})), o.d(t, "a", (function() {
				return i
			}));
			const n = "devvit-gateway-url",
				s = "devvit-mock-metadata",
				r = "devvit-debug-logging",
				a = "DEV_PLAT__OPEN_USER_INPUT_MODAL";
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
				a = o("./src/reddit/actions/modal.ts"),
				i = o("./src/reddit/actions/toaster.ts"),
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
				return async o => {
					try {
						await o(Object(s.d)(e, {
							resolvedOptionId: t
						}));
						const n = Object(i.e)(l._("Outcome changed", null, {
							hk: "Io0na"
						}), d.b.SuccessMod);
						o(Object(i.f)(n))
					} catch {
						const e = Object(i.e)(l._("Oops! Something went wrong. Please note that the outcome can be changed just once per Prediction", null, {
							hk: "4B5dNf"
						}), d.b.Error);
						o(Object(i.f)(e))
					}
				}
			}
			const u = e => Object(a.h)(c.a.ECON_PREDICTIONS_CHANGE_END_TIME, {
					postId: e
				}),
				b = e => Object(a.h)(c.a.ECON_PREDICTIONS_CANCEL_PREDICTION, {
					postId: e
				}),
				f = e => Object(a.h)(c.a.ECON_PREDICTIONS_CHANGE_OUTCOME, {
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
				a = o("./src/lib/prettyPrintNumber/index.ts"),
				i = o("./src/reddit/components/BadgeCounter/index.m.less"),
				c = o.n(i);
			t.a = e => {
				let {
					className: t,
					isActive: o,
					showEmpty: n,
					unreadCount: i,
					testId: d
				} = e;
				return o ? s.a.createElement("span", {
					className: Object(r.a)(t, c.a.badgeCounter, {
						[c.a.mEmpty]: n || i < 1
					}),
					"data-testid": d
				}, n || i < 1 ? "" : Object(a.b)(i)) : null
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
			var n, s, r, a = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/components/ModToolsFlatlist/constants.ts"),
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
					[i.a.Approve]: s.Approve,
					[i.a.Remove]: s.Remove,
					[i.a.Spam]: s.Spam,
					[i.a.Flair]: s.Flair
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
						i = o ? l.a[o] : l.a[r.Default];
					return Object(a.a)(n, s, i)
				},
				x = e => {
					const t = e && b[e],
						o = t ? l.a[t] : l.a[r.Default];
					return Object(a.a)(o, p.a.ButtonTextWrapper, l.a.ButtonTextWrapper)
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
				a = o("./src/higherOrderComponents/asTooltip.tsx"),
				i = o("./src/lib/classNames/index.ts"),
				c = o("./src/lib/lessComponent.tsx"),
				d = o("./src/reddit/components/BadgeCounter/index.tsx"),
				l = o("./src/reddit/controls/Dropdown/index.tsx"),
				m = o("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				p = o("./src/reddit/icons/fonts/index.tsx"),
				u = o("./src/reddit/components/ModerationDropdown/index.tsx"),
				b = o("./src/reddit/components/ModerationDropdown/_ModerationDropdown.m.less"),
				f = o.n(b);
			const x = c.a.wrapped(l.a, "StyledDropdown", f.a),
				h = Object(a.a)(x),
				O = c.a.div("Separator", f.a),
				_ = (e, t) => o => r.a.createElement("span", {
					className: Object(i.a)(f.a.IconWrapper, o.className)
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
					sendEventWithName: a
				} = e, i = Object(m.c)(Object(p.b)("mod_queue"), `${n.fbt._("Mod Queue",null,{hk:"2fqLkD"})}`), c = Object(m.b)(_("message", o.hasUnreadModmail), `${n.fbt._("Modmail",null,{hk:"1IvnFd"})}`);
				return r.a.createElement("div", {
					className: t
				}, r.a.createElement(h, {
					isFixed: !0,
					isOpen: s,
					tooltipId: u.a
				}, r.a.createElement(i, {
					href: "/r/mod/about/modqueue",
					onClick: () => a("mod_queue")
				}), r.a.createElement(O, null), r.a.createElement(c, {
					href: "https://mod.reddit.com/mail/all",
					isLit: o.hasUnreadModmail,
					onClick: () => a("mod_mail")
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
				a = () => null;
			t.b = Object(n.a)({
				ErrorComponent: a,
				getComponent: () => Object(s.a)(() => o.e("ModerationDropdowns").then(o.bind(null, "./src/reddit/components/ModerationDropdown/_ModerationDropdown.tsx"))).then(e => e.default),
				LoadingComponent: a
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
				a = o.n(r),
				i = o("./node_modules/react-redux/es/index.js"),
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
				C = o("./src/reddit/components/PostFlairPicker/helpers.ts"),
				E = o("./src/reddit/components/PostFlairPicker/index.m.less"),
				k = o.n(E);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(n || (n = {}));
			const P = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.UNSET;
					return `PostFlair__Modal-[postId: ${e}]-isOverlay[${t}]-position[${o}]`
				},
				j = Object(c.c)({
					flairData: _.d,
					subreddit: v.Y
				});
			class M extends a.a.Component {
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
					} = this.state, o = Object(C.c)(this.props.flairs) || null;
					return Object(C.b)(e, t, o)
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
					} = e, i = r.displayText, {
						templates: c,
						templateIds: d
					} = n, {
						canSave: l
					} = this.canSave();
					return a.a.createElement(u.a, {
						className: o
					}, a.a.createElement(p.a, {
						onClosePressed: e.closeModal,
						title: s.fbt._("Select {subredditName} flair", [s.fbt._param("subredditName", i)], {
							hk: "1lDMWS"
						})
					}), a.a.createElement(b.a, {
						flair: t,
						flairTemplateType: O.d.LinkFlair,
						placeholderText: s.fbt._("Post Title", null, {
							hk: "43RsbC"
						})
					}), a.a.createElement(f.a, {
						flair: t,
						flairTemplateType: O.d.LinkFlair,
						subredditId: r.id,
						templates: c,
						templateIds: d,
						onChange: this.setSelectedFlair
					}), a.a.createElement("div", {
						className: k.a.buttonsRow
					}, a.a.createElement(x.l, {
						disabled: !l,
						onClick: this.onApply
					}, s.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), a.a.createElement(x.o, {
						className: k.a.clearButton,
						onClick: this.onClear
					}, s.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const g = Object(i.b)(j, (e, t) => ({
				closeModal: () => e(Object(m.i)(t.modalId))
			}))(M);
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
				return C
			})), o.d(t, "k", (function() {
				return E
			})), o.d(t, "d", (function() {
				return k
			})), o.d(t, "b", (function() {
				return P
			})), o.d(t, "c", (function() {
				return j
			})), o.d(t, "e", (function() {
				return M
			})), o.d(t, "g", (function() {
				return g
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/lessComponent.tsx"),
				a = o("./src/reddit/controls/Dropdown/Row.tsx"),
				i = o("./src/reddit/icons/fonts/index.tsx"),
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
				C = r.a.wrapped(p.a, "Icon", x.a),
				E = r.a.wrapped(u.a, "Icon", x.a),
				k = () => s.a.createElement(i.a, {
					name: "mod_mute",
					className: x.a.Icon
				}),
				P = () => s.a.createElement(i.a, {
					name: "calendar",
					className: x.a.Icon
				}),
				j = () => s.a.createElement(b.a, {
					className: x.a.svgIcon
				}),
				M = r.a.wrapped(a.b, "DropdownRow", x.a),
				g = r.a.div("ListContainer", x.a)
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
				a = o("./node_modules/reselect/es/index.js"),
				i = o("./src/lib/constants/index.ts"),
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
				C = o("./src/reddit/models/Prediction/Tournament/index.ts"),
				E = o("./src/reddit/selectors/tooltip.ts"),
				k = o("./node_modules/fbt/lib/FbtPublic.js"),
				P = o("./src/reddit/components/ModModeReports/helpers.ts"),
				j = o("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				M = o("./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts"),
				g = o("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				D = o("./src/reddit/helpers/isCrosspost.ts"),
				N = o("./src/reddit/models/Flair/index.ts"),
				w = o("./src/reddit/models/Prediction/index.ts"),
				S = o("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx"),
				y = o("./src/devPlatform/components/ContextActions/ContextActionsLoader.tsx"),
				T = o("./src/devPlatform/constants.ts"),
				F = o("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				I = o.n(F);
			const L = (e, t) => Object(M.b)({
					breakpointType: M.a.HideIfVWLarger,
					flatlistItem: e,
					postLayout: t
				}),
				R = () => void 0,
				A = e => {
					let {
						canEditFlair: t,
						hasModFullPerms: o,
						hasModPostPerms: n,
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
						onEditPredictionEnd: f,
						onDistinguishPost: x,
						onFlairPost: h,
						onLockPost: O,
						onNsfwPost: _,
						onOcPost: v,
						onCcPost: E,
						onRemovePost: M,
						onModToMemberShareOpened: F,
						onSpamPost: A,
						onStickyPost: W,
						onSpoilerPost: B,
						post: V
					} = e;
					var H, G, U, K, Z;
					const Q = (null === (H = V.pollData) || void 0 === H ? void 0 : H.isPrediction) && !(null === (G = V.pollData) || void 0 === G ? void 0 : G.resolvedOptionId),
						q = (null === (U = V.pollData) || void 0 === U ? void 0 : U.isPrediction) && null !== V.pollData.resolvedOptionId,
						Y = V.flair.filter(e => e.type !== N.f.Nsfw && e.type !== N.f.Spoiler).length > 0,
						z = Object(P.b)(V),
						J = !(!V.approvedBy || !z),
						X = i ? void 0 : l,
						$ = Object(D.a)(V),
						ee = m ? L : R;
					return s.a.createElement(S.g, null, n && s.a.createElement(s.a.Fragment, null, !V.isSponsored && s.a.createElement(s.a.Fragment, null, s.a.createElement(S.e, {
						className: ee(j.a.Approve, X),
						displayText: J ? k.fbt._("Reapprove", null, {
							hk: "39rQqr"
						}) : V.approvedBy ? k.fbt._("Approved", null, {
							hk: "1j7d8E"
						}) : k.fbt._("Approve", null, {
							hk: "29dW3F"
						}),
						onClick: p
					}, s.a.createElement(S.a, null)), s.a.createElement(S.e, {
						className: ee(j.a.Remove, X),
						displayText: V.isRemoved ? k.fbt._("Removed", null, {
							hk: "3rSb2M"
						}) : k.fbt._("Remove", null, {
							hk: "dflNO"
						}),
						onClick: M
					}, s.a.createElement(S.i, null)), s.a.createElement(S.e, {
						className: ee(j.a.Spam, X),
						displayText: V.isSpam ? k.fbt._("Removed as spam", null, {
							hk: "2olZT7"
						}) : k.fbt._("Remove as spam", null, {
							hk: "4A9ZT8"
						}),
						onClick: A
					}, s.a.createElement(S.j, null))), t && s.a.createElement(S.e, {
						className: ee(j.a.Flair, X),
						displayText: Y ? k.fbt._("Edit post flair", null, {
							hk: "2oet1"
						}) : k.fbt._("Add post flair", null, {
							hk: "1iPNLQ"
						}),
						onClick: h
					}, s.a.createElement(S.k, null))), a && o && s.a.createElement(S.e, {
						displayText: k.fbt._("Share with members", null, {
							hk: "2XMBQE"
						}),
						onClick: F
					}, s.a.createElement(S.f, null)), !V.isRemoved && !V.isSpam && !d && s.a.createElement(g.a, {
						isSelected: V.isStickied,
						onClick: W,
						text: k.fbt._("Sticky post", null, {
							hk: "3uXoIh"
						})
					}), Object(C.b)(V) && s.a.createElement(S.e, {
						disabled: Boolean((null === (K = V.pollData) || void 0 === K ? void 0 : K.resolvedOptionId) || (null === (Z = V.pollData) || void 0 === Z ? void 0 : Z.predictionStatus) === w.b.Cancelled),
						displayText: k.fbt._("Cancel Prediction", null, {
							hk: "hgWFW"
						}),
						onClick: u
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
						isSelected: V.isLocked,
						onClick: O,
						text: k.fbt._("Lock comments", null, {
							hk: "YAV8n"
						})
					}), !$ && s.a.createElement(g.a, {
						isSelected: V.isOriginalContent,
						onClick: v,
						text: k.fbt._("Mark as OC", null, {
							hk: "4yx2EO"
						})
					}), s.a.createElement(g.a, {
						isSelected: V.isNSFW,
						onClick: _,
						text: k.fbt._("Mark as NSFW", null, {
							hk: "8QQ2f"
						})
					}), n && "subreddit" === V.belongsTo.type && s.a.createElement(S.e, {
						displayText: k.fbt._("Adjust crowd control", null, {
							hk: "4Drg85"
						}),
						onClick: E
					}, s.a.createElement(S.d, null)), s.a.createElement(g.a, {
						isSelected: V.isSpoiler,
						onClick: B,
						text: k.fbt._("Mark as spoiler", null, {
							hk: "3ef0MU"
						})
					}), s.a.createElement(y.a, {
						contextType: T.a.POST,
						contextData: V,
						moderator: !0
					}))
				};
			var W = o("./src/reddit/components/PostModModeDropdown/_PostModModeDropdown.m.less"),
				B = o.n(W);
			const V = Object(x.v)({
					isProfilePage: x.L,
					pageLayer: e => e
				}),
				H = Object(a.c)({
					layout: x.U,
					isDropdownOpen: (e, t) => {
						let {
							tooltipId: o
						} = t;
						return Object(E.b)(o)(e)
					},
					isModToMemberShareEnabled: O.d.modToMemberShare
				}),
				G = Object(r.b)(H, (e, t) => {
					let {
						post: o
					} = t;
					return {
						onApprovePost: () => e(Object(l.r)(o.id)),
						onCancelPrediction: () => e(Object(c.c)(o.id)),
						onChangePredictionOutcome: () => e(Object(c.d)(o.id)),
						onEditPredictionEnd: () => e(Object(c.e)(o.id)),
						onDistinguishPost: t => e(Object(l.u)(o.id, t)),
						onFlairChanged: (t, n) => e(Object(m.h)({
							post: o,
							previewFlair: t,
							selectedTemplateId: n
						})),
						onFlairPost: t => e(Object(d.i)(t)),
						onLockPost: () => e(Object(l.D)(o.id)),
						onNsfwPost: () => e(Object(l.F)(o.id)),
						onOcPost: () => e(Object(l.I)(o.id)),
						onCcPost: () => {
							e(Object(d.i)(f.a.CROWD_CONTROL)), e(Object(l.t)(o.id))
						},
						onRemovePost: () => e(Object(l.T)(o.id, !1)),
						onModToMemberShareOpened: () => {
							e(Object(d.i)(f.a.MOD_TO_MEMBER_SHARE)), e(Object(l.E)(o.id))
						},
						onSpamPost: () => e(Object(l.T)(o.id, !0)),
						onSpoilerPost: () => e(Object(l.db)(o.id)),
						onStickyPost: () => e(Object(l.hb)(o.id))
					}
				}),
				U = Object(p.a)(h.a);
			t.default = V(G(Object(b.c)(e => {
				let {
					canEditFlair: t,
					hasModFullPerms: o,
					hasModPostPerms: n,
					isDropdownOpen: r,
					isModToMemberShareEnabled: a,
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
					onFlairPost: E,
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
				const I = y.distinguishType === i.J.MODERATOR,
					L = I ? i.J.NONE : i.J.MODERATOR,
					R = Object(u.b)(y.id, c);
				return s.a.createElement(U, {
					className: B.a.dropdown,
					isOpen: r,
					tooltipId: F
				}, s.a.createElement(A, {
					canEditFlair: t,
					hasModFullPerms: o,
					hasModPostPerms: n,
					isDistinguished: I,
					isModToMemberShareEnabled: a,
					isOverlay: c,
					isPostAuthor: d,
					isProfilePage: l,
					layout: m,
					modModeEnabled: p,
					onApprovePost: () => {
						b(), T(Object(_.l)("approve", y.id))
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
						g(), Object(C.b)(y) ? T(Object(v.d)(y.id)) : T(Object(_.l)("remove", y.id))
					},
					onSpamPost: () => {
						N(), T(Object(_.l)("spam", y.id))
					},
					onDistinguishPost: () => {
						O(L), T(Object(_.l)(I ? "undistinguish" : "distinguish", y.id))
					},
					onFlairPost: () => {
						E(R), T(Object(_.l)("post_flair", y.id))
					},
					onLockPost: () => {
						k(), T(Object(_.l)(y.isLocked ? "unlock" : "lock", y.id))
					},
					onNsfwPost: () => {
						P(), T(Object(_.l)(y.isNSFW ? "unmark_nsfw" : "mark_nsfw", y.id))
					},
					onOcPost: () => {
						j(), T(Object(_.l)(y.isOriginalContent ? "unmark_original_content" : "mark_original_content", y.id))
					},
					onCcPost: () => {
						M()
					},
					onModToMemberShareOpened: () => {
						D(), T(Object(_.l)("mod_to_member_share", y.id))
					},
					onSpoilerPost: () => {
						w(), T(Object(_.l)(y.isSpoiler ? "unmark_spoiler" : "mark_spoiler", y.id))
					},
					onStickyPost: () => {
						S(), T(Object(_.l)(y.isStickied ? "unsticky" : "sticky", y.id))
					},
					post: y
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
				a = o("./src/reddit/icons/fonts/index.tsx"),
				i = o("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
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
				}, s.a.createElement(i.a, {
					className: d.a.expandRight
				}, s.a.createElement(a.a, {
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
				a = o("./src/lib/classNames/index.ts"),
				i = o("./src/lib/lessComponent.tsx"),
				c = o("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				d = o.n(c);
			const l = i.a.button("button", d.a),
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
				const i = e,
					c = "function" == typeof t ? t : m(t),
					{
						meta: l
					} = n,
					p = e => s.a.createElement(s.a.Fragment, null, s.a.createElement(i, {
						className: Object(a.a)(d.a.icon, {
							[d.a.isLit]: e
						})
					}), s.a.createElement(c, {
						className: d.a.body
					}), l && s.a.createElement("div", {
						className: d.a.metaContainer
					}, l));
				return o ? e => s.a.createElement("a", {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, d.a.basicLink),
					href: e.href,
					onClick: e.onClick,
					target: "_blank",
					rel: "noopener noreferrer"
				}, p(e.isLit)) : e => e.href ? s.a.createElement(r.a, {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, d.a.basicLink),
					to: e.href,
					onClick: e.onClick
				}, p(e.isLit)) : s.a.createElement("button", {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, d.a.button),
					onClick: e.onClick
				}, p(e.isLit))
			}
		},
		"./src/reddit/helpers/trackers/predictionsModTools.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return r
			})), o.d(t, "f", (function() {
				return a
			})), o.d(t, "a", (function() {
				return i
			})), o.d(t, "d", (function() {
				return c
			})), o.d(t, "b", (function() {
				return d
			})), o.d(t, "e", (function() {
				return l
			}));
			var n = o("./src/reddit/selectors/telemetry.ts");
			const s = (e, t) => ({
					...Object(n.o)(e),
					post: Object(n.K)(e, t),
					predictions: Object(n.Q)(e, t),
					subreddit: Object(n.kb)(e)
				}),
				r = e => t => ({
					...s(t, e),
					source: "predictions",
					action: "click",
					noun: "edit_prediction_end_dt"
				}),
				a = e => t => ({
					...s(t, e),
					source: "edit_prediction_end_dt",
					action: "click",
					noun: "confirm"
				}),
				i = e => t => ({
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
				a = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = o.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("approve", e.isFilled), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(a.a, null, e.desc))
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
				a = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = o.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("lock", e.isFilled), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = o.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("remove", e.isFilled), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = o.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("spam", e.isFilled), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(a.a, null, e.desc))
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
				a = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				c = o.n(i);

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
					gutter: i,
					...l
				} = e;
				return s.a.createElement("div", d({
					className: Object(a.a)(c.a.expandRightContainer, t)
				}, l), s.a.createElement("div", {
					className: c.a.left,
					style: {
						flexBasis: r,
						height: n,
						marginRight: i
					}
				}, Array.isArray(o) && o[0]), s.a.createElement("div", {
					className: c.a.right
				}, Array.isArray(o) && o[1]))
			}, 2)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModerationDropdowns.0c19f6023a85d45b6914.js.map