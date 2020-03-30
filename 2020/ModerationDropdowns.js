// https://www.redditstatic.com/desktop2x/ModerationDropdowns.3f133dfda94f884810a9.js
// Retrieved at 3/30/2020, 2:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModerationDropdowns"], {
		"./src/reddit/components/ModModeReports/_ModModeReports.m.less": function(e, t, s) {
			e.exports = {
				ActiveIconContainer: "_1SHmcPFNOYth9V07BrQbWe",
				activeIconContainer: "_1SHmcPFNOYth9V07BrQbWe",
				IgnoreIconContainer: "_231DL0a-pe2vt5a5wQFu-n",
				ignoreIconContainer: "_231DL0a-pe2vt5a5wQFu-n",
				ActiveReportIcon: "_2PbiVXRQ59T8F7WkkcmNJJ",
				activeReportIcon: "_2PbiVXRQ59T8F7WkkcmNJJ",
				ChevronDown: "_1K34tAjeMu5wwkF99T5U5N",
				chevronDown: "_1K34tAjeMu5wwkF99T5U5N",
				IgnoreReport: "heUDQXPPxJ8ilm83gzEOL",
				ignoreReport: "heUDQXPPxJ8ilm83gzEOL",
				ReportIcon: "GFTfF_oGSdBjkBx808plH",
				reportIcon: "GFTfF_oGSdBjkBx808plH",
				iconStyles: "KzVJcOJnWakQs6yTjNYG1",
				ReportsContainer: "_3p5RUX-xUh-Z5ajgM1VO9u",
				reportsContainer: "_3p5RUX-xUh-Z5ajgM1VO9u",
				collapseReports: "_38db2AwPYQmVZVN7aI39nE",
				Button: "_38jNHw-Fx74ukOx-fzwEzP",
				button: "_38jNHw-Fx74ukOx-fzwEzP",
				Reports: "BvzGzzQ_gL4MGFqyaQ3zC",
				reports: "BvzGzzQ_gL4MGFqyaQ3zC",
				NumReports: "_4TK2s77zuWq2GpAmqfk1o",
				numReports: "_4TK2s77zuWq2GpAmqfk1o"
			}
		},
		"./src/reddit/components/ModModeReports/_ModModeReports.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/app/strings/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/Reports/index.tsx"),
				d = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/helpers/isPost.ts"),
				m = s("./src/reddit/helpers/trackers/modTools.ts"),
				u = s("./src/reddit/i18n/utils.ts"),
				x = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				b = s("./src/reddit/icons/fonts/Report/index.tsx"),
				h = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				f = s("./src/reddit/components/ModModeReports/_ModModeReports.m.less"),
				v = s.n(f);
			const O = c.a.span("IgnoreIconContainer", v.a),
				_ = c.a.span("ActiveIconContainer", v.a),
				g = c.a.wrapped(h.a, "ChevronDown", v.a),
				w = c.a.wrapped(b.a, "ActiveReportIcon", v.a),
				E = c.a.wrapped(x.a, "IgnoreReport", v.a),
				j = c.a.wrapped(b.a, "ReportIcon", v.a),
				k = c.a.div("ReportsContainer", v.a),
				M = c.a.wrapped(d.c, "Button", v.a),
				R = c.a.wrapped(i.a, "Reports", v.a),
				C = c.a.div("NumReports", v.a),
				N = e => {
					let {
						className: t,
						handleToggleExpando: s,
						isHistoricalReports: o,
						numReports: c,
						modReports: i,
						userReports: d,
						collapseReports: l,
						language: p
					} = e;
					return n.a.createElement(k, {
						className: Object(a.a)(t, {
							[v.a.collapseReports]: l
						})
					}, l ? n.a.createElement(O, null, n.a.createElement(E, null)) : n.a.createElement(_, null, n.a.createElement(w, null)), l ? n.a.createElement(C, null, c) : n.a.createElement(R, {
						modReports: i,
						userReports: d
					}), o ? n.a.createElement(M, {
						onClick: s,
						text: Object(u.c)("old reports")
					}, n.a.createElement(g, null)) : n.a.createElement(M, {
						onClick: s,
						text: l ? Object(r.a)(p, "posts.restoreReports") : Object(r.a)(p, "posts.ignoreReports")
					}, l ? n.a.createElement(j, null) : n.a.createElement(E, null)))
				};
			class I extends n.a.Component {
				constructor(e) {
					super(e), this.handleIgnoreReports = () => {
						let e;
						this.props.onIgnoreReports();
						const t = this.props.reportable.ignoreReports ? "restore_reports" : "ignore_reports";
						e = Object(p.a)(this.props.reportable.id) ? Object(m.g)(t, this.props.reportable.id) : Object(m.f)(t, this.props.reportable.id), this.props.sendEvent(e)
					}, this.handleToggleHistoricalReports = () => {
						this.setState({
							historicalReportsCollapsed: !this.state.historicalReportsCollapsed
						})
					}, this.state = {
						historicalReportsCollapsed: !0
					}
				}
				render() {
					const {
						className: e,
						language: t,
						reportable: s
					} = this.props, o = (s.modReportsDismissed && s.modReportsDismissed.length || 0) + (s.userReportsDismissed && s.userReportsDismissed.length || 0);
					return n.a.createElement("div", null, o ? n.a.createElement(N, {
						className: e,
						collapseReports: this.state.historicalReportsCollapsed,
						language: t,
						handleToggleExpando: this.handleToggleHistoricalReports,
						isHistoricalReports: !0,
						numReports: o,
						modReports: s.modReportsDismissed,
						userReports: s.userReportsDismissed
					}) : n.a.createElement(N, {
						className: e,
						handleToggleExpando: this.handleIgnoreReports,
						collapseReports: s.ignoreReports,
						language: t,
						numReports: s.numReports || 0,
						modReports: s.modReports,
						userReports: s.userReports
					}))
				}
			}
			t.default = Object(l.c)(I)
		},
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			}));
			const o = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				n = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				r = e => (e.numReports || 0) > 0
		},
		"./src/reddit/components/ModToolsFlatlist/breakpoints.m.less": function(e, t, s) {
			e.exports = {
				HideIfVWSmaller: "_3_rOJpfw54EqNa6daNkKzY",
				hideIfVwSmaller: "_3_rOJpfw54EqNa6daNkKzY",
				ApproveGroup: "LoIAKSBD5_isA5qtrC3Kt",
				approveGroup: "LoIAKSBD5_isA5qtrC3Kt",
				DefaultVariant: "_1LDTBaBSnv4jL7lV98ayQL",
				defaultVariant: "_1LDTBaBSnv4jL7lV98ayQL",
				CompactVariant: "_2SLG9GIeu2AqBhz2XpW8ow",
				compactVariant: "_2SLG9GIeu2AqBhz2XpW8ow",
				RemoveGroup: "_3LzZxt89CjBbx__WYlCPCh",
				removeGroup: "_3LzZxt89CjBbx__WYlCPCh",
				SpamGroup: "_2WaHNFliLea9SKyF3nlBx8",
				spamGroup: "_2WaHNFliLea9SKyF3nlBx8",
				FlairGroup: "_129dedXMiIcel_grUelwoG",
				flairGroup: "_129dedXMiIcel_grUelwoG",
				HideIfVWLarger: "_1RO0TIeDG89QPdOWgZwUvR",
				hideIfVwLarger: "_1RO0TIeDG89QPdOWgZwUvR"
			}
		},
		"./src/reddit/components/ModToolsFlatlist/constants.ts": function(e, t, s) {
			"use strict";
			var o;
			s.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.Flair = "FLAIR", e.Spam = "SPAM", e.Remove = "REMOVE", e.Approve = "APPROVE"
				}(o || (o = {}))
		},
		"./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return p
			}));
			var o, n, r, a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				i = s("./src/reddit/components/ModToolsFlatlist/breakpoints.m.less"),
				d = s.n(i);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(o || (o = {})),
			function(e) {
				e.Approve = "ApproveGroup", e.Remove = "RemoveGroup", e.Spam = "SpamGroup", e.Flair = "FlairGroup"
			}(n || (n = {})),
			function(e) {
				e.Compact = "CompactVariant", e.Default = "DefaultVariant"
			}(r || (r = {}));
			const l = {
					[c.a.Approve]: n.Approve,
					[c.a.Remove]: n.Remove,
					[c.a.Spam]: n.Spam,
					[c.a.Flair]: n.Flair
				},
				p = e => {
					const t = l[e.flatlistItem],
						s = d.a[e.breakpointType],
						o = d.a[t],
						n = e.isCompact ? d.a[r.Compact] : d.a[r.Default];
					return Object(a.a)(s, o, n)
				}
		},
		"./src/reddit/components/ModerationDropdown/_ModerationDropdown.m.less": function(e, t, s) {
			e.exports = {
				StyledDropdown: "_3WeRItzSNTP8PlJhYPlcOV",
				styledDropdown: "_3WeRItzSNTP8PlJhYPlcOV",
				Separator: "_25jFfk04fRizfTaV4T8_fC",
				separator: "_25jFfk04fRizfTaV4T8_fC"
			}
		},
		"./src/reddit/components/ModerationDropdown/_ModerationDropdown.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/higherOrderComponents/asTooltip.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/controls/Dropdown/index.tsx"),
				d = s("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				l = s("./src/reddit/icons/svgs/Envelope/index.tsx"),
				p = e => r.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					d: "M14.5,11.1924 C14.5,13.6544 10.644,15.4524 10.204,15.6484 C10.14,15.6774 10.069,15.6924 10,15.6924 C9.931,15.6924 9.86,15.6774 9.796,15.6484 C9.356,15.4524 5.5,13.6544 5.5,11.1924 L5.5,6.8844 C5.5,6.6714 5.635,6.4824 5.837,6.4124 L9.837,5.0274 C9.942,4.9904 10.058,4.9904 10.163,5.0274 L14.163,6.4124 C14.365,6.4824 14.5,6.6714 14.5,6.8844 L14.5,11.1924 Z M16,2.0004 L4,2.0004 C2.897,2.0004 2,2.8974 2,4.0004 L2,16.0004 C2,17.1024 2.897,18.0004 4,18.0004 L16,18.0004 C17.103,18.0004 18,17.1024 18,16.0004 L18,4.0004 C18,2.8974 17.103,2.0004 16,2.0004 Z"
				})),
				m = s("./src/reddit/components/ModerationDropdown/index.tsx"),
				u = s("./src/reddit/components/ModerationDropdown/_ModerationDropdown.m.less"),
				x = s.n(u);
			const b = c.a.wrapped(i.a, "StyledDropdown", x.a),
				h = Object(a.a)(b),
				f = c.a.div("Separator", x.a);
			t.default = e => {
				const {
					className: t,
					unreadNotifications: s,
					isOpen: n,
					sendEventWithName: a
				} = e, c = Object(d.b)(p, "".concat(o.fbt._("Mod Queue", null, {
					hk: "2fqLkD"
				}))), i = Object(d.b)(l.a, "".concat(o.fbt._("Modmail Beta", null, {
					hk: "2miezs"
				})), !0), u = Object(d.b)(l.a, "".concat(o.fbt._("Modmail", null, {
					hk: "1IvnFd"
				})), !0);
				return r.a.createElement("div", {
					className: t
				}, r.a.createElement(h, {
					isFixed: !0,
					isOpen: n,
					tooltipId: m.a
				}, r.a.createElement(c, {
					href: "/r/mod/about/modqueue",
					onClick: () => a("mod_queue")
				}), r.a.createElement(f, null), r.a.createElement(i, {
					href: "https://mod.reddit.com/mail/all",
					isLit: s.hasUnreadModmail,
					onClick: () => a("mod_mail")
				}), r.a.createElement(f, null), r.a.createElement(u, {
					href: "/message/moderator/",
					isLit: s.hasUnreadOldModmail,
					onClick: () => a("old_mod_mail")
				}), r.a.createElement(f, null)))
			}
		},
		"./src/reddit/components/ModerationDropdown/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/higherOrderComponents/makeAsync.tsx"),
				n = s("./src/lib/loadWithRetries/index.ts");
			const r = "Header--Moderation",
				a = () => null;
			t.b = Object(o.a)({
				ErrorComponent: a,
				getComponent: () => Object(n.a)(() => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/ModerationDropdown/_ModerationDropdown.tsx"))).then(e => e.default),
				LoadingComponent: a
			})
		},
		"./src/reddit/components/PostFlairPicker/index.m.less": function(e, t, s) {
			e.exports = {
				buttonsRow: "cF9DU_4WDAKS4gs43ct2_",
				clearButton: "_3vB6Y9PiwJ0YV6c9MGbDwT"
			}
		},
		"./src/reddit/components/PostFlairPicker/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return k
			}));
			var o, n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				c = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/higherOrderComponents/asModal/index.tsx"),
				p = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/components/FlairPickerTitle/index.tsx"),
				u = s("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				x = s("./src/reddit/components/FlairPreview/index.tsx"),
				b = s("./src/reddit/components/FlairSearch/index.tsx"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/models/Flair/index.ts"),
				v = s("./src/reddit/selectors/moderatorPermissions.ts"),
				O = s("./src/reddit/selectors/postFlair.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				g = s("./src/reddit/selectors/telemetry.ts"),
				w = s("./src/reddit/components/PostFlairPicker/helpers.ts"),
				E = s("./src/reddit/components/PostFlairPicker/index.m.less"),
				j = s.n(E);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(o || (o = {}));
			const k = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.UNSET;
					return "PostFlair__Modal-[postId: ".concat(e, "]-isOverlay[").concat(t, "]-position[").concat(s, "]")
				},
				M = Object(i.c)({
					flairData: O.d,
					subreddit: _.P,
					isMod: (e, t) => !!Object(v.j)(e, t)
				});
			class R extends a.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.onApply = () => {
						const {
							previewFlair: e
						} = this.state, t = e && e.templateId;
						this.props.onFlairChanged({
							previewFlair: e,
							selectedTemplateId: t
						}), this.props.closeModal && this.props.closeModal(), this.track(this.getTrackingNoun("flairadd_mod", "flairadd_user"))
					}, this.onClear = () => this.setSelectedFlair(null), this.setSelectedFlair = e => {
						this.setState({
							previewFlair: e
						})
					}, this.track = e => this.props.sendEvent(t => ({
						source: "post_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(g.subredditById)(t, this.props.subredditId)
					}));
					const t = Object(w.c)(e.flairs);
					this.state = {
						previewFlair: t || null
					}
				}
				canSave() {
					const {
						templates: e
					} = this.props.flairData, {
						previewFlair: t
					} = this.state, s = Object(w.c)(this.props.flairs) || null;
					return Object(w.b)(e, t, s)
				}
				render() {
					const {
						props: e
					} = this, {
						previewFlair: t
					} = this.state, {
						className: s,
						flairData: o,
						subreddit: r
					} = e, c = r.displayText, {
						templates: i,
						templateIds: d
					} = o, {
						canSave: l
					} = this.canSave();
					return a.a.createElement(u.a, {
						className: s
					}, a.a.createElement(m.a, {
						onClosePressed: e.closeModal,
						title: n.fbt._("Select {subredditName} flair", [n.fbt._param("subredditName", c)], {
							hk: "1lDMWS"
						})
					}), a.a.createElement(x.a, {
						flair: t,
						flairTemplateType: f.d.LinkFlair,
						placeholderText: n.fbt._("Post Title", null, {
							hk: "43RsbC"
						})
					}), a.a.createElement(b.a, {
						flair: t,
						flairTemplateType: f.d.LinkFlair,
						subredditId: r.id,
						templates: i,
						templateIds: d,
						onChange: this.setSelectedFlair
					}), a.a.createElement("div", {
						className: j.a.buttonsRow
					}, a.a.createElement(h.f, {
						disabled: !l,
						onClick: this.onApply
					}, n.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), a.a.createElement(h.i, {
						className: j.a.clearButton,
						onClick: this.onClear
					}, n.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const C = Object(c.b)(M, (e, t) => ({
				closeModal: () => e(Object(p.i)(t.modalId))
			}))(R);
			t.a = Object(l.a)(Object(d.c)(C))
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less": function(e, t, s) {
			e.exports = {
				ListContainer: "VHCAEHBEuD8bln8MDFl35",
				listContainer: "VHCAEHBEuD8bln8MDFl35",
				Icon: "_3WbGqnEpw_ds1P508Qawma",
				icon: "_3WbGqnEpw_ds1P508Qawma",
				DropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				dropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				CheckboxMenuItem: "_9csa2XobkeFZUX8Fc_FNY",
				checkboxMenuItem: "_9csa2XobkeFZUX8Fc_FNY"
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			})), s.d(t, "d", (function() {
				return b
			})), s.d(t, "f", (function() {
				return h
			})), s.d(t, "g", (function() {
				return f
			})), s.d(t, "h", (function() {
				return v
			})), s.d(t, "i", (function() {
				return O
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "c", (function() {
				return g
			})), s.d(t, "e", (function() {
				return w
			}));
			var o = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				r = s("./src/reddit/controls/Dropdown/Row.tsx"),
				a = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				c = s("./src/reddit/icons/fonts/Envelope/index.tsx"),
				i = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				d = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				l = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				p = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				m = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				u = s.n(m);
			const x = o.a.wrapped(a.a, "Icon", u.a),
				b = o.a.wrapped(c.a, "Icon", u.a),
				h = o.a.wrapped(i.a, "Icon", u.a),
				f = o.a.wrapped(d.a, "Icon", u.a),
				v = o.a.wrapped(l.a, "Icon", u.a),
				O = o.a.wrapped(p.a, "Icon", u.a),
				_ = o.a.wrapped(n.b, "CheckboxMenuItem", u.a),
				g = o.a.wrapped(r.b, "DropdownRow", u.a),
				w = o.a.div("ListContainer", u.a)
		},
		"./src/reddit/components/PostModModeDropdown/_PostModModeDropdown.m.less": function(e, t, s) {
			e.exports = {
				dropdown: "_1DqDpxxERz4UiuumI26tIZ"
			}
		},
		"./src/reddit/components/PostModModeDropdown/_PostModModeDropdown.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postFlair.ts"),
				p = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/constants/modals.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/controls/Dropdown/index.tsx"),
				f = s("./src/reddit/featureFlags/index.ts"),
				v = s("./src/reddit/helpers/trackers/modTools.ts"),
				O = s("./src/reddit/selectors/tooltip.ts"),
				_ = s("./src/app/strings/index.ts"),
				g = s("./src/reddit/components/ModModeReports/helpers.ts"),
				w = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				E = s("./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts"),
				j = s("./src/reddit/constants/postLayout.ts"),
				k = s("./src/reddit/helpers/isCrosspost.ts"),
				M = s("./src/reddit/i18n/utils.ts"),
				R = s("./src/reddit/models/Flair/index.ts"),
				C = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx");
			const N = (e, t) => Object(E.b)({
					breakpointType: E.a.HideIfVWLarger,
					flatlistItem: e,
					isCompact: t
				}),
				I = () => void 0;
			var P = e => {
					const {
						canEditFlair: t,
						language: s,
						hasModFullPerms: o,
						hasModPostPerms: r,
						isDistinguished: a,
						isModToMemberShareEnabled: c,
						isOverlay: i,
						isPostAuthor: d,
						isProfilePage: l,
						layout: p,
						modModeEnabled: m,
						onApprovePost: u,
						onDistinguishPost: x,
						onFlairPost: b,
						onLockPost: h,
						onNsfwPost: f,
						onOcPost: v,
						onRemovePost: O,
						onModToMemberShareOpened: E,
						onSpamPost: P,
						onStickyPost: y,
						onSpoilerPost: D,
						post: S
					} = e, L = S.flair.filter(e => e.type !== R.f.Nsfw && e.type !== R.f.Spoiler).length > 0, T = Object(g.b)(S), F = !(!S.approvedBy || !T), A = !i && p === j.g.Compact, B = Object(k.a)(e.post), W = m ? N : I;
					return n.a.createElement(C.e, null, r && n.a.createElement(n.a.Fragment, null, !S.isSponsored && n.a.createElement(n.a.Fragment, null, n.a.createElement(C.c, {
						className: W(w.a.Approve, A),
						displayText: F ? Object(_.a)(s, "posts.reapprove") : S.approvedBy ? Object(_.a)(s, "posts.approved") : Object(_.a)(s, "posts.approve"),
						onClick: u
					}, n.a.createElement(C.a, null)), n.a.createElement(C.c, {
						className: W(w.a.Remove, A),
						displayText: S.isRemoved ? Object(_.a)(s, "posts.removed.text") : Object(_.a)(s, "posts.remove"),
						onClick: O
					}, n.a.createElement(C.g, null)), n.a.createElement(C.c, {
						className: W(w.a.Spam, A),
						displayText: S.isSpam ? Object(_.a)(s, "modTools.removedAsSpam") : Object(_.a)(s, "modTools.removeAsSpam"),
						onClick: P
					}, n.a.createElement(C.h, null))), t && n.a.createElement(C.c, {
						className: W(w.a.Flair, A),
						displayText: L ? Object(_.a)(s, "modTools.editPostFlair") : Object(_.a)(s, "modTools.addPostFlair"),
						onClick: b
					}, n.a.createElement(C.i, null))), c && o && n.a.createElement(C.c, {
						displayText: Object(M.c)("Share with members"),
						onClick: E
					}, n.a.createElement(C.d, null)), !S.isRemoved && !l && n.a.createElement(C.b, {
						isSelected: S.isStickied,
						onClick: y,
						text: Object(M.c)("Sticky post")
					}), d && n.a.createElement(C.b, {
						isSelected: a,
						onClick: x,
						text: Object(M.c)("Distinguish as Mod")
					}), n.a.createElement(C.b, {
						isSelected: S.isLocked,
						onClick: h,
						text: Object(M.c)("Lock comments")
					}), !B && n.a.createElement(C.b, {
						isSelected: S.isOriginalContent,
						onClick: v,
						text: Object(M.c)("Mark as OC")
					}), n.a.createElement(C.b, {
						isSelected: S.isNSFW,
						onClick: f,
						text: Object(M.c)("Mark as NSFW")
					}), n.a.createElement(C.b, {
						isSelected: S.isSpoiler,
						onClick: D,
						text: Object(M.c)("Mark as Spoiler")
					}))
				},
				y = s("./src/reddit/components/PostModModeDropdown/_PostModModeDropdown.m.less"),
				D = s.n(y);
			const S = Object(b.t)({
					isProfilePage: b.G,
					pageLayer: e => e
				}),
				L = Object(a.c)({
					layout: b.M,
					isDropdownOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(O.b)(s)(e)
					},
					isModToMemberShareEnabled: f.d.modToMemberShare
				}),
				T = Object(r.b)(L, (e, t) => {
					let {
						post: s
					} = t;
					return {
						onApprovePost: () => e(Object(d.u)(s.id)),
						onDistinguishPost: t => e(Object(d.w)(s.id, t)),
						onFlairChanged: (t, o) => e(Object(l.h)({
							post: s,
							previewFlair: t,
							selectedTemplateId: o
						})),
						onFlairPost: t => e(Object(i.i)(t)),
						onLockPost: () => e(Object(d.G)(s.id)),
						onNsfwPost: () => e(Object(d.K)(s.id)),
						onOcPost: () => e(Object(d.L)(s.id)),
						onRemovePost: () => e(Object(d.U)(s.id, !1)),
						onModToMemberShareOpened: () => {
							e(Object(i.i)(x.a.MOD_TO_MEMBER_SHARE)), e(Object(d.H)(s.id))
						},
						onSpamPost: () => e(Object(d.U)(s.id, !0)),
						onSpoilerPost: () => e(Object(d.Y)(s.id)),
						onStickyPost: () => e(Object(d.bb)(s.id))
					}
				}),
				F = Object(p.a)(h.a),
				A = S(T(Object(u.c)(e => {
					const {
						canEditFlair: t,
						hasModFullPerms: s,
						hasModPostPerms: o,
						isDropdownOpen: r,
						isModToMemberShareEnabled: a,
						isOverlay: i,
						isPostAuthor: d,
						isProfilePage: l,
						language: p,
						layout: u,
						modModeEnabled: x,
						onApprovePost: b,
						onDistinguishPost: h,
						onFlairPost: f,
						onLockPost: O,
						onNsfwPost: _,
						onOcPost: g,
						onRemovePost: w,
						onModToMemberShareOpened: E,
						onSpamPost: j,
						onSpoilerPost: k,
						onStickyPost: M,
						post: R,
						sendEvent: C,
						tooltipId: N
					} = e, I = R.distinguishType === c.C.MODERATOR, y = I ? c.C.NONE : c.C.MODERATOR, S = Object(m.b)(R.id, i);
					return n.a.createElement(F, {
						className: D.a.dropdown,
						isOpen: r,
						tooltipId: N
					}, n.a.createElement(P, {
						canEditFlair: t,
						hasModFullPerms: s,
						hasModPostPerms: o,
						isDistinguished: I,
						isModToMemberShareEnabled: a,
						isOverlay: i,
						isPostAuthor: d,
						isProfilePage: l,
						layout: u,
						language: p,
						modModeEnabled: x,
						onApprovePost: () => {
							b(), C(Object(v.i)("approve", R.id))
						},
						onRemovePost: () => {
							w(), C(Object(v.i)("remove", R.id))
						},
						onSpamPost: () => {
							j(), C(Object(v.i)("spam", R.id))
						},
						onDistinguishPost: () => {
							h(y), C(Object(v.i)(I ? "undistinguish" : "distinguish", R.id))
						},
						onFlairPost: () => {
							f(S), C(Object(v.i)("post_flair", R.id))
						},
						onLockPost: () => {
							O(), C(Object(v.i)(R.isLocked ? "unlock" : "lock", R.id))
						},
						onNsfwPost: () => {
							_(), C(Object(v.i)(R.isNSFW ? "unmark_nsfw" : "mark_nsfw", R.id))
						},
						onOcPost: () => {
							g(), C(Object(v.i)(R.isOriginalContent ? "unmark_original_content" : "mark_original_content", R.id))
						},
						onModToMemberShareOpened: () => {
							E(), C(Object(v.i)("mod_to_member_share", R.id))
						},
						onSpoilerPost: () => {
							k(), C(Object(v.i)(R.isSpoiler ? "unmark_spoiler" : "mark_spoiler", R.id))
						},
						onStickyPost: () => {
							M(), C(Object(v.i)(R.isStickied ? "unsticky" : "sticky", R.id))
						},
						post: R
					}))
				})));
			t.default = A
		},
		"./src/reddit/components/Reports/index.m.less": function(e, t, s) {
			e.exports = {
				ReportText: "_3TPyo-_MFDbVaI7ExIkD1G",
				reportText: "_3TPyo-_MFDbVaI7ExIkD1G",
				ReportsTitle: "_21BmvfYiT1eKfN4AeE812a",
				reportsTitle: "_21BmvfYiT1eKfN4AeE812a",
				Reports: "ZL1AYPlBJX_2kYn3OATX6",
				reports: "ZL1AYPlBJX_2kYn3OATX6"
			}
		},
		"./src/reddit/components/Reports/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/Reports/index.m.less"),
				c = s.n(a);
			const {
				fbt: i
			} = s("./node_modules/fbt/lib/FbtPublic.js"), d = r.a.div("ReportText", c.a), l = r.a.div("ReportsTitle", c.a), p = r.a.div("Reports", c.a);
			t.a = e => {
				const {
					className: t,
					modReports: s,
					userReports: o
				} = e;
				return n.a.createElement("div", {
					className: t
				}, s && s.length > 0 && n.a.createElement(p, null, n.a.createElement(l, null, i._("Moderator Reports", null, {
					hk: "3hZ0oX"
				})), s.map(e => {
					let [t, s] = e;
					return n.a.createElement(d, {
						key: "mod-".concat(s)
					}, "u/".concat(s, ": ").concat(t))
				})), o && o.length > 0 && n.a.createElement(p, null, n.a.createElement(l, null, i._("User Reports", null, {
					hk: "2KeCLz"
				})), o.map(e => {
					let [t, s] = e;
					return n.a.createElement(d, {
						key: "user-".concat(t)
					}, "".concat(s, ": ").concat(t))
				})))
			}
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.m.less": function(e, t, s) {
			e.exports = {
				removalReasonButton: "_3IEDcFIIs_TeXsZtKZGzUd",
				TextWrapper: "smOzqVIOoNqmSJcyBX2N6",
				textWrapper: "smOzqVIOoNqmSJcyBX2N6",
				Button: "_1rNBkuuOkN2SorEXyRkYjB",
				button: "_1rNBkuuOkN2SorEXyRkYjB",
				ApproveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				approveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				RemoveButton: "_2OvUr_pd3kddsNP_f35S28",
				removeButton: "_2OvUr_pd3kddsNP_f35S28"
			}
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return l
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "a", (function() {
				return u
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				i = s.n(c);
			const d = a.a.span("TextWrapper", i.a),
				l = a.a.wrapped(e => n.a.createElement("button", {
					className: e.className,
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick
				}, e.children, e.text && n.a.createElement(d, null, e.text, " ")), "Button", i.a),
				p = a.a.wrapped(l, "ApproveButton", i.a),
				m = a.a.wrapped(l, "RemoveButton", i.a),
				u = e => n.a.createElement("button", {
					className: Object(r.a)(i.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/controls/CheckboxMenuItem/index.m.less": function(e, t, s) {
			e.exports = {
				sharedIconStyles: "_19iKCOTFpWIyFwZ0bqQhg",
				checkbox: "_2zOuGd5s9dLeXmKJ8TJF9T",
				checkboxSelected: "LevaZhN5EO7Pei7YvAi1W",
				checkboxMenuItem: "_2eawLPCtwzvTZhWKtaUgZQ",
				expandRight: "_34Odk7t6y-rCPxPcYJa4Nw",
				postCheckboxMenuItem: "_3LyKu57c-QkPvlFvAgWop5"
			}
		},
		"./src/reddit/controls/CheckboxMenuItem/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				c = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				i = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				d = s("./src/reddit/controls/CheckboxMenuItem/index.m.less"),
				l = s.n(d);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			const u = e => n.a.createElement("div", {
					className: Object(r.a)(l.a.checkboxMenuItem, e.className),
					onClick: e.onClick
				}, n.a.createElement(i.a, {
					className: l.a.expandRight
				}, e.isSelected ? n.a.createElement(c.a, {
					className: l.a.checkboxSelected
				}) : n.a.createElement(a.a, {
					className: l.a.checkbox
				}), e.text)),
				x = e => {
					var {
						className: t
					} = e, s = m(e, ["className"]);
					return n.a.createElement(u, p({
						className: Object(r.a)(l.a.postCheckboxMenuItem, t)
					}, s))
				};
			t.b = u
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/lodash/throttle.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				c = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				p = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = s("./src/reddit/controls/Dropdown/index.m.less"),
				u = s.n(m),
				x = s("./src/reddit/controls/Dropdown/row.m.less"),
				b = s.n(x);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var f = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			class v extends a.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = n()(() => {
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
					}, s = Object(c.a)(b.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? a.a.createElement(i.a, h({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && a.a.createElement("span", {
						className: s
					}, e.children), a.a.createElement("span", {
						className: Object(c.a)(b.a.text, e.textClassName)
					}, e.displayText)) : a.a.createElement(p.a, h({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: n()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? a.a.createElement("div", null, e.children) : a.a.createElement("span", {
						className: s
					}, e.children)), e.displayText && a.a.createElement("span", {
						className: Object(c.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && a.a.createElement(l.a, {
						className: b.a.checkmark
					}), e.showDropdownTriangle && a.a.createElement(d.a, {
						className: u.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				var {
					className: t
				} = e, s = f(e, ["className"]);
				const o = Object(c.a)(b.a.row, t, {
					[b.a.mIsInteractive]: !s.noHover,
					[b.a.mIsSelected]: s.isSelected,
					[b.a.topics]: s.isTopicsStyle
				});
				return a.a.createElement(v, h({
					className: o
				}, s))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, s) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				iconStyles: "_2XOVBjNLHjJIznEsn35vs2",
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
			var o = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/controls/InternalLink/index.tsx"),
				r = s("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				a = s.n(r);
			t.a = o.a.wrapped(n.a, "unstyledInternalLink", a.a)
		},
		"./src/reddit/helpers/isCrosspost.ts": function(e, t, s) {
			"use strict";
			t.a = function(e) {
				return !!e && !!e.crosspostRootId
			}
		},
		"./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less": function(e, t, s) {
			e.exports = {
				basicLink: "_1YWXCINvcuU7nk0ED-bta8",
				metaContainer: "_1HGeWoy6faY2UWkCD7cYoW",
				outboundLink: "_1Jtes5zRWNpwobWM4O2Unx",
				button: "_2KotRmn9DgdA58Ikji2mnV",
				icon: "_2BQPq3iyS8t6kKtFmtkB30",
				isLit: "_3RofgwJEAbXD6OnLxEZ8Kg",
				body: "vzhy90YD0qH7ZDJi7xMGw"
			}
		},
		"./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				d = s("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				l = s.n(d);
			const p = c.a.button("button", l.a),
				m = e => t => n.a.createElement("div", {
					className: t.className
				}, e);
			t.b = function(e, t, s, o) {
				const c = e,
					d = "function" == typeof t ? t : m(t);
				return s ? e => n.a.createElement("a", {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, l.a.basicLink),
					href: e.href,
					onClick: e.onClick,
					target: "_blank"
				}, n.a.createElement(c, {
					className: Object(a.a)(l.a.icon, {
						[l.a.isLit]: e.isLit
					})
				}), n.a.createElement(d, {
					className: l.a.body
				}), o && n.a.createElement("div", {
					className: l.a.metaContainer
				}, o), n.a.createElement(i.a, {
					className: l.a.outboundLink
				})) : e => e.href ? n.a.createElement(r.a, {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, l.a.basicLink),
					to: e.href,
					onClick: e.onClick
				}, n.a.createElement(c, {
					className: Object(a.a)(l.a.icon, {
						[l.a.isLit]: !!e.isLit
					})
				}), n.a.createElement(d, {
					className: l.a.body
				}), o && n.a.createElement("div", {
					className: l.a.metaContainer
				}, o)) : n.a.createElement("button", {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, l.a.button),
					onClick: e.onClick
				}, n.a.createElement(c, {
					className: Object(a.a)(l.a.icon, {
						[l.a.isLit]: e.isLit
					})
				}), n.a.createElement(d, null))
			}
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = s.n(c);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("approve"), i.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.m.less": function(e, t, s) {
			e.exports = {
				DropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp",
				dropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp"
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				c = s.n(a);
			const i = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("dropdownTriangle"), " ").concat(e.className)
			}), "DropdownTriangle", c.a);
			t.a = i
		},
		"./src/reddit/icons/fonts/Envelope/index.m.less": function(e, t, s) {
			e.exports = {
				Envelope: "gsQG-L1wCCIUe8dJEOA6C",
				envelope: "gsQG-L1wCCIUe8dJEOA6C"
			}
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Envelope/index.m.less"),
				c = s.n(a);
			const i = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("envelope"), " ").concat(e.className)
			}), "Envelope", c.a);
			t.a = i
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.m.less": function(e, t, s) {
			e.exports = {
				IgnoreReportIcon: "_3iBgiSReJX5KcPORjE1Yuf",
				ignoreReportIcon: "_3iBgiSReJX5KcPORjE1Yuf"
			}
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/IgnoreReport/index.m.less"),
				c = s.n(a);
			const i = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("ignoreReport"), " ").concat(e.className)
			}), "IgnoreReportIcon", c.a);
			t.a = i
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = s.n(c);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("lock"), i.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = s.n(c);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("remove"), i.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = s.n(c);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("report"), i.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = s.n(c);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("spam"), i.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Tag/index.m.less": function(e, t, s) {
			e.exports = {
				TagIcon: "_2e-QjEsH3vADXyIpSzLW6_",
				tagIcon: "_2e-QjEsH3vADXyIpSzLW6_"
			}
		},
		"./src/reddit/icons/fonts/Tag/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Tag/index.m.less"),
				c = s.n(a);
			const i = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("tag"), " ").concat(e.className)
			}), "TagIcon", c.a);
			t.a = i
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, s) {
			e.exports = {
				iconFont: "WxKparxaBCy4-EWML7xc3",
				approveIcon: "MAe2tslj1FAD6GliiZ3it",
				commentIcon: "_3ch9jJ0painNf41PmU4F9i",
				lockIcon: "XHMWG1CPWX8RXeNg-o5-R",
				modActions: "_3phKxmomoio9ulzAoL4XhZ",
				moderateIcon: "_2Xt7ltq8LezAkf8ZF8x9dv",
				removeIcon: "_2IVG3b9-lczna8tonL9FWB",
				reportIcon: "_1MDjRAzxk1RSTB12748O1v",
				shareIcon: "xwmljjCrovDE5C9MasZja",
				spamIcon: "_1Gn6JH0U8GJtJXSIc54IMU",
				stickyIcon: "hMF1wBi2Z6Lh9zHskfhX1",
				calendarIcon: "_2YXLfgRGcJoCJROcTAGqir",
				adminIcon: "_3ACtZ0jvC5KDN8RNxR0lXX",
				archivedIcon: "_2trXhUAJMhIhxp8a2zvOVP",
				liveIcon: "_3cdJ6BHH65ws78AzuO0KLw"
			}
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("g", null, n.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/Envelope/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M7.79,9.16,2.48,3.85A2.49,2.49,0,0,1,3.75,3.5h12.5a2.49,2.49,0,0,1,1.27.35L12.21,9.16A3.13,3.13,0,0,1,7.79,9.16Z"
			}), n.a.createElement("path", {
				d: "M13.09,10.31,18.4,5a2.47,2.47,0,0,1,.35,1.27v7.5a2.5,2.5,0,0,1-2.5,2.5H3.75a2.5,2.5,0,0,1-2.5-2.5V6.27A2.47,2.47,0,0,1,1.6,5l5.31,5.31a4.37,4.37,0,0,0,6.18,0Z"
			}))
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), n.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, s) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				i = s.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			t.a = Object(r.a)(e => {
				const {
					className: t,
					children: s,
					heightLeft: o,
					widthLeft: r,
					gutter: c
				} = e, p = l(e, ["className", "children", "heightLeft", "widthLeft", "gutter"]);
				return n.a.createElement("div", d({
					className: Object(a.a)(i.a.expandRightContainer, t)
				}, p), n.a.createElement("div", {
					className: i.a.left,
					style: {
						flexBasis: r,
						height: o,
						marginRight: c
					}
				}, Array.isArray(s) && s[0]), n.a.createElement("div", {
					className: i.a.right
				}, Array.isArray(s) && s[1]))
			}, 2)
		}
	}
]);
//# sourceMappingURL=ModerationDropdowns.3f133dfda94f884810a9.js.map