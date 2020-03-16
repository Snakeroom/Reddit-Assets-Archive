// https://www.redditstatic.com/desktop2x/reddit-components-ModHub-flairs-PostFlairManagement~reddit-components-ModHub-flairs-UserFlairManagement.ca631da0053623acd9ac.js
// Retrieved at 3/16/2020, 6:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ModHub-flairs-PostFlairManagement~reddit-components-ModHub-flairs-UserFlairManagement"], {
		"./src/reddit/actions/flairManagement/index.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = s("./src/lib/copyToClipboard/index.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/postFlair.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				r = s("./src/reddit/actions/userFlair.ts"),
				l = s("./src/reddit/constants/flair.ts"),
				c = s("./src/reddit/constants/posts.ts"),
				d = s("./src/lib/constants/index.ts"),
				p = s("./src/reddit/models/Vote/index.ts"),
				m = s("./src/reddit/i18n/utils.ts"),
				u = s("./src/reddit/models/Flair/index.ts"),
				h = s("./src/reddit/models/Toast/index.ts"),
				g = s("./src/reddit/selectors/postFlair.ts"),
				b = s("./src/reddit/selectors/userFlair.ts"),
				C = s("./src/reddit/actions/flairManagement/constants.ts");
			s.d(t, "d", (function() {
				return f
			})), s.d(t, "a", (function() {
				return v
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "c", (function() {
				return O
			}));
			const f = (e, t) => async (s, a) => {
				const n = t.type === u.d.UserFlair,
					l = n ? b.e : g.e,
					c = n ? r.n : o.l,
					d = n ? r.m : o.k,
					p = l(a(), {
						subredditId: e
					});
				if (!p) throw new Error("Cannot update settings!");
				const C = [],
					f = t.displaySettings.isEnabled,
					v = t.permissions.canAssignOwn;
				f !== p.displaySettings.isEnabled && C.push(s(c(e, f)));
				const E = f && !p.displaySettings.isEnabled && !p.permissions.canAssignOwn;
				(v !== p.permissions.canAssignOwn || E) && C.push(s(d(e, v)));
				const x = (await Promise.all(C)).every(Boolean);
				return x || s(Object(i.e)({
					kind: h.b.Error,
					text: Object(m.c)("Something went wrong")
				})), x
			}, v = e => async (t, s) => {
				t(Object(a.a)(e) ? Object(i.e)(Object(i.d)(Object(m.c)("Copied flair ID!"), h.b.SuccessCommunity)) : Object(i.e)(Object(i.d)(Object(m.c)("Something went wrong"), h.b.Error)))
			}, E = Object(n.a)(C.a), x = Object(n.a)(C.b), O = (e, t) => async (s, a) => {
				const n = (e => {
					const {
						postId: t
					} = e, s = t.slice(3);
					return Object.assign({
						id: t,
						postId: t,
						allAwardings: [],
						approvedAtUTC: void 0,
						approvedBy: void 0,
						author: "reddit",
						authorId: "t2_1qwk",
						awardCountsById: {},
						bannedAtUTC: void 0,
						bannedBy: void 0,
						contestMode: !1,
						created: Date.now() - d.J,
						crosspostParentId: null,
						crosspostRootId: null,
						discussionType: null,
						distinguishType: null,
						domain: "reddit.com",
						events: [],
						flair: [],
						ignoreReports: !0,
						isApproved: !1,
						isArchived: !1,
						isAuthorPremium: !1,
						isBlank: !1,
						isCrosspostable: !0,
						isGildable: !0,
						isLocked: !1,
						isMediaOnly: !1,
						isMeta: !1,
						isNSFW: !1,
						isOriginalContent: !1,
						isPinned: !1,
						isRemoved: !1,
						isScoreHidden: !1,
						isSpam: !1,
						isSpoiler: !1,
						isSponsored: !1,
						isStickied: !1,
						liveCommentsWebsocket: null,
						media: null,
						modReports: [],
						numComments: 100,
						numCrossposts: 0,
						numReports: 0,
						permalink: "/comments/".concat(s),
						postCategories: null,
						previewComments: [],
						removedBy: null,
						removedByCategory: null,
						score: 11111,
						sendReplies: !1,
						source: {
							displayText: "reddit.com",
							outboundUrl: "https://www.reddit.com",
							url: "https://www.reddit.com"
						},
						suggestedSort: void 0,
						thumbnail: {
							url: "default",
							width: null,
							height: null
						},
						title: "This is an example post",
						upvoteRatio: .1,
						userReports: [],
						viewCount: 12345,
						voteState: p.a.notVoted
					}, e)
				})({
					belongsTo: {
						id: e,
						type: c.a.SUBREDDIT
					},
					flair: [t],
					postId: l.e
				});
				s(E(n))
			}
		},
		"./src/reddit/components/BlockNavigation/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router/esm/react-router.js"),
				r = s("./src/reddit/actions/modal.ts");
			const l = "non-empty-string-to-block-navigation";
			class c extends n.a.Component {
				constructor() {
					super(...arguments), this.onBeforeUnload = e => {
						if (this.props.enabled) return e.preventDefault(), e.returnValue = "", ""
					}, this.message = (e, t) => {
						return !0 === (this.props.confirmNavigate || this.defaultConfirmNavigate)(e, t) || l
					}, this.defaultConfirmNavigate = (e, t) => {
						const {
							ignoreCurrentLocation: s = !0,
							location: a,
							showModal: n,
							dialogId: o
						} = this.props;
						return !(!s || e.pathname !== a.pathname) || (o && n(), !1)
					}
				}
				componentDidMount() {
					this.props.blockOnBeforeUnload && window.addEventListener("beforeunload", this.onBeforeUnload)
				}
				componentWillUnmount() {
					this.props.blockOnBeforeUnload && window.removeEventListener("beforeunload", this.onBeforeUnload)
				}
				render() {
					const {
						enabled: e = !0
					} = this.props;
					return n.a.createElement(i.b, {
						message: this.message,
						when: e
					})
				}
			}
			t.a = Object(o.b)(null, (e, t) => ({
				showModal: () => e(Object(r.h)(t.dialogId))
			}))(Object(i.i)(c))
		},
		"./src/reddit/components/ModHub/flairs/FlairManagement/FlairSettingsModal/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1J76qb5HBy2bYaTNJsgjRQ",
				modalHeader: "_34gci9egz3Lvx3-STpfNID",
				contentBlock: "Bv6ZRypNeiF988NrqtV_-",
				assignOwnControl: "yDJKjvn3AuAahOSYVsmN2",
				details: "Pk8ny_YG59Ztx9VspQ3qF",
				modalFooter: "_2ifl0uRUahQVqB35XKqJMH",
				loadingIcon: "_1vCqQS850C3SRB28BQKa9c",
				disabled: "_2mowWGWRE_iy-2cDlstT_N"
			}
		},
		"./src/reddit/components/ModHub/flairs/FlairManagement/FlairTemplateEditor/ColorSwitch/index.m.less": function(e, t, s) {
			e.exports = {
				switch: "_3w3fE7K9kEYfKQNJfS7h1V",
				dark: "_1xkEHX0d9o3Leyz85QBWyK",
				light: "_2OSFC0fFqJUB10_LJPZyUh"
			}
		},
		"./src/reddit/components/ModHub/flairs/FlairManagement/FlairTemplateEditor/PostAppearanceEditor/PostFlairStyleTemplateEditor/index.m.less": function(e, t, s) {
			e.exports = {
				container: "E8V2n_zGKhMURqvEjj_MQ",
				leftFieldset: "_2B9dHYxe8C55ooQKc4HVbG",
				rightFieldset: "nhsR7f8a-odEVtQkD2ib3",
				imageUploadHelpText: "_3AWYW8095eSH07dsirGiy2"
			}
		},
		"./src/reddit/components/ModHub/flairs/FlairManagement/FlairTemplateEditor/PostAppearanceEditor/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2bUb177wy8SfzvupJhnGQm",
				layoutSwitch: "_2AgVMPLD10-uvYb_f_6J_j",
				postPreview: "_2QGQ9RGZIrujMmofDGKNIb",
				postWrapper: "U-g4XNsEdnQPA16-R9-MF",
				card: "_3YkT6O_PLA-Tgn8B_MdVZb",
				postComponent: "_1FpOHu-2X05dj66wRTFLQD",
				classic: "_3fPXWT4i8aZtN3wnvz7fnb",
				postFlairStyleTemplateEditor: "_3F9nD6NLUOAjVddW0LwPpq"
			}
		},
		"./src/reddit/components/ModHub/flairs/FlairManagement/FlairTemplateEditor/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1RWRNUFARQ67YPY0T-C1jF",
				mainContent: "_2DEL2D_A1ZIK29CtYqdFzR",
				leftFieldset: "_3z7u3YO0GUisGjIfFcnHMg",
				rightFieldset: "_2vfzPMlNuCIhrMc0lQyYdT",
				labelWithTooltip: "_4Uaw8lVxHo2lY4j4t_XzL",
				disabledControl: "_392ahLMjIjFG3-AGPQwLWl",
				cssClassErrorText: "ku1Pmz9v_zKW5vb2FAMtC",
				cssClassInfoText: "zTzmzC7HblUsSCKUqsj7u",
				radioOption: "_2Xwmo3U9NfvRjFZjumh1mH",
				postAppearanceEditor: "_2Z7Qv3fH_yOsjWSQXQVYuR",
				buttonsRow: "_1yYtAhZ28OzxktteQTDUu-",
				loadingIcon: "_1XjCjvbFr0Mtgdl8kzgfhG",
				cssClassInput: "SA-3EuoQcj0-WJ7WmMcX9",
				dropdownSelector: "_2mfUKkihI-iTELKYoDENik",
				dropdownSelectorButton: "gQ7NneYZ6tweP5jrEvMfc"
			}
		},
		"./src/reddit/components/ModHub/flairs/FlairManagement/FlairTemplateRow/index.m.less": function(e, t, s) {
			e.exports = {
				row: "_2Ge0QyGqQ2ohMh3nujj9kI",
				flairPreviewCell: "_3SFR7AjB3wiRzkfpGm8pc3",
				cssClassCell: "_1tSivioO33rCxJr8NbnGCB",
				settingsCell: "_2JkfNJ7R1JE4IjqcpoT9Kc",
				flairIdCell: "_2_R05GOuWSUDX3PyASVGmm",
				flairComponent: "_36dQHXyJCojtRpWCQSngY9",
				removeButton: "_36ymF43Lc8scdO9e4wilot",
				reordering: "_1BI3W_3n3-wJyOB0q5bD5r"
			}
		},
		"./src/reddit/components/ModHub/flairs/FlairManagement/FlairsDisabledBanner/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2PM4mIanlspkCfVf5Sj0QB"
			}
		},
		"./src/reddit/components/ModHub/flairs/FlairManagement/LabeledControl/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_8NYQ3gScy-Wk0h4-kYr5",
				topLabel: "_1VadQpxPDRwv7NdnGts8pb",
				labelText: "_32kO6m8pH6JDfvC5n-8Gz-",
				leftLabel: "_3BQnoB5bKs-pvvm4jXSqb4"
			}
		},
		"./src/reddit/components/ModHub/flairs/FlairManagement/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2V6ckA-uEsF-HfsqbS3PCM",
				icon: "_54dKejbOLtpr14TV40ksT",
				header: "ebXTqyXoNZinSoqY2ZdQN",
				details: "_3QhMX3iKRWXx2prOvqUrwn"
			}
		},
		"./src/reddit/components/ModHub/flairs/FlairManagement/connector.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return p
			}));
			var a = s("./src/reddit/actions/emoji.ts"),
				n = s("./src/reddit/actions/flairManagement/index.ts"),
				o = s("./src/reddit/actions/modal.ts"),
				i = s("./src/reddit/featureFlags/index.ts"),
				r = s("./src/reddit/selectors/activeModalId.ts"),
				l = s("./src/reddit/selectors/emojis.ts"),
				c = s("./src/reddit/selectors/platform.ts");
			const d = {
					activeModalId: r.a,
					allowNavigationCallback: c.a,
					areFlairRestrictionsEnabled: i.d.flairRestrictions,
					subredditEmojiData: l.f
				},
				p = (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						closeAllModals: () => e(Object(o.f)()),
						onCopyTemplateId: t => e(Object(n.a)(t)),
						onGetSubredditEmojisIfNeeded: () => e(Object(a.m)(s)),
						onSaveSettings: t => e(Object(n.d)(s, t)),
						toggleModal: t => e(Object(o.i)(t))
					}
				}
		},
		"./src/reddit/components/ModHub/flairs/FlairManagement/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_37KbqgukAyMf3s-j7AnBWR",
				topBar: "aF7EPRLqx7OlHhB0WLt-D",
				contentContainer: "_2HFh2ax8D_Jy7s1JHIHvUf",
				dragItem: "_3Yi1TDHslArM_O4ZmGiRCs",
				dragIcon: "slRmsO8r_7d7nV3JEKKi1",
				disabledBanner: "_2zhcnoXRRItZEJVXtE1Dez",
				table: "_32J_8vxjcfCvTyyaKNxzMV",
				tableHead: "_3X_p9WCvR91mqMt0eaAzjT",
				flairPreviewColHeader: "_2so4kKMPMvORvnsfCZIrI6",
				cssClassColHeader: "_3VPBNym2HhcfxWqX_XAtad",
				settingsColHeader: "_13gi3MUppeK5PJ1_waWROR",
				flairIdColHeader: "_2iWLnXdkCIwJvCNl66f_JX",
				tableBody: "_6ltpvqnPD-3oGbRWx8i3b"
			}
		},
		"./src/reddit/components/ModHub/flairs/FlairManagement/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./src/config.ts"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./src/reddit/components/BlockNavigation/index.tsx"),
				r = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				l = s("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				c = s("./src/reddit/components/ModHub/InfoTooltip/index.tsx"),
				d = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				p = s("./src/reddit/components/StructuredStyles/DragItem/index.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/flair.ts"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/controls/Sortable/index.tsx"),
				b = s("./src/reddit/helpers/flair.ts"),
				C = s("./src/reddit/models/Flair/index.ts"),
				f = s("./src/reddit/selectors/telemetry.ts");
			const v = e => e === C.d.LinkFlair ? "postflairmanagement" : "userflairmanagement",
				E = e => Object.assign({}, f.defaults(e), {
					subreddit: f.subreddit(e),
					userSubreddit: f.userSubreddit(e)
				}),
				x = e => t => s => Object.assign({}, E(s), {
					source: v(t),
					action: "click",
					noun: e
				}),
				O = e => (t, s) => a => Object.assign({}, E(a), {
					source: v(t),
					action: "toggle",
					noun: e,
					actionInfo: f.actionInfo(a, {
						settingValue: s ? "on" : "off"
					})
				}),
				y = x("remove"),
				T = x("edit"),
				j = x("save_settings"),
				S = x("add"),
				w = O("assign_own"),
				I = O("enable"),
				k = O("mods_only"),
				_ = O("edit_text"),
				P = (e, t) => t ? S(e) : T(e),
				D = e => O("post_flair_template")(C.d.LinkFlair, e),
				N = (e, t) => s => Object.assign({}, E(s), {
					source: v(e),
					action: "click",
					noun: "reorder",
					actionInfo: f.actionInfo(s, {
						count: t
					})
				}),
				F = {
					[C.a.All]: "text_and_emoji",
					[C.a.Emoji]: "emoji_only",
					[C.a.Text]: "text_only"
				},
				M = (e, t) => {
					return x(F[t] || "text_and_emoji")(e)
				},
				R = (e, t) => s => Object.assign({}, E(s), {
					source: v(e),
					action: "click",
					noun: "limit_number_emojis",
					actionInfo: f.actionInfo(s, {
						settingValue: t
					})
				});
			var B, U = s("./src/reddit/i18n/components.tsx"),
				A = s("./src/reddit/i18n/utils.ts"),
				L = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				H = s("./src/reddit/constants/colors.ts"),
				V = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				W = s("./src/reddit/components/ModHub/flairs/FlairManagement/FlairsDisabledBanner/index.m.less"),
				Q = s.n(W),
				J = e => o.a.createElement(L.a, {
					className: e.className,
					color: H.a.quarantine,
					icon: o.a.createElement(V.a, {
						className: Q.a.icon
					}),
					subtitle: e.flairTemplateType === C.d.UserFlair ? Object(A.c)("User flairs will not be visible until feature is enabled") : Object(A.c)("Post flairs will not be visible until feature is enabled"),
					title: e.flairTemplateType === C.d.UserFlair ? Object(A.c)("User flair is disabled") : Object(A.c)("Post flair is disabled")
				}),
				q = s("./node_modules/lodash/isEqual.js"),
				G = s.n(q),
				z = s("./src/higherOrderComponents/asModal/index.tsx"),
				Y = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				K = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				X = s("./src/reddit/controls/TextButton/index.tsx"),
				Z = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				$ = s("./src/lib/classNames/index.ts"),
				ee = s("./src/reddit/components/ModHub/flairs/FlairManagement/LabeledControl/index.m.less"),
				te = s.n(ee);
			! function(e) {
				e[e.Top = 0] = "Top", e[e.Left = 1] = "Left"
			}(B || (B = {}));
			const se = e => e.preventDefault();
			var ae = e => o.a.createElement("div", {
					className: Object($.a)(e.className, te.a.container)
				}, o.a.createElement("label", {
					className: e.labelPosition === B.Top ? te.a.topLabel : te.a.leftLabel,
					onClick: e.preventDefaultLabelClick ? se : void 0
				}, o.a.createElement("span", {
					className: Object($.a)(te.a.labelText, e.labelClassName)
				}, e.label), e.children)),
				ne = s("./src/reddit/components/ModHub/flairs/FlairManagement/FlairSettingsModal/index.m.less"),
				oe = s.n(ne);
			class ie extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.isUnmounted = !1, this.state = {
						settings: this.props.settings,
						isPending: !1
					}, this.onSaveButtonClick = async () => {
						const {
							settings: e
						} = this.state;
						if (G()(this.props.settings, e)) return void this.props.onClose();
						this.setState({
							isPending: !0
						}), this.sendOnSaveEvents();
						const t = await this.props.onSave(e);
						this.isUnmounted || (this.setState({
							isPending: !1
						}), t && this.props.onClose())
					}, this.sendOnSaveEvents = () => {
						const e = this.props.settings,
							t = this.state.settings,
							s = t.type;
						t.displaySettings.isEnabled !== e.displaySettings.isEnabled && this.props.sendEvent(I(s, t.displaySettings.isEnabled)), t.permissions.canAssignOwn !== e.permissions.canAssignOwn && this.props.sendEvent(w(s, t.permissions.canAssignOwn)), this.props.sendEvent(j(s))
					}, this.onToggleIsEnabled = () => {
						const {
							settings: e
						} = this.state, t = !e.displaySettings.isEnabled, s = Object.assign({}, e, {
							displaySettings: Object.assign({}, e.displaySettings, {
								isEnabled: t
							})
						}, !t && {
							permissions: Object.assign({}, e.permissions, {
								canAssignOwn: !1
							})
						});
						this.setState({
							settings: s
						})
					}, this.onToggleCanAssignOwn = () => {
						const {
							settings: e
						} = this.state, t = !e.permissions.canAssignOwn, s = Object.assign({}, e, {
							permissions: Object.assign({}, e.permissions, {
								canAssignOwn: t
							})
						});
						this.setState({
							settings: s
						})
					}
				}
				componentWillUnmount() {
					this.isUnmounted = !0
				}
				render() {
					const e = this.props.settings.type === C.d.UserFlair,
						{
							settings: t
						} = this.state,
						s = t !== this.props.settings;
					return o.a.createElement("div", {
						className: oe.a.container
					}, o.a.createElement(Y.g, {
						className: oe.a.modalHeader
					}, o.a.createElement(Y.n, null, e ? Object(A.c)("User flair settings") : Object(A.c)("Post flair settings")), o.a.createElement(X.a, {
						className: oe.a.modalCloseButton,
						onClick: this.props.onClose
					}, o.a.createElement(Y.b, null))), o.a.createElement("div", {
						className: oe.a.contentBlock
					}, o.a.createElement(ae, {
						label: e ? Object(A.c)("Enable user flair in this community") : Object(A.c)("Enable post flair in this community")
					}, o.a.createElement(Z.a, {
						on: t.displaySettings.isEnabled,
						onToggle: this.onToggleIsEnabled
					})), o.a.createElement(ae, {
						className: oe.a.assignOwnControl,
						label: Object(A.c)("Allow users to assign their own"),
						labelClassName: t.displaySettings.isEnabled ? void 0 : oe.a.disabled
					}, o.a.createElement(Z.a, {
						disabled: !t.displaySettings.isEnabled,
						on: t.permissions.canAssignOwn,
						onToggle: this.onToggleCanAssignOwn
					})), o.a.createElement("div", {
						className: oe.a.details
					}, e ? Object(A.c)("This will let users select, edit, and clear user flair for their usernames in this community. This does not allow users to select or edit mod-only user flair.") : Object(A.c)("This will let users select, edit, and clear post flair for their posts in this community. This does not allow users to select or edit mod-only post flair."))), o.a.createElement(Y.e, {
						className: oe.a.modalFooter
					}, o.a.createElement(Y.a, {
						onClick: this.props.onClose
					}, o.a.createElement(U.c, null, "Cancel")), o.a.createElement(h.f, {
						onClick: this.onSaveButtonClick,
						disabled: this.state.isPending || !s
					}, this.state.isPending ? o.a.createElement(K.a, {
						className: oe.a.loadingIcon,
						sizePx: 10
					}) : o.a.createElement(U.c, null, "Save"))))
				}
			}
			var re = Object(z.a)(ie),
				le = s("./src/reddit/helpers/validateFlairCssClass.ts");
			const ce = e => !e || e === H.b,
				de = e => Object.assign({}, e, {
					backgroundColor: ce(e.backgroundColor) ? H.a.defaultFlair : H.b
				}),
				pe = e => !(!e.textEditable || e.modOnly),
				me = e => {
					const t = Object.assign({}, e);
					return t.modOnly && (t.textEditable = !1), t.textEditable || (t.allowableContent = C.a.All, t.maxEmojis = void 0), t.allowableContent === C.a.Text && (t.maxEmojis = void 0), t
				},
				ue = e => e.userFlairAllowed,
				he = e => e.postFlairAllowed,
				ge = function(e, t, s) {
					let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
					const n = Object.assign({}, e);
					let o = Object(b.c)(n, !1);
					if (Object(b.a)(n)) {
						const e = t === C.d.UserFlair ? ue : he;
						o = Object(b.r)(o, s, e)
					}
					return o = Object(b.d)({
						flair: o,
						template: n,
						ignoreTextAllowance: a
					}), n.type = o.type, o.type === C.f.Richtext ? n.richtext = o.richtext : n.text = o.text, n
				},
				be = e => {
					const t = Object(b.n)(e) && !Object(b.q)(e),
						s = e.text.length > u.g,
						a = !e.text,
						n = Object(le.a)(e.cssClass || "");
					return {
						isBlank: a,
						cssClassErrorMessage: n,
						hasFieldError: !!(t || a || s || n),
						isFlairTextTooLong: s,
						shouldRemoveFlairText: t
					}
				};
			var Ce = s("./src/reddit/components/Flair/index.tsx"),
				fe = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				ve = (s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/lodash/range.js")),
				Ee = s.n(ve),
				xe = s("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				Oe = s("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				ye = s("./src/reddit/controls/DropdownSelector/index.tsx"),
				Te = s("./src/reddit/controls/RadioInput/index.tsx"),
				je = s("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				Se = s("./node_modules/react-redux/es/index.js"),
				we = s("./node_modules/reselect/es/index.js"),
				Ie = s("./src/reddit/actions/tooltip.ts"),
				ke = s("./src/reddit/components/StructuredStyles/ColorPicker/BaseColorPicker.tsx"),
				_e = s("./src/reddit/selectors/tooltip.ts"),
				Pe = s("./src/reddit/selectors/user.ts");
			const De = ["right", "top"],
				Ne = Object(we.c)({
					isDropdownOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(_e.b)(s)(e)
					},
					language: Pe.O
				});
			var Fe = Object(Se.b)(Ne, (e, t) => ({
					onToggleDropdown: () => e(Object(Ie.h)(t))
				}))(e => o.a.createElement("div", {
					id: e.tooltipId
				}, o.a.createElement(ke.a, {
					dropdownPosition: De,
					isDropdownOpen: e.isDropdownOpen,
					language: e.language,
					onChange: e.onChange,
					onToggleDropdown: e.onToggleDropdown,
					tooltipId: e.tooltipId,
					value: e.value
				}))),
				Me = s("./src/reddit/components/ModHub/flairs/FlairManagement/FlairTemplateEditor/ColorSwitch/index.m.less"),
				Re = s.n(Me);
			class Be extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onChange = () => {
						this.props.onChange(!this.props.isDark)
					}
				}
				render() {
					const {
						isDark: e
					} = this.props;
					return o.a.createElement("button", {
						className: Object($.a)(Re.a.switch, e ? Re.a.dark : Re.a.light),
						onClick: this.onChange
					}, "Aa")
				}
			}
			var Ue = s("./src/reddit/actions/flairManagement/index.ts"),
				Ae = s("./src/reddit/actions/post.ts"),
				Le = s("./src/reddit/components/ThemeProvider/index.tsx"),
				He = s("./src/reddit/constants/postLayout.ts"),
				Ve = s("./src/reddit/contexts/PageLayer/index.tsx"),
				We = s("./src/reddit/controls/LayoutSwitch/index.tsx"),
				Qe = s("./src/reddit/helpers/dom/index.ts"),
				Je = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				qe = s("./src/reddit/selectors/posts.ts"),
				Ge = s("./src/lib/omitKey/index.ts"),
				ze = s("./src/reddit/actions/imageUploads.ts"),
				Ye = s("./src/reddit/models/Image/index.tsx"),
				Ke = s("./src/reddit/models/StructuredStyles/index.ts"),
				Xe = s("./src/reddit/selectors/structuredStyles.ts"),
				Ze = s("./src/reddit/components/StructuredStyles/ImageUpload/index.tsx"),
				$e = s("./src/reddit/components/StructuredStyles/UploadedImage/index.tsx");
			var et = e => e.imageData ? o.a.createElement($e.e, {
					imageData: e.imageData,
					isRequestInProgress: e.isRequestInProgress,
					onRemove: e.onRemove
				}) : o.a.createElement(Ze.b, {
					label: Object(A.c)("Drag and Drop or Upload Image"),
					onChange: e.onChange
				}),
				tt = s("./src/reddit/components/ModHub/flairs/FlairManagement/FlairTemplateEditor/PostAppearanceEditor/PostFlairStyleTemplateEditor/index.m.less"),
				st = s.n(tt);
			const at = e => Array.isArray(e) ? e[0] : e,
				nt = e => (t, s) => {
					const a = ((e, t) => {
						const {
							pendingImages: s
						} = e, a = s && s[t];
						return a ? a.id : void 0
					})(s.styleTemplate, e);
					return a ? t.imageUploads[a] : void 0
				},
				ot = Object(we.c)({
					subredditDefaultStyles: Xe.p,
					postBackgroundImage: nt(Ke.e),
					postPlaceholderImage: nt(Ke.f)
				}),
				it = {
					cancelUpload: ze.h
				};
			class rt extends o.a.Component {
				constructor() {
					super(...arguments), this.onChangePostTitleColor = e => {
						const t = Object.assign({}, this.props.styleTemplate, {
							postTitleColor: e
						});
						this.props.onChange(t)
					}, this.onChangePostBackgroundColor = e => {
						const t = Object.assign({}, this.props.styleTemplate, {
							postBackgroundColor: e
						});
						this.props.onChange(t)
					}, this.onPostBackgroundImageInput = e => {
						this.addImage(at(e), Ke.e)
					}, this.onPostPlaceholderImageInput = e => {
						this.addImage(at(e), Ke.f)
					}, this.onRemoveBackgroundImage = () => this.removeImage(Ke.e), this.onRemovePlaceholderImage = () => this.removeImage(Ke.f), this.addImage = async (e, t) => {
						const {
							styleTemplate: s
						} = this.props, a = await Object(Ye.f)(e);
						this.props.onChange(Object.assign({}, s, {
							[t]: a.url,
							pendingImages: Object.assign({}, s.pendingImages, {
								[t]: a
							})
						}))
					}, this.cancelUpload = e => {
						const t = this.props[e];
						t && this.props.cancelUpload(t)
					}, this.removeImage = e => {
						const {
							styleTemplate: t
						} = this.props, s = t.pendingImages || {};
						this.cancelUpload(e), this.props.onChange(Object.assign({}, Object(Ge.a)(t, e), {
							pendingImages: Object(Ge.a)(s, e)
						}))
					}, this.getImageUpload = e => {
						const {
							styleTemplate: t
						} = this.props, {
							pendingImages: s = {}
						} = t, a = this.props[e] || s[e];
						if (a) return a;
						const n = this.props.styleTemplate[e];
						if (n) {
							const e = {
								url: n,
								width: 0,
								height: 0
							};
							return Object(Ye.g)(e)
						}
					}
				}
				componentWillUnmount() {
					this.cancelUpload(Ke.e), this.cancelUpload(Ke.f)
				}
				render() {
					const {
						className: e,
						styleTemplate: t,
						subredditDefaultStyles: s,
						templateId: a
					} = this.props, {
						postTitleColor: n = s.postTitleColor,
						postBackgroundColor: i = s.postBackgroundColor
					} = t, r = this.getImageUpload(Ke.e), l = this.getImageUpload(Ke.f);
					return o.a.createElement("div", {
						className: Object($.a)(e, st.a.container)
					}, o.a.createElement("fieldset", {
						className: st.a.leftFieldset
					}, o.a.createElement(ae, {
						label: Object(A.c)("Post title color")
					}, o.a.createElement(Fe, {
						onChange: this.onChangePostTitleColor,
						tooltipId: "flair-postTitleColor-" + a,
						value: n
					})), o.a.createElement(ae, {
						label: Object(A.c)("Thumbnail placeholder"),
						labelPosition: B.Top,
						preventDefaultLabelClick: !!l
					}, o.a.createElement(et, {
						imageData: l,
						isRequestInProgress: this.props.isSavePending,
						onChange: this.onPostPlaceholderImageInput,
						onRemove: this.onRemovePlaceholderImage
					}), o.a.createElement("div", {
						className: st.a.imageUploadHelpText
					}, Object(A.c)("Required Size: 256 x 256px\n Appears in Classic and Card views")))), o.a.createElement("fieldset", {
						className: st.a.rightFieldset
					}, o.a.createElement(ae, {
						label: Object(A.c)("Post background color")
					}, o.a.createElement(Fe, {
						onChange: this.onChangePostBackgroundColor,
						tooltipId: "flair-postBackgroundColor-" + a,
						value: i
					})), o.a.createElement(ae, {
						labelPosition: B.Top,
						label: Object(A.c)("Post background image"),
						preventDefaultLabelClick: !!r
					}, o.a.createElement(et, {
						imageData: r,
						isRequestInProgress: this.props.isSavePending,
						onChange: this.onPostBackgroundImageInput,
						onRemove: this.onRemoveBackgroundImage
					}), o.a.createElement("div", {
						className: st.a.imageUploadHelpText
					}, Object(A.c)("Jpeg or png files up to 10 MB\n Recommended image size: 864 x 120px")))))
				}
			}
			var lt = Object(Se.b)(ot, it)(rt),
				ct = s("./src/reddit/components/ModHub/flairs/FlairManagement/FlairTemplateEditor/PostAppearanceEditor/index.m.less"),
				dt = s.n(ct);
			const pt = Object(we.c)({
					examplePost: e => Object(qe.M)(e, {
						postId: u.e
					})
				}),
				mt = Object(Se.b)(pt, (e, t) => ({
					deleteExamplePost: () => e(Object(Ue.b)(u.e)),
					makeExamplePost: s => e(Object(Ue.c)(t.subredditId, s)),
					updateExamplePost: t => e(Object(Ae.O)({
						[u.e]: {
							flair: [t]
						}
					}))
				}));
			class ut extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.postWrapperRef = o.a.createRef(), this.state = {
						previewLayout: He.d.Classic
					}, this.onPostStyleTemplateChange = e => {
						const {
							templateDraft: t
						} = this.props;
						this.props.onChange(Object.assign({}, t, {
							styleTemplate: e
						}))
					}, this.onChangePreviewLayout = e => {
						this.setState({
							previewLayout: e
						})
					}, this.onPostPreviewClickCapture = e => {
						e.preventDefault(), e.stopPropagation()
					}
				}
				componentDidMount() {
					const {
						templateDraft: e
					} = this.props, t = Object(b.c)(e);
					this.props.makeExamplePost(t), this.disableTabNavigationForPreviewPost()
				}
				componentDidUpdate(e) {
					const t = Object(b.c)(this.props.templateDraft),
						s = Object(b.c)(e.templateDraft);
					G()(t, s) || this.props.updateExamplePost(t), this.disableTabNavigationForPreviewPost()
				}
				componentWillUnmount() {
					this.props.deleteExamplePost()
				}
				disableTabNavigationForPreviewPost() {
					this.postWrapperRef.current && Object(Qe.a)(this.postWrapperRef.current)
				}
				render() {
					const {
						subredditId: e,
						templateDraft: t,
						examplePost: s
					} = this.props;
					if (!s) return null;
					const {
						previewLayout: a
					} = this.state, n = t.styleTemplate || {}, i = He.b[a], r = Object(Je.b)({
						isFirstPost: !1,
						layout: i,
						post: s
					});
					return o.a.createElement("div", {
						className: Object($.a)(this.props.className, dt.a.container)
					}, o.a.createElement("div", null, o.a.createElement(We.a, {
						className: dt.a.layoutSwitch,
						layout: a,
						onChange: this.onChangePreviewLayout
					}), o.a.createElement("div", {
						className: dt.a.postPreview
					}, o.a.createElement("div", {
						ref: this.postWrapperRef,
						onClickCapture: this.onPostPreviewClickCapture,
						className: Object($.a)(dt.a.postWrapper, dt.a[a])
					}, o.a.createElement(Le.a, {
						forceDayMode: !0
					}, o.a.createElement(r, {
						className: dt.a.postComponent,
						flairStyleTemplateDraft: n,
						inSubredditOrProfile: !0,
						pageLayer: this.props.pageLayer,
						postId: s.postId
					}))))), o.a.createElement(lt, {
						className: dt.a.postFlairStyleTemplateEditor,
						isSavePending: this.props.isSavePending,
						onChange: this.onPostStyleTemplateChange,
						styleTemplate: n,
						subredditId: e,
						templateId: t.id
					}))
				}
			}
			var ht = Object(Ve.t)()(mt(ut)),
				gt = s("./src/reddit/components/ModHub/flairs/FlairManagement/FlairTemplateEditor/index.m.less"),
				bt = s.n(gt);
			const Ct = "flair-management-emoji-picker",
				ft = {},
				vt = 250,
				Et = Ee()(u.d, 0).map(e => ({
					value: e,
					displayText: e.toString()
				}));
			class xt extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.containerRef = o.a.createRef(), this.initialTemplate = this.props.templateDraft, this.state = {
						flairEditHadFocus: !1
					}, this.normalizeTemplate = e => {
						const {
							flairTemplateType: t,
							subredditEmojiData: s
						} = this.props;
						let a = me(e);
						return a = ge(a, t, s, !0)
					}, this.onSave = () => {
						this.props.onChange(this.normalizeTemplate(this.props.templateDraft))
					}, this.onFlairEditBlur = () => {
						this.setState({
							flairEditHadFocus: !0
						})
					}, this.onToggleBackgroundTransparency = () => {
						this.props.onChange(de(this.props.templateDraft))
					}, this.onToggleFlairTextColor = () => {
						const {
							templateDraft: e
						} = this.props;
						this.props.onChange(Object.assign({}, e, {
							textColor: e.textColor === C.e.Light ? C.e.Dark : C.e.Light
						}))
					}, this.onToggleModOnly = () => {
						const {
							templateDraft: e
						} = this.props, t = !e.modOnly;
						this.props.onChange(this.normalizeTemplate(Object.assign({}, e, {
							modOnly: t
						})))
					}, this.onToggleAllowUserEdits = () => {
						const {
							templateDraft: e
						} = this.props, t = !e.textEditable;
						this.props.onChange(this.normalizeTemplate(Object.assign({}, e, {
							textEditable: t
						})))
					}, this.onTogglePostAppearanceSettings = () => {
						const {
							templateDraft: e
						} = this.props, t = e.styleTemplate ? void 0 : ft;
						this.props.onChange(Object.assign({}, e, {
							styleTemplate: t
						}))
					}, this.onChangeBackgroundColor = e => {
						const {
							templateDraft: t
						} = this.props;
						this.props.onChange(Object.assign({}, t, {
							backgroundColor: e
						}))
					}, this.onChangeTextColor = e => {
						const {
							templateDraft: t
						} = this.props;
						this.props.onChange(Object.assign({}, t, {
							textColor: e ? C.e.Dark : C.e.Light
						}))
					}, this.onCSSClassValueChange = e => {
						const {
							templateDraft: t
						} = this.props;
						this.props.onChange(Object.assign({}, t, {
							cssClass: e.target.value
						}))
					}, this.onFlairContentChanged = e => {
						const {
							templateDraft: t
						} = this.props, s = Object(b.d)({
							flair: e,
							template: t,
							ignoreTextAllowance: !0
						});
						this.props.onChange(Object(b.f)(s, this.props.templateDraft))
					}, this.onAllowableContentChange = e => {
						const {
							templateDraft: t
						} = this.props, s = Object.assign({}, t, {
							allowableContent: e
						});
						this.props.onChange(this.normalizeTemplate(s))
					}, this.onEmojiLimitChange = e => {
						const {
							templateDraft: t
						} = this.props, s = Object.assign({}, t, {
							maxEmojis: e.value
						});
						this.props.onChange(this.normalizeTemplate(s))
					}
				}
				componentDidMount() {
					this.scrollIntoView()
				}
				scrollIntoView() {
					const e = this.containerRef.current;
					if (!e) return;
					const t = e.getBoundingClientRect().top,
						s = window.scrollY + t - vt;
					window.scrollTo(0, s)
				}
				render() {
					const {
						areFlairRestrictionsEnabled: e,
						subredditId: t,
						templateDraft: s,
						flairTemplateType: a
					} = this.props, n = a === C.d.UserFlair, i = a === C.d.LinkFlair, r = s !== this.initialTemplate, {
						hasFieldError: l,
						cssClassErrorMessage: d
					} = be(s), p = this.state.flairEditHadFocus || r, m = Object(xe.a)(), g = Object(b.c)(s, !1), f = ce(s.backgroundColor), v = i || !f, E = f ? H.a.defaultFlair : s.backgroundColor, x = Object(b.l)(s);
					return o.a.createElement("div", {
						className: bt.a.container,
						ref: this.containerRef
					}, o.a.createElement("div", {
						className: bt.a.mainContent
					}, o.a.createElement("fieldset", {
						className: bt.a.leftFieldset
					}, o.a.createElement("legend", null, o.a.createElement(U.c, null, "Flair appearance")), o.a.createElement(ae, {
						labelPosition: B.Top,
						label: Object(A.c)("Flair text")
					}, o.a.createElement(m, {
						allowBlank: !p,
						autofocus: !0,
						className: bt.a.flairEdit,
						emojiPickerId: Ct,
						flair: g,
						flairTemplate: s,
						flairTemplateType: a,
						isFlairModOnly: s.modOnly,
						onChange: this.onFlairContentChanged,
						subredditId: t,
						onBlur: this.onFlairEditBlur
					})), o.a.createElement(ae, {
						labelPosition: B.Top,
						label: Object(A.c)("CSS class")
					}, o.a.createElement(Oe.c, {
						className: bt.a.cssClassInput,
						maxLength: u.b,
						onChange: this.onCSSClassValueChange,
						placeholder: Object(A.c)("none"),
						spellCheck: !1,
						value: s.cssClass || ""
					}), o.a.createElement("div", {
						className: d ? bt.a.cssClassErrorText : bt.a.cssClassInfoText
					}, d || o.a.createElement(U.c, null, "Optional"))), n && o.a.createElement(ae, {
						label: Object(A.c)("Add flair background")
					}, o.a.createElement(Z.a, {
						on: v,
						onToggle: this.onToggleBackgroundTransparency
					})), v && o.a.createElement(o.a.Fragment, null, o.a.createElement(ae, {
						label: Object(A.c)("Flair background color")
					}, o.a.createElement(Fe, {
						onChange: this.onChangeBackgroundColor,
						tooltipId: "flair-background-color-" + s.id,
						value: E
					})), o.a.createElement(ae, {
						label: Object(A.c)("Flair text color")
					}, o.a.createElement(Be, {
						isDark: s.textColor === C.e.Dark,
						onChange: this.onChangeTextColor
					}))), i && o.a.createElement(ae, {
						label: Object(A.c)("Edit post appearance")
					}, o.a.createElement(Z.a, {
						on: !!s.styleTemplate,
						onToggle: this.onTogglePostAppearanceSettings
					}))), o.a.createElement("fieldset", {
						className: bt.a.rightFieldset
					}, o.a.createElement("legend", null, o.a.createElement(U.c, null, "Flair settings")), o.a.createElement(ae, {
						label: o.a.createElement("span", {
							className: bt.a.labelWithTooltip
						}, o.a.createElement(U.c, null, "Mod only"), o.a.createElement(c.a, {
							text: Object(A.c)("Flair is only available for mods to select")
						}))
					}, o.a.createElement(Z.a, {
						on: !!s.modOnly,
						onToggle: this.onToggleModOnly
					})), o.a.createElement(ae, {
						className: s.modOnly ? bt.a.disabledControl : void 0,
						label: o.a.createElement("span", {
							className: bt.a.labelWithTooltip
						}, o.a.createElement(U.c, null, "Allow user edits"), o.a.createElement(c.a, {
							text: Object(A.c)("Users will be able to edit flair text")
						}))
					}, o.a.createElement(Z.a, {
						disabled: s.modOnly,
						on: pe(s),
						onToggle: this.onToggleAllowUserEdits
					})), pe(s) && e && o.a.createElement(ae, {
						label: Object(A.c)("This flair allows"),
						labelPosition: B.Top
					}, o.a.createElement(Te.a, {
						value: s.allowableContent || C.a.All,
						name: "allowable_content",
						onChange: this.onAllowableContentChange
					}, o.a.createElement(je.a, {
						className: bt.a.radioOption,
						showButton: !0,
						value: C.a.All
					}, o.a.createElement(U.c, null, "Text & Emojis")), o.a.createElement(je.a, {
						className: bt.a.radioOption,
						showButton: !0,
						value: C.a.Emoji
					}, o.a.createElement(U.c, null, "Emoji only")), o.a.createElement(je.a, {
						className: bt.a.radioOption,
						showButton: !0,
						value: C.a.Text
					}, o.a.createElement(U.c, null, "Text only")))), pe(s) && s.allowableContent !== C.a.Text && e && o.a.createElement(ae, {
						label: Object(A.c)("Limit number of emojis"),
						labelPosition: B.Top
					}, o.a.createElement(ye.a, {
						buttonClassName: bt.a.dropdownSelectorButton,
						className: bt.a.dropdownSelector,
						displayText: String(x),
						name: "max_emojis",
						options: Et,
						onSelect: this.onEmojiLimitChange
					})))), i && s.styleTemplate && o.a.createElement(ht, {
						className: bt.a.postAppearanceEditor,
						isSavePending: !!this.props.isSavePending,
						onChange: this.props.onChange,
						subredditId: t,
						templateDraft: s
					}), o.a.createElement("div", {
						className: bt.a.buttonsRow
					}, o.a.createElement(h.i, {
						onClick: this.props.onCancel
					}, o.a.createElement(U.c, null, "Cancel")), o.a.createElement(h.f, {
						disabled: this.props.isSavePending || l,
						onClick: this.props.onSave
					}, this.props.isSavePending ? o.a.createElement(K.a, {
						className: bt.a.loadingIcon,
						sizePx: 10
					}) : o.a.createElement(U.c, null, "Save"))))
				}
			}
			const Ot = (e, t) => e.modOnly ? Object(A.c)("Mod only") : e.textEditable ? t ? Object(A.c)("Editable, ".concat(Object(A.b)("restrictions", Object(b.k)(e).toLowerCase()))) : Object(A.c)("Editable") : "",
				yt = e => Object.assign({}, u.a, {
					backgroundColor: e === C.d.UserFlair ? H.b : H.a.defaultFlair
				});
			var Tt = s("./src/reddit/components/ModHub/flairs/FlairManagement/FlairTemplateRow/index.m.less"),
				jt = s.n(Tt);
			class St extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onStartEditButtonClick = () => {
						this.props.onStartEditing && this.props.onStartEditing(this.props.flairTemplate.id)
					}, this.onCopyIdButtonClick = () => {
						this.props.onCopyTemplateId(this.props.flairTemplate.id)
					}, this.onRemoveButtonClick = () => {
						this.props.onRemove(this.props.flairTemplate.id)
					}, this.onCancelEditButtonClick = () => {
						this.props.onCancel()
					}
				}
				render() {
					const {
						areFlairRestrictionsEnabled: e,
						disableEditButton: t,
						flairTemplate: s,
						isEditing: a,
						isReordering: n
					} = this.props, i = Object(b.c)(s);
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: Object($.a)(jt.a.row, n ? jt.a.reordering : null)
					}, o.a.createElement("div", {
						className: jt.a.flairPreviewCell
					}, o.a.createElement(Ce.b, {
						className: jt.a.flairComponent,
						flair: i,
						forceSmallEmojis: !0
					})), o.a.createElement("div", {
						className: jt.a.cssClassCell
					}, s.cssClass), o.a.createElement("div", {
						className: jt.a.settingsCell
					}, Ot(s, e)), o.a.createElement("div", {
						className: jt.a.flairIdCell
					}, o.a.createElement(h.n, {
						disabled: !this.props.flairTemplate.id,
						onClick: this.onCopyIdButtonClick
					}, o.a.createElement(U.c, null, "Copy Id")), o.a.createElement(h.n, {
						disabled: t || a,
						onClick: this.onStartEditButtonClick
					}, o.a.createElement(U.c, null, "Edit")), o.a.createElement(h.n, {
						className: jt.a.removeButton,
						disabled: a,
						onClick: this.onRemoveButtonClick
					}, o.a.createElement(fe.b, null)))), a && o.a.createElement(xt, {
						areFlairRestrictionsEnabled: e,
						flairTemplateType: this.props.flairTemplateType,
						isSavePending: this.props.isSavePending,
						onCancel: this.onCancelEditButtonClick,
						onChange: this.props.onChange,
						onSave: this.props.onSave,
						subredditEmojiData: this.props.subredditEmojiData,
						subredditId: this.props.subredditId,
						templateDraft: s
					}))
				}
			}
			var wt = s("./src/reddit/icons/svgs/Tag/index.tsx"),
				It = s("./src/reddit/components/ModHub/flairs/FlairManagement/Placeholder/index.m.less"),
				kt = s.n(It),
				_t = e => o.a.createElement("div", {
					className: kt.a.container
				}, o.a.createElement(wt.a, {
					className: kt.a.icon
				}), o.a.createElement("h3", {
					className: kt.a.header
				}, e.flairTemplateType === C.d.UserFlair ? Object(A.c)("You do not have any user flair") : Object(A.c)("You do not have any post flair")), o.a.createElement("p", {
					className: kt.a.details
				}, e.flairTemplateType === C.d.UserFlair ? Object(A.c)("Create user flair in your community today") : Object(A.c)("Create post flair in your community today"))),
				Pt = s("./src/reddit/components/ModHub/flairs/FlairManagement/index.m.less"),
				Dt = s.n(Pt);

			function Nt() {
				return (Nt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			const Ft = "Flair-discard-changes-confirmation",
				Mt = "Flair-remove-confirmation",
				Rt = "Flair-settings-modal";
			var Bt;
			! function(e) {
				e[e.Default = 0] = "Default", e[e.AddingTemplate = 1] = "AddingTemplate", e[e.EditingTemplate = 2] = "EditingTemplate", e[e.Reordering = 3] = "Reordering"
			}(Bt || (Bt = {}));
			const Ut = {
				isTemplateSavePending: !1,
				mode: Bt.Default,
				numTemplatesReordered: 0,
				templateBeforeEditing: void 0,
				templateDraft: void 0,
				templateIdsNewOrder: [],
				templateIdToRemove: void 0
			};
			class At extends o.a.Component {
				constructor() {
					super(...arguments), this.isUnmounted = !1, this.state = Object.assign({}, Ut), this.hasUnsavedChanges = () => {
						return this.state.templateDraft !== this.state.templateBeforeEditing
					}, this.saveCurrentTemplateDraft = async () => {
						const {
							templateDraft: e
						} = this.state;
						if (!e) return;
						this.setState({
							isTemplateSavePending: !0
						}), this.sendOnSaveEvents(e);
						const t = await this.props.onSaveTemplate(e);
						this.isUnmounted || (this.setState({
							isTemplateSavePending: !1
						}), t && this.setState(Ut))
					}, this.resetPendingNavigation = () => {
						this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}, this.performPendingNavigationIfNeeded = () => {
						this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onSettingsButtonClick = () => {
						this.props.toggleModal(Rt)
					}, this.onCloseModal = () => {
						this.props.closeAllModals(), this.resetPendingNavigation()
					}, this.onAddNewTemplateButtonClick = () => {
						const e = yt(this.props.flairTemplateType);
						this.setState({
							mode: Bt.AddingTemplate,
							templateDraft: e,
							templateBeforeEditing: e
						})
					}, this.onRemoveTemplateButtonClick = e => {
						this.setState({
							templateIdToRemove: e
						}), this.props.toggleModal(Mt)
					}, this.onRemoveTemplateConfirmed = () => {
						this.props.onRemoveTemplate(this.state.templateIdToRemove), this.props.sendEvent(y(this.props.flairTemplateType))
					}, this.onStartEditingExistingTemplate = e => {
						if (this.hasUnsavedChanges()) return void this.props.toggleModal(Ft);
						const t = ge(Object.assign({}, this.props.templates[e], {
							styleTemplate: this.props.styleTemplates && this.props.styleTemplates[e]
						}), this.props.flairTemplateType, this.props.subredditEmojiData);
						this.setState({
							mode: Bt.EditingTemplate,
							templateDraft: t,
							templateBeforeEditing: t
						})
					}, this.onTemplateDraftChange = e => {
						this.setState({
							templateDraft: e
						})
					}, this.onReorderButtonClick = () => {
						this.setState({
							mode: Bt.Reordering,
							numTemplatesReordered: 0,
							templateIdsNewOrder: [...this.props.templateIds]
						})
					}, this.onTemplatesOrderChange = (e, t, s) => {
						const {
							numTemplatesReordered: a
						} = this.state;
						this.setState({
							numTemplatesReordered: a + 1,
							templateIdsNewOrder: s
						})
					}, this.onSaveCurrentOrderClick = () => {
						const {
							numTemplatesReordered: e,
							templateIdsNewOrder: t
						} = this.state;
						this.props.onReorderTemplates(t), this.props.sendEvent(N(this.props.flairTemplateType, e)), this.setState(Ut)
					}, this.onCancelReorderingClick = () => {
						this.setState(Ut)
					}, this.onCancelEditingTemplateClick = () => {
						this.hasUnsavedChanges() ? this.props.toggleModal(Ft) : this.setState(Ut)
					}, this.onDiscardUnsavedChangesConfirmed = () => {
						this.setState(Ut), this.performPendingNavigationIfNeeded()
					}
				}
				componentDidMount() {
					this.props.onGetSubredditEmojisIfNeeded()
				}
				componentWillUnmount() {
					this.isUnmounted = !0
				}
				sendOnSaveEvents(e) {
					const {
						templateBeforeEditing: t
					} = this.state, {
						flairTemplateType: s
					} = this.props, a = !e.id;
					if (!t) return;
					e.modOnly !== t.modOnly && this.props.sendEvent(k(s, !!e.modOnly)), e.textEditable !== t.textEditable && this.props.sendEvent(_(s, !!e.textEditable)), !!e.styleTemplate != !!t.styleTemplate && this.props.sendEvent(D(!!e.styleTemplate));
					const n = e.allowableContent || C.a.All;
					n !== (t.allowableContent || C.a.All) && this.props.sendEvent(M(s, n)), Object(b.l)(e) !== Object(b.l)(t) && this.props.sendEvent(R(s, Object(b.l)(e))), this.props.sendEvent(P(s, a))
				}
				render() {
					const {
						areFlairRestrictionsEnabled: e,
						templateIds: t
					} = this.props, {
						mode: s,
						templateDraft: n
					} = this.state, m = this.props.flairTemplateType === C.d.UserFlair, b = this.hasUnsavedChanges(), f = n && n.id, v = {
						areFlairRestrictionsEnabled: e,
						disableEditButton: s !== Bt.Default,
						flairTemplateType: this.props.flairTemplateType,
						onCancel: this.onCancelEditingTemplateClick,
						onChange: this.onTemplateDraftChange,
						onCopyTemplateId: this.props.onCopyTemplateId,
						onRemove: this.onRemoveTemplateButtonClick,
						onSave: this.saveCurrentTemplateDraft,
						onStartEditing: this.onStartEditingExistingTemplate,
						subredditEmojiData: this.props.subredditEmojiData,
						subredditId: this.props.subredditId
					}, E = t.length >= u.h;
					return o.a.createElement("div", {
						className: Dt.a.container
					}, o.a.createElement(d.c, {
						className: Dt.a.topBar
					}, s === Bt.Reordering ? o.a.createElement(o.a.Fragment, null, o.a.createElement(h.i, {
						onClick: this.onCancelReorderingClick
					}, o.a.createElement(U.c, null, "Cancel")), o.a.createElement(h.f, {
						disabled: !this.state.numTemplatesReordered,
						onClick: this.onSaveCurrentOrderClick
					}, o.a.createElement(U.c, null, "Save"))) : o.a.createElement(o.a.Fragment, null, o.a.createElement(h.i, {
						className: Dt.a.settingsButton,
						onClick: this.onSettingsButtonClick
					}, m ? Object(A.c)("User flair settings") : Object(A.c)("Post flair settings")), o.a.createElement(h.i, {
						disabled: s !== Bt.Default || t.length < 2,
						onClick: this.onReorderButtonClick
					}, o.a.createElement(U.c, null, "Reorder")), o.a.createElement(h.f, {
						disabled: s !== Bt.Default || E,
						onClick: this.onAddNewTemplateButtonClick,
						title: E ? Object(A.c)("Maximum number of templates reached") : void 0
					}, o.a.createElement(U.c, null, "Add flair")))), o.a.createElement(d.a, {
						className: Dt.a.contentContainer
					}, o.a.createElement(d.b, null, m ? Object(A.c)("User flair management") : Object(A.c)("Post flair management"), o.a.createElement(l.a, {
						linkUrl: "".concat(a.a.redditHelpUrl.modHelpCenter).concat(this.props.helpCenterLink)
					})), !this.props.flairSettings.displaySettings.isEnabled && o.a.createElement(J, {
						className: Dt.a.disabledBanner,
						flairTemplateType: this.props.flairTemplateType
					}), o.a.createElement("div", {
						className: Dt.a.table
					}, o.a.createElement("div", {
						className: Dt.a.tableHead
					}, o.a.createElement("div", {
						className: Dt.a.flairPreviewColHeader
					}, m ? Object(A.c)("User flair preview") : Object(A.c)("Post flair preview")), o.a.createElement("div", {
						className: Dt.a.cssClassColHeader
					}, o.a.createElement(U.c, null, "CSS class"), o.a.createElement(c.a, {
						text: Object(A.c)("CSS classes determine the styling for flair in old Reddit")
					})), o.a.createElement("div", {
						className: Dt.a.settingsColHeader
					}, o.a.createElement(U.c, null, "Settings"), o.a.createElement(c.a, {
						text: e ? Object(A.c)("Shows if flair is mod-only, user editable, allows text, or allows emojis") : Object(A.c)("Set flair to be user editable or mod-only")
					})), o.a.createElement("div", {
						className: Dt.a.flairIdColHeader
					}, o.a.createElement(U.c, null, "Flair ID"), o.a.createElement(c.a, {
						text: Object(A.c)("Use this ID when configuring automod to assign flair")
					}))), o.a.createElement("div", {
						className: Dt.a.tableBody
					}, s === Bt.Default && !t.length && o.a.createElement(_t, {
						flairTemplateType: this.props.flairTemplateType
					}), s === Bt.Reordering ? o.a.createElement(g.a, {
						values: this.state.templateIdsNewOrder,
						onDrop: this.onTemplatesOrderChange,
						render: (e, t, s, a, n) => o.a.createElement(p.a, {
							canDrop: n,
							className: Dt.a.dragItem,
							iconClassName: Dt.a.dragIcon,
							isDragging: s,
							isOver: a
						}, o.a.createElement(St, Nt({}, v, {
							flairTemplate: this.props.templates[e],
							isReordering: !0
						})))
					}) : t.map(e => o.a.createElement(St, Nt({}, v, {
						key: e,
						flairTemplate: e === f ? n : this.props.templates[e],
						isEditing: e === f,
						isSavePending: this.state.isTemplateSavePending && e === f
					}))), s === Bt.AddingTemplate && o.a.createElement(St, Nt({}, v, {
						flairTemplate: n,
						isSavePending: this.state.isTemplateSavePending,
						isEditing: !0
					}))))), o.a.createElement(i.a, {
						blockOnBeforeUnload: !0,
						dialogId: Ft,
						enabled: b
					}), this.props.activeModalId === Ft && o.a.createElement(r.a, {
						actionText: Object(A.c)("Discard"),
						headerText: f ? Object(A.c)("Discard changes before leaving?") : Object(A.c)("Discard new flair?"),
						modalText: f ? Object(A.c)("You have made some changes to your flair, do you wish to discard the changes to the flair you are editing?") : Object(A.c)("You have a new flair that has not been saved, do you wish to discard this new flair?"),
						onConfirm: this.onDiscardUnsavedChangesConfirmed,
						toggleModal: this.onCloseModal,
						withOverlay: !0
					}), this.props.activeModalId === Mt && o.a.createElement(r.a, {
						actionText: Object(A.c)("Delete"),
						headerText: m ? Object(A.c)("Delete user flair?") : Object(A.c)("Delete post flair?"),
						modalText: m ? Object(A.c)("Do you wish to delete this user flair?") : Object(A.c)("Do you wish to delete this post flair?"),
						onConfirm: this.onRemoveTemplateConfirmed,
						toggleModal: this.onCloseModal,
						withOverlay: !0
					}), this.props.activeModalId === Rt && o.a.createElement(re, {
						onClose: this.onCloseModal,
						onSave: this.props.onSaveSettings,
						sendEvent: this.props.sendEvent,
						settings: this.props.flairSettings,
						subredditId: this.props.subredditId,
						withOverlay: !0
					}))
				}
			}
			t.a = Object(m.b)(At)
		},
		"./src/reddit/components/StructuredStyles/ColorPicker/BaseColorPicker.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/helpers/isValidHexColor/index.ts"),
				c = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				d = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				p = s("./src/reddit/models/StructuredStyles/index.ts"),
				m = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = s("./src/reddit/components/StructuredStyles/ColorPicker/index.m.less"),
				h = s.n(u),
				g = s("./src/higherOrderComponents/makeAsync.tsx"),
				b = s("./src/lib/loadWithRetries/index.ts");
			const C = () => null;
			var f = Object(g.a)({
				ErrorComponent: C,
				getComponent: () => Object(b.a)(() => s.e("ColorPickerDropdown").then(s.bind(null, "./src/reddit/components/StructuredStyles/ColorPicker/_ColorPickerDropdown.tsx"))).then(e => e.default),
				LoadingComponent: C
			});
			const v = e => "#" === e[0] ? e : "#".concat(e),
				E = Object(r.a)(e => o.a.createElement("div", {
					className: Object(i.a)(h.a.DropdownColorSwatch, e.isTransparent && h.a.isTransparent),
					style: {
						backgroundColor: e.isTransparent ? Object(m.a)(e).body : e.color,
						fill: Object(a.h)(e.color)
					}
				}, e.isDropdownOpen ? o.a.createElement(d.a, {
					className: h.a.ChevronUp
				}) : o.a.createElement(c.a, {
					className: h.a.ChevronDown
				})));
			class x extends o.a.Component {
				constructor(e) {
					super(e), this.onChangeProp = e => {
						this.setState({
							value: e,
							inputValue: e
						}), this.props.onChange(e, !0)
					}, this.onChangeHexColor = e => {
						const {
							value: t
						} = e.currentTarget;
						if (this.setState({
								inputValue: t
							}), Object(l.b)(t, !0)) {
							const e = v(t);
							this.setState({
								value: e
							}), this.props.onChange(e, !1)
						}
					}, this.handleUseSystemColorPickerClicked = () => {
						this.props.onSystemInputOpened && this.props.onSystemInputOpened()
					};
					const {
						value: t
					} = e;
					this.state = {
						inputValue: t,
						value: t
					}
				}
				componentWillReceiveProps(e) {
					this.setState(() => ({
						value: e.value,
						inputValue: e.value
					})), !this.props.isDropdownOpen && e.isDropdownOpen && this.props.onColorPickerOpened && this.props.onColorPickerOpened()
				}
				componentWillUnmount() {
					this.props.isDropdownOpen && this.props.onToggleDropdown()
				}
				render() {
					const {
						props: e,
						state: t
					} = this, s = e.containerId ? document.getElementById(e.containerId) : void 0;
					return o.a.createElement("div", {
						onClick: e.onToggleDropdown
					}, o.a.createElement(E, {
						color: e.value || p.d,
						isDropdownOpen: e.isDropdownOpen,
						isTransparent: e.includeTransparent && !e.value
					}), o.a.createElement(f, {
						container: s,
						inputValue: t.inputValue,
						includeTransparent: e.includeTransparent,
						isOpen: e.isDropdownOpen,
						language: e.language,
						onChangeHexColor: this.onChangeHexColor,
						onSelectColor: this.onChangeProp,
						onToggleDropdown: e.onToggleDropdown,
						onClickUseSystemColorPicker: this.handleUseSystemColorPickerClicked,
						tooltipId: e.tooltipId,
						tooltipPosition: e.dropdownPosition,
						value: t.value
					}))
				}
			}
			t.a = x
		},
		"./src/reddit/components/StructuredStyles/ColorPicker/index.m.less": function(e, t, s) {
			e.exports = {
				Inline: "C1u8RDjnECGK1LWfSsACT",
				inline: "C1u8RDjnECGK1LWfSsACT",
				ColorInput: "_11x--06UcYLDYS16wXb8-q",
				colorInput: "_11x--06UcYLDYS16wXb8-q",
				ColorSwatchContainer: "_1oW-7sYYlQS4GeHmj1ubBp",
				colorSwatchContainer: "_1oW-7sYYlQS4GeHmj1ubBp",
				ColorSwatchOption: "_35Suh6FFPv_wB32f8XV32",
				colorSwatchOption: "_35Suh6FFPv_wB32f8XV32",
				isTransparent: "WD7seokSY2Kgg9EUdkfox",
				isSelected: "Awb-CJoYiNZr5FUKWbmCQ",
				ColorSwatchPreview: "_2U2EDHI9LC1nsjVIA7rIV7",
				colorSwatchPreview: "_2U2EDHI9LC1nsjVIA7rIV7",
				HexColorInput: "_2J9PudeZtimxGXSP0A_G-l",
				hexColorInput: "_2J9PudeZtimxGXSP0A_G-l",
				isInvalid: "_1AtMqIr_4QichwnCYnGiCf",
				ErrorMarker: "_1niA4R0pkgQEg3RkfWiORi",
				errorMarker: "_1niA4R0pkgQEg3RkfWiORi",
				SectionTitle: "_2fiXR9OAoHzIVFLLcS7W8u",
				sectionTitle: "_2fiXR9OAoHzIVFLLcS7W8u",
				StyledLabel: "_3tm-97fb8noV8kwxNOON_9",
				styledLabel: "_3tm-97fb8noV8kwxNOON_9",
				ColorPickerDropdown: "_1i-ndNsTQtNr82sMJ0renj",
				colorPickerDropdown: "_1i-ndNsTQtNr82sMJ0renj",
				DropdownColorSwatch: "_2uwkPlP_LglpLTAm6dfFmd",
				dropdownColorSwatch: "_2uwkPlP_LglpLTAm6dfFmd",
				ChevronDown: "V07CUWayujZ6pmjzCKitD",
				chevronDown: "V07CUWayujZ6pmjzCKitD",
				ChevronUp: "_1PTgp4tTpJn4UDPY-Uo-e4",
				chevronUp: "_1PTgp4tTpJn4UDPY-Uo-e4"
			}
		},
		"./src/reddit/components/StructuredStyles/DragItem/index.m.less": function(e, t, s) {
			e.exports = {
				Grapple: "_1RWZwK3K1uM6lSH8uK5DdB",
				grapple: "_1RWZwK3K1uM6lSH8uK5DdB",
				LockIcon: "_1vzrWUGrBGAJS_EeyJ4Ct0",
				lockIcon: "_1vzrWUGrBGAJS_EeyJ4Ct0",
				ExpandLeft: "_10Jk0eCPxa9SanBQsJlfGa",
				expandLeft: "_10Jk0eCPxa9SanBQsJlfGa"
			}
		},
		"./src/reddit/components/StructuredStyles/DragItem/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				o = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/StructuredStyles/StyledComponents/navs.tsx"),
				r = s("./src/reddit/icons/svgs/Grapple/index.tsx"),
				l = s("./src/reddit/icons/svgs/Lock/index.tsx"),
				c = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				d = s("./src/reddit/components/StructuredStyles/DragItem/index.m.less"),
				p = s.n(d);
			const m = o.a.wrapped(r.a, "Grapple", p.a),
				u = o.a.wrapped(l.a, "LockIcon", p.a),
				h = o.a.wrapped(c.a, "ExpandLeft", p.a);
			t.a = e => n.a.createElement(i.a, {
				className: e.className,
				isDragging: e.isDragging,
				isOver: e.isOver,
				canDrop: e.canDrop,
				disabled: e.disabled
			}, n.a.createElement(h, null, e.children, e.disabled ? n.a.createElement(u, {
				className: e.iconClassName
			}) : n.a.createElement(m, {
				className: e.iconClassName
			})))
		},
		"./src/reddit/components/StructuredStyles/UploadedImage/index.m.less": function(e, t, s) {
			e.exports = {
				TrashIcon: "_369jaOfOFcc4zl3BotOKV0",
				trashIcon: "_369jaOfOFcc4zl3BotOKV0",
				BottomRow: "_3wDzoF7M_TFAMlJ37cLSkW",
				bottomRow: "_3wDzoF7M_TFAMlJ37cLSkW",
				isHiding: "_3IxVc-07C4GUtQhhxc8MI0",
				imageDisplay: "_6FUPzkTsqrEot5SsYJeha",
				ErrorText: "_3ctJAQq7nR8klJsurOmHQg",
				errorText: "_3ctJAQq7nR8klJsurOmHQg"
			}
		},
		"./src/reddit/components/StructuredStyles/UploadedImage/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return b
			})), s.d(t, "d", (function() {
				return C
			})), s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return v
			}));
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/i18n/utils.ts"),
				r = s("./src/reddit/models/Image/index.tsx"),
				l = s("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				c = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				d = s("./src/reddit/controls/ImageDisplay/index.tsx"),
				p = s("./src/reddit/controls/TextButton/index.tsx"),
				m = s("./src/reddit/icons/svgs/Trash/index.tsx"),
				u = s("./src/reddit/components/StructuredStyles/UploadedImage/index.m.less"),
				h = s.n(u),
				g = s("./src/lib/lessComponent.tsx");
			const b = l.a,
				C = g.a.wrapped(m.a, "TrashIcon", h.a),
				f = e => n.a.createElement("div", {
					className: Object(o.a)(h.a.BottomRow, {
						[h.a.isHiding]: e.isHiding
					})
				}, e.children),
				v = g.a.wrapped(c.c, "ErrorText", h.a);
			t.e = e => {
				const t = e.imageData && e.imageData.kind === r.b.FailedToUpload ? e.imageData.error : "",
					s = !t && e.imageData.kind === r.b.NotUploaded,
					a = e.isRequestInProgress && e.imageData.kind === r.b.TempUploaded,
					l = s || a;
				return n.a.createElement(d.a, {
					backgroundImage: e.imageData.url,
					className: Object(o.a)(e.className, h.a.imageDisplay)
				}, l && n.a.createElement(b, null), n.a.createElement(f, {
					isHiding: !!l
				}, t && n.a.createElement(v, null, Object(i.c)("Something went wrong")), n.a.createElement(p.a, {
					onClick: e.onRemove
				}, n.a.createElement(C, null))))
			}
		},
		"./src/reddit/controls/LayoutSwitch/index.m.less": function(e, t, s) {
			e.exports = {
				title: "_3gualOXr9lNla8__xISVq_",
				iconStyles: "_35qsI3TFFX54FD3PjwpLCv",
				mDisabled: "_2D3JNnADc6N28qHblqs-qW",
				mRedditStyle: "_1Y3PuNdUp_ye6oQQPIkE2Y",
				iconContainer: "_2Q-tHVfuqqIQLbMlSTJrlV",
				layoutButton: "_2KZsg_1r4DJcaP-Ug1LhsQ",
				mIsActive: "_70bDvpoC4B21zobSGUMe6",
				layoutSwitch: "_1o9Wtqx2f_wpqeyceGTV5w"
			}
		},
		"./src/reddit/controls/LayoutSwitch/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = s("./src/reddit/actions/preferences.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/constants/postLayout.ts"),
				u = s("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				h = s("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				g = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				C = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/selectors/telemetry.ts"),
				v = s("./src/reddit/controls/LayoutSwitch/index.m.less"),
				E = s.n(v);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			var O = function(e, t) {
				var s = {};
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (s[a] = e[a]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (a = Object.getOwnPropertySymbols(e); n < a.length; n++) t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (s[a[n]] = e[a[n]])
				}
				return s
			};
			const y = e => Object(l.a)(E.a.iconStyles, e.className, {
					[E.a.mDisabled]: e.disabled,
					[E.a.mRedditStyle]: e.redditStyle
				}),
				T = e => {
					var {
						className: t,
						disabled: s,
						redditStyle: a
					} = e, n = O(e, ["className", "disabled", "redditStyle"]);
					return o.a.createElement(h.a, x({
						className: y({
							className: t,
							disabled: s,
							redditStyle: a
						})
					}, n))
				},
				j = e => {
					var {
						className: t,
						disabled: s,
						redditStyle: a
					} = e, n = O(e, ["className", "disabled", "redditStyle"]);
					return o.a.createElement(u.a, x({
						className: y({
							className: t,
							disabled: s,
							redditStyle: a
						})
					}, n))
				},
				S = e => {
					var {
						className: t,
						disabled: s,
						redditStyle: a
					} = e, n = O(e, ["className", "disabled", "redditStyle"]);
					return o.a.createElement(g.a, x({
						className: y({
							className: t,
							disabled: s,
							redditStyle: a
						})
					}, n))
				},
				w = e => {
					var {
						isActive: t
					} = e, s = O(e, ["isActive"]);
					return o.a.createElement("button", x({
						className: Object(l.a)(E.a.layoutButton, {
							[E.a.mIsActive]: t
						})
					}, s))
				},
				I = Object(C.t)(),
				k = Object(r.c)({
					postLayout: C.L,
					redditStyle: C.A
				}),
				_ = Object(i.b)(k, e => ({
					onListingLayoutChange: (t, s) => e(Object(d.v)(t, s)),
					toggleTooltip: t => e(Object(p.h)({
						tooltipId: t
					}))
				}), (e, t, s) => Object.assign({}, e, t, s, {
					toggleTooltip: e => t.toggleTooltip(e)
				}));
			t.a = I(_(Object(b.b)(e => {
				const {
					sendEvent: t,
					subredditId: s
				} = e, n = e.layout || m.e[e.postLayout];
				return o.a.createElement("div", {
					className: Object(l.a)(E.a.layoutSwitch, e.className),
					id: "view--layout--FUE"
				}, o.a.createElement("div", {
					className: E.a.title
				}, a.fbt._("View", null, {
					hk: "18a931"
				})), o.a.createElement("div", {
					className: E.a.iconContainer
				}, (() => [{
					layout: m.d.Card,
					Icon: S,
					text: a.fbt._("Card", null, {
						hk: "22FueJ"
					})
				}, {
					layout: m.d.Classic,
					Icon: j,
					text: a.fbt._("Classic", null, {
						hk: "1Djx18"
					})
				}, {
					layout: m.d.Compact,
					Icon: T,
					text: a.fbt._("Compact", null, {
						hk: "22iWX9"
					})
				}])().map(a => {
					const i = () => (a => {
							e.onChange ? e.onChange(a) : (e.onListingLayoutChange(a, s), t(e => ({
								source: "layout_switch",
								action: "click",
								noun: a,
								screen: Object(f.screen)(e),
								subreddit: Object(f.subreddit)(e)
							})))
						})(a.layout),
						r = () => e.toggleTooltip(l),
						l = "layoutSwitch--" + a.layout,
						d = a.layout === n;
					return o.a.createElement(w, {
						"aria-label": a.text,
						"aria-pressed": d,
						id: l,
						isActive: d,
						key: a.layout,
						onClick: i,
						onMouseEnter: r,
						onMouseLeave: r,
						onTouchStart: i
					}, o.a.createElement(a.Icon, {
						disabled: !d,
						onClick: d ? void 0 : e.onLayoutClick,
						redditStyle: e.redditStyle
					}), o.a.createElement(c.c, {
						tooltipId: l,
						text: a.text
					}))
				})))
			})))
		},
		"./src/reddit/helpers/isValidHexColor/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			const a = /^#[0-9a-f]{6}$/i,
				n = /^#?[0-9a-f]{6}$/i,
				o = 7;
			t.b = (e, t) => {
				return !!e && (t ? n : a).test(e)
			}
		},
		"./src/reddit/icons/svgs/ClassicPosts/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("path", {
				d: "M1.75,6.6V1.75h16.5V6.6Zm0,5.83V7.57h16.5v4.86Zm0,5.82V13.4h16.5v4.85Z"
			}))
		},
		"./src/reddit/icons/svgs/CompactPosts/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("path", {
				d: "M1.75,5V1.75h16.5V5Zm0,4.43V6.18h16.5v3.2Zm0,8.87v-3.2h16.5v3.2Zm0-4.43v-3.2h16.5v3.2Z"
			}))
		},
		"./src/reddit/icons/svgs/LargePosts/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("path", {
				d: "M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"
			}))
		}
	}
]);
//# sourceMappingURL=reddit-components-ModHub-flairs-PostFlairManagement~reddit-components-ModHub-flairs-UserFlairManagement.ca631da0053623acd9ac.js.map