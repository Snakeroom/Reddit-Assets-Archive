// https://www.redditstatic.com/desktop2x/reddit-components-ModHub-flairs-PostFlairManagement~reddit-components-ModHub-flairs-UserFlairManagement.76c1eda120d6c7da939d.js
// Retrieved at 5/20/2020, 8:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ModHub-flairs-PostFlairManagement~reddit-components-ModHub-flairs-UserFlairManagement"], {
		"./src/reddit/actions/flairManagement/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return C
			})), s.d(t, "a", (function() {
				return v
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "c", (function() {
				return y
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/copyToClipboard/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/postFlair.ts"),
				l = s("./src/reddit/actions/toaster.ts"),
				r = s("./src/reddit/actions/userFlair.ts"),
				d = s("./src/reddit/constants/flair.ts"),
				c = s("./src/reddit/constants/posts.ts"),
				p = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/models/Vote/index.ts"),
				u = s("./src/reddit/models/Flair/index.ts"),
				h = s("./src/reddit/models/Toast/index.ts"),
				g = s("./src/reddit/selectors/postFlair.ts"),
				b = s("./src/reddit/selectors/userFlair.ts"),
				f = s("./src/reddit/actions/flairManagement/constants.ts");
			const C = (e, t) => async (s, n) => {
				const o = t.type === u.d.UserFlair,
					d = o ? b.e : g.e,
					c = o ? r.n : i.l,
					p = o ? r.m : i.k,
					m = d(n(), {
						subredditId: e
					});
				if (!m) throw new Error("Cannot update settings!");
				const f = [],
					C = t.displaySettings.isEnabled,
					v = t.permissions.canAssignOwn;
				C !== m.displaySettings.isEnabled && f.push(s(c(e, C)));
				const E = C && !m.displaySettings.isEnabled && !m.permissions.canAssignOwn;
				(v !== m.permissions.canAssignOwn || E) && f.push(s(p(e, v)));
				const x = (await Promise.all(f)).every(Boolean);
				return x || s(Object(l.e)({
					kind: h.b.Error,
					text: a.fbt._("Something went wrong", null, {
						hk: "4rfwXL"
					})
				})), x
			}, v = e => async (t, s) => {
				t(Object(n.a)(e) ? Object(l.e)(Object(l.d)(a.fbt._("Copied flair ID!", null, {
					hk: "3xKLOo"
				}), h.b.SuccessCommunity)) : Object(l.e)(Object(l.d)(a.fbt._("Something went wrong", null, {
					hk: "4rfwXL"
				}), h.b.Error)))
			}, E = Object(o.a)(f.a), x = Object(o.a)(f.b), y = (e, t) => async (s, a) => {
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
						created: Date.now() - p.H,
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
						voteState: m.a.notVoted
					}, e)
				})({
					belongsTo: {
						id: e,
						type: c.a.SUBREDDIT
					},
					flair: [t],
					postId: d.e
				});
				s(E(n))
			}
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
				cssClassCell: "_1tSivioO33rCxJr8NbnGCB",
				flairIdCell: "_2_R05GOuWSUDX3PyASVGmm",
				flairPreviewCell: "_3SFR7AjB3wiRzkfpGm8pc3",
				settingsCell: "_2JkfNJ7R1JE4IjqcpoT9Kc",
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
				return c
			})), s.d(t, "a", (function() {
				return p
			}));
			var a = s("./src/reddit/actions/emoji.ts"),
				n = s("./src/reddit/actions/flairManagement/index.ts"),
				o = s("./src/reddit/actions/modal.ts"),
				i = s("./src/reddit/featureFlags/index.ts"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				r = s("./src/reddit/selectors/emojis.ts"),
				d = s("./src/reddit/selectors/platform.ts");
			const c = {
					activeModalId: l.a,
					allowNavigationCallback: d.a,
					areFlairRestrictionsEnabled: i.d.flairRestrictions,
					subredditEmojiData: r.f
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
				cssClassColHeader: "_3VPBNym2HhcfxWqX_XAtad",
				flairIdColHeader: "_2iWLnXdkCIwJvCNl66f_JX",
				flairPreviewColHeader: "_2so4kKMPMvORvnsfCZIrI6",
				settingsColHeader: "_13gi3MUppeK5PJ1_waWROR",
				tableBody: "_6ltpvqnPD-3oGbRWx8i3b"
			}
		},
		"./src/reddit/components/ModHub/flairs/FlairManagement/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./src/config.ts"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./src/reddit/components/BlockNavigation/index.tsx"),
				l = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				r = s("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				d = s("./src/reddit/components/ModHub/InfoTooltip/index.tsx"),
				c = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				p = s("./src/reddit/components/StructuredStyles/DragItem/index.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/flair.ts"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/controls/Sortable/index.tsx"),
				b = s("./src/reddit/helpers/flair.ts"),
				f = s("./src/reddit/models/Flair/index.ts"),
				C = s("./src/reddit/selectors/telemetry.ts");
			const v = e => e === f.d.LinkFlair ? "postflairmanagement" : "userflairmanagement",
				E = e => Object.assign({}, C.defaults(e), {
					subreddit: C.subreddit(e),
					userSubreddit: C.userSubreddit(e)
				}),
				x = e => t => s => Object.assign({}, E(s), {
					source: v(t),
					action: "click",
					noun: e
				}),
				y = e => (t, s) => a => Object.assign({}, E(a), {
					source: v(t),
					action: "toggle",
					noun: e,
					actionInfo: C.actionInfo(a, {
						settingValue: s ? "on" : "off"
					})
				}),
				T = x("remove"),
				S = x("edit"),
				k = x("save_settings"),
				_ = x("add"),
				w = y("assign_own"),
				O = y("enable"),
				j = y("mods_only"),
				I = y("edit_text"),
				P = (e, t) => t ? _(e) : S(e),
				D = e => y("post_flair_template")(f.d.LinkFlair, e),
				N = (e, t) => s => Object.assign({}, E(s), {
					source: v(e),
					action: "click",
					noun: "reorder",
					actionInfo: C.actionInfo(s, {
						count: t
					})
				}),
				F = {
					[f.a.All]: "text_and_emoji",
					[f.a.Emoji]: "emoji_only",
					[f.a.Text]: "text_only"
				},
				M = (e, t) => {
					return x(F[t] || "text_and_emoji")(e)
				},
				R = (e, t) => s => Object.assign({}, E(s), {
					source: v(e),
					action: "click",
					noun: "limit_number_emojis",
					actionInfo: C.actionInfo(s, {
						settingValue: t
					})
				});
			var B, U = s("./node_modules/fbt/lib/FbtPublic.js"),
				A = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				L = s("./src/reddit/constants/colors.ts"),
				H = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				V = s("./src/reddit/components/ModHub/flairs/FlairManagement/FlairsDisabledBanner/index.m.less"),
				W = s.n(V),
				Q = e => o.a.createElement(A.a, {
					className: e.className,
					color: L.a.quarantine,
					icon: o.a.createElement(H.a, {
						className: W.a.icon
					}),
					subtitle: e.flairTemplateType === f.d.UserFlair ? U.fbt._("User flairs will not be visible until feature is enabled", null, {
						hk: "4uxycm"
					}) : U.fbt._("Post flairs will not be visible until feature is enabled", null, {
						hk: "4qMV3v"
					}),
					title: e.flairTemplateType === f.d.UserFlair ? U.fbt._("User flair is disabled", null, {
						hk: "7ml7v"
					}) : U.fbt._("Post flair is disabled", null, {
						hk: "METDg"
					})
				}),
				J = s("./node_modules/lodash/isEqual.js"),
				z = s.n(J),
				q = s("./src/higherOrderComponents/asModal/index.tsx"),
				G = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				Y = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				K = s("./src/reddit/controls/TextButton/index.tsx"),
				X = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				Z = s("./src/lib/classNames/index.ts"),
				$ = s("./src/reddit/components/ModHub/flairs/FlairManagement/LabeledControl/index.m.less"),
				ee = s.n($);
			! function(e) {
				e[e.Top = 0] = "Top", e[e.Left = 1] = "Left"
			}(B || (B = {}));
			const te = e => e.preventDefault();
			var se = e => o.a.createElement("div", {
					className: Object(Z.a)(e.className, ee.a.container)
				}, o.a.createElement("label", {
					className: e.labelPosition === B.Top ? ee.a.topLabel : ee.a.leftLabel,
					onClick: e.preventDefaultLabelClick ? te : void 0
				}, o.a.createElement("span", {
					className: Object(Z.a)(ee.a.labelText, e.labelClassName)
				}, e.label), e.children)),
				ae = s("./src/reddit/components/ModHub/flairs/FlairManagement/FlairSettingsModal/index.m.less"),
				ne = s.n(ae);
			class oe extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.isUnmounted = !1, this.state = {
						settings: this.props.settings,
						isPending: !1
					}, this.onSaveButtonClick = async () => {
						const {
							settings: e
						} = this.state;
						if (z()(this.props.settings, e)) return void this.props.onClose();
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
						t.displaySettings.isEnabled !== e.displaySettings.isEnabled && this.props.sendEvent(O(s, t.displaySettings.isEnabled)), t.permissions.canAssignOwn !== e.permissions.canAssignOwn && this.props.sendEvent(w(s, t.permissions.canAssignOwn)), this.props.sendEvent(k(s))
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
					const e = this.props.settings.type === f.d.UserFlair,
						{
							settings: t
						} = this.state,
						s = t !== this.props.settings;
					return o.a.createElement("div", {
						className: ne.a.container
					}, o.a.createElement(G.h, {
						className: ne.a.modalHeader
					}, o.a.createElement(G.p, null, e ? U.fbt._("User flair settings", null, {
						hk: "RXint"
					}) : U.fbt._("Post flair settings", null, {
						hk: "2mhOeo"
					})), o.a.createElement(K.a, {
						className: ne.a.modalCloseButton,
						onClick: this.props.onClose
					}, o.a.createElement(G.b, null))), o.a.createElement("div", {
						className: ne.a.contentBlock
					}, o.a.createElement(se, {
						label: e ? U.fbt._("Enable user flair in this community", null, {
							hk: "28E9I0"
						}) : U.fbt._("Enable post flair in this community", null, {
							hk: "17AFcD"
						})
					}, o.a.createElement(X.a, {
						on: t.displaySettings.isEnabled,
						onToggle: this.onToggleIsEnabled
					})), o.a.createElement(se, {
						className: ne.a.assignOwnControl,
						label: U.fbt._("Allow users to assign their own", null, {
							hk: "4zgmUb"
						}),
						labelClassName: t.displaySettings.isEnabled ? void 0 : ne.a.disabled
					}, o.a.createElement(X.a, {
						disabled: !t.displaySettings.isEnabled,
						on: t.permissions.canAssignOwn,
						onToggle: this.onToggleCanAssignOwn
					})), o.a.createElement("div", {
						className: ne.a.details
					}, e ? U.fbt._("This will let users select, edit, and clear user flair for their usernames in this community. This does not allow users to select or edit mod-only user flair.", null, {
						hk: "L2y8H"
					}) : U.fbt._("This will let users select, edit, and clear post flair for their posts in this community. This does not allow users to select or edit mod-only post flair.", null, {
						hk: "20qd2P"
					}))), o.a.createElement(G.f, {
						className: ne.a.modalFooter
					}, o.a.createElement(G.a, {
						onClick: this.props.onClose
					}, U.fbt._("Cancel", null, {
						hk: "1f5Zk8"
					})), o.a.createElement(h.f, {
						onClick: this.onSaveButtonClick,
						disabled: this.state.isPending || !s
					}, this.state.isPending ? o.a.createElement(Y.a, {
						className: ne.a.loadingIcon,
						sizePx: 10
					}) : U.fbt._("Save", null, {
						hk: "vz5hv"
					}))))
				}
			}
			var ie = Object(q.a)(oe),
				le = s("./src/reddit/helpers/validateFlairCssClass.ts");
			const re = e => !e || e === L.b,
				de = e => Object.assign({}, e, {
					backgroundColor: re(e.backgroundColor) ? L.a.defaultFlair : L.b
				}),
				ce = e => !(!e.textEditable || e.modOnly),
				pe = e => {
					const t = Object.assign({}, e);
					return t.modOnly && (t.textEditable = !1), t.textEditable || (t.allowableContent = f.a.All, t.maxEmojis = void 0), t.allowableContent === f.a.Text && (t.maxEmojis = void 0), t
				},
				me = e => e.userFlairAllowed,
				ue = e => e.postFlairAllowed,
				he = function(e, t, s) {
					let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
					const n = Object.assign({}, e);
					let o = Object(b.c)(n, !1);
					if (Object(b.a)(n)) {
						const e = t === f.d.UserFlair ? me : ue;
						o = Object(b.r)(o, s, e)
					}
					return o = Object(b.d)({
						flair: o,
						template: n,
						ignoreTextAllowance: a
					}), n.type = o.type, o.type === f.f.Richtext ? n.richtext = o.richtext : n.text = o.text, n
				},
				ge = e => {
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
			var be = s("./src/reddit/components/Flair/index.tsx"),
				fe = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				Ce = (s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/lodash/range.js")),
				ve = s.n(Ce),
				Ee = s("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				xe = s("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				ye = s("./src/reddit/controls/DropdownSelector/index.tsx"),
				Te = s("./src/reddit/controls/RadioInput/index.tsx"),
				Se = s("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				ke = s("./node_modules/react-redux/es/index.js"),
				_e = s("./node_modules/reselect/es/index.js"),
				we = s("./src/reddit/actions/tooltip.ts"),
				Oe = s("./src/reddit/components/StructuredStyles/ColorPicker/BaseColorPicker.tsx"),
				je = s("./src/reddit/selectors/tooltip.ts"),
				Ie = s("./src/reddit/selectors/user.ts");
			const Pe = ["right", "top"],
				De = Object(_e.c)({
					isDropdownOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(je.b)(s)(e)
					},
					language: Ie.Q
				});
			var Ne = Object(ke.b)(De, (e, t) => ({
					onToggleDropdown: () => e(Object(we.h)(t))
				}))(e => o.a.createElement("div", {
					id: e.tooltipId
				}, o.a.createElement(Oe.a, {
					dropdownPosition: Pe,
					isDropdownOpen: e.isDropdownOpen,
					language: e.language,
					onChange: e.onChange,
					onToggleDropdown: e.onToggleDropdown,
					tooltipId: e.tooltipId,
					value: e.value
				}))),
				Fe = s("./src/reddit/components/ModHub/flairs/FlairManagement/FlairTemplateEditor/ColorSwitch/index.m.less"),
				Me = s.n(Fe);
			class Re extends o.a.PureComponent {
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
						className: Object(Z.a)(Me.a.switch, e ? Me.a.dark : Me.a.light),
						onClick: this.onChange
					}, "Aa")
				}
			}
			var Be = s("./src/reddit/actions/flairManagement/index.ts"),
				Ue = s("./src/reddit/actions/post.ts"),
				Ae = s("./src/reddit/components/ThemeProvider/index.tsx"),
				Le = s("./src/reddit/constants/postLayout.ts"),
				He = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Ve = s("./src/reddit/controls/LayoutSwitch/index.tsx"),
				We = s("./src/reddit/helpers/dom/index.ts"),
				Qe = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				Je = s("./src/reddit/selectors/posts.ts"),
				ze = s("./src/lib/omitKey/index.ts"),
				qe = s("./src/reddit/actions/imageUploads.ts"),
				Ge = s("./src/reddit/models/Image/index.tsx"),
				Ye = s("./src/reddit/models/StructuredStyles/index.ts"),
				Ke = s("./src/reddit/selectors/structuredStyles.ts"),
				Xe = s("./src/reddit/components/StructuredStyles/ImageUpload/index.tsx"),
				Ze = s("./src/reddit/components/StructuredStyles/UploadedImage/index.tsx");
			var $e = e => e.imageData ? o.a.createElement(Ze.e, {
					imageData: e.imageData,
					isRequestInProgress: e.isRequestInProgress,
					onRemove: e.onRemove
				}) : o.a.createElement(Xe.b, {
					label: U.fbt._("Drag and Drop or Upload Image", null, {
						hk: "2zm1fD"
					}),
					onChange: e.onChange
				}),
				et = s("./src/reddit/components/ModHub/flairs/FlairManagement/FlairTemplateEditor/PostAppearanceEditor/PostFlairStyleTemplateEditor/index.m.less"),
				tt = s.n(et);
			const st = e => Array.isArray(e) ? e[0] : e,
				at = e => (t, s) => {
					const a = ((e, t) => {
						const {
							pendingImages: s
						} = e, a = s && s[t];
						return a ? a.id : void 0
					})(s.styleTemplate, e);
					return a ? t.imageUploads[a] : void 0
				},
				nt = Object(_e.c)({
					subredditDefaultStyles: Ke.p,
					postBackgroundImage: at(Ye.e),
					postPlaceholderImage: at(Ye.f)
				}),
				ot = {
					cancelUpload: qe.h
				};
			class it extends o.a.Component {
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
						this.addImage(st(e), Ye.e)
					}, this.onPostPlaceholderImageInput = e => {
						this.addImage(st(e), Ye.f)
					}, this.onRemoveBackgroundImage = () => this.removeImage(Ye.e), this.onRemovePlaceholderImage = () => this.removeImage(Ye.f), this.addImage = async (e, t) => {
						const {
							styleTemplate: s
						} = this.props, a = await Object(Ge.f)(e);
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
						this.cancelUpload(e), this.props.onChange(Object.assign({}, Object(ze.a)(t, e), {
							pendingImages: Object(ze.a)(s, e)
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
							return Object(Ge.g)(e)
						}
					}
				}
				componentWillUnmount() {
					this.cancelUpload(Ye.e), this.cancelUpload(Ye.f)
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
					} = t, l = this.getImageUpload(Ye.e), r = this.getImageUpload(Ye.f);
					return o.a.createElement("div", {
						className: Object(Z.a)(e, tt.a.container)
					}, o.a.createElement("fieldset", {
						className: tt.a.leftFieldset
					}, o.a.createElement(se, {
						label: U.fbt._("Post title color", null, {
							hk: "ssBOo"
						})
					}, o.a.createElement(Ne, {
						onChange: this.onChangePostTitleColor,
						tooltipId: "flair-postTitleColor-" + a,
						value: n
					})), o.a.createElement(se, {
						label: U.fbt._("Thumbnail placeholder", null, {
							hk: "Rcs3p"
						}),
						labelPosition: B.Top,
						preventDefaultLabelClick: !!r
					}, o.a.createElement($e, {
						imageData: r,
						isRequestInProgress: this.props.isSavePending,
						onChange: this.onPostPlaceholderImageInput,
						onRemove: this.onRemovePlaceholderImage
					}), o.a.createElement("div", {
						className: tt.a.imageUploadHelpText
					}, U.fbt._("Required Size: 256 x 256px", null, {
						hk: "10W3lr"
					}), o.a.createElement("br", null), U.fbt._("Appears in Classic and Card views", null, {
						hk: "1rQSTI"
					})))), o.a.createElement("fieldset", {
						className: tt.a.rightFieldset
					}, o.a.createElement(se, {
						label: U.fbt._("Post background color", null, {
							hk: "1shJXd"
						})
					}, o.a.createElement(Ne, {
						onChange: this.onChangePostBackgroundColor,
						tooltipId: "flair-postBackgroundColor-" + a,
						value: i
					})), o.a.createElement(se, {
						labelPosition: B.Top,
						label: U.fbt._("Post background image", null, {
							hk: "7rg1y"
						}),
						preventDefaultLabelClick: !!l
					}, o.a.createElement($e, {
						imageData: l,
						isRequestInProgress: this.props.isSavePending,
						onChange: this.onPostBackgroundImageInput,
						onRemove: this.onRemoveBackgroundImage
					}), o.a.createElement("div", {
						className: tt.a.imageUploadHelpText
					}, U.fbt._("Jpeg or png files up to 10 MB", null, {
						hk: "1V1UV4"
					}), o.a.createElement("br", null), U.fbt._("Recommended image size: 864 x 120px", null, {
						hk: "1NCSCz"
					})))))
				}
			}
			var lt = Object(ke.b)(nt, ot)(it),
				rt = s("./src/reddit/components/ModHub/flairs/FlairManagement/FlairTemplateEditor/PostAppearanceEditor/index.m.less"),
				dt = s.n(rt);
			const ct = Object(_e.c)({
					examplePost: e => Object(Je.O)(e, {
						postId: u.e
					})
				}),
				pt = Object(ke.b)(ct, (e, t) => ({
					deleteExamplePost: () => e(Object(Be.b)(u.e)),
					makeExamplePost: s => e(Object(Be.c)(t.subredditId, s)),
					updateExamplePost: t => e(Object(Ue.T)({
						[u.e]: {
							flair: [t]
						}
					}))
				}));
			class mt extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.postWrapperRef = o.a.createRef(), this.state = {
						previewLayout: Le.d.Classic
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
					z()(t, s) || this.props.updateExamplePost(t), this.disableTabNavigationForPreviewPost()
				}
				componentWillUnmount() {
					this.props.deleteExamplePost()
				}
				disableTabNavigationForPreviewPost() {
					this.postWrapperRef.current && Object(We.a)(this.postWrapperRef.current)
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
					} = this.state, n = t.styleTemplate || {}, i = Le.b[a], l = Object(Qe.b)({
						isFirstPost: !1,
						layout: i,
						post: s
					});
					return o.a.createElement("div", {
						className: Object(Z.a)(this.props.className, dt.a.container)
					}, o.a.createElement("div", null, o.a.createElement(Ve.a, {
						className: dt.a.layoutSwitch,
						layout: a,
						onChange: this.onChangePreviewLayout
					}), o.a.createElement("div", {
						className: dt.a.postPreview
					}, o.a.createElement("div", {
						ref: this.postWrapperRef,
						onClickCapture: this.onPostPreviewClickCapture,
						className: Object(Z.a)(dt.a.postWrapper, dt.a[a])
					}, o.a.createElement(Ae.a, {
						forceDayMode: !0
					}, o.a.createElement(l, {
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
			var ut = Object(He.t)()(pt(mt)),
				ht = s("./src/reddit/components/ModHub/flairs/FlairManagement/FlairTemplateEditor/index.m.less"),
				gt = s.n(ht);
			const bt = "flair-management-emoji-picker",
				ft = {},
				Ct = 250,
				vt = ve()(u.d, 0).map(e => ({
					value: e,
					displayText: e.toString()
				}));
			class Et extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.containerRef = o.a.createRef(), this.initialTemplate = this.props.templateDraft, this.state = {
						flairEditHadFocus: !1
					}, this.normalizeTemplate = e => {
						const {
							flairTemplateType: t,
							subredditEmojiData: s
						} = this.props;
						let a = pe(e);
						return a = he(a, t, s, !0)
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
							textColor: e.textColor === f.e.Light ? f.e.Dark : f.e.Light
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
							textColor: e ? f.e.Dark : f.e.Light
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
						s = window.scrollY + t - Ct;
					window.scrollTo(0, s)
				}
				render() {
					const {
						areFlairRestrictionsEnabled: e,
						subredditId: t,
						templateDraft: s,
						flairTemplateType: a
					} = this.props, n = a === f.d.UserFlair, i = a === f.d.LinkFlair, l = s !== this.initialTemplate, {
						hasFieldError: r,
						cssClassErrorMessage: c
					} = ge(s), p = this.state.flairEditHadFocus || l, m = Object(Ee.a)(), g = Object(b.c)(s, !1), C = re(s.backgroundColor), v = i || !C, E = C ? L.a.defaultFlair : s.backgroundColor, x = Object(b.l)(s);
					return o.a.createElement("div", {
						className: gt.a.container,
						ref: this.containerRef
					}, o.a.createElement("div", {
						className: gt.a.mainContent
					}, o.a.createElement("fieldset", {
						className: gt.a.leftFieldset
					}, o.a.createElement("legend", null, U.fbt._("Flair appearance", null, {
						hk: "ZRrgk"
					})), o.a.createElement(se, {
						labelPosition: B.Top,
						label: U.fbt._("Flair text", null, {
							hk: "2ALbeU"
						})
					}, o.a.createElement(m, {
						allowBlank: !p,
						autofocus: !0,
						className: gt.a.flairEdit,
						emojiPickerId: bt,
						flair: g,
						flairTemplate: s,
						flairTemplateType: a,
						isFlairModOnly: s.modOnly,
						onChange: this.onFlairContentChanged,
						subredditId: t,
						onBlur: this.onFlairEditBlur
					})), o.a.createElement(se, {
						labelPosition: B.Top,
						label: U.fbt._("CSS class", null, {
							hk: "2khRbr"
						})
					}, o.a.createElement(xe.c, {
						className: gt.a.cssClassInput,
						maxLength: u.b,
						onChange: this.onCSSClassValueChange,
						placeholder: U.fbt._("none", null, {
							hk: "3fbedu"
						}),
						spellCheck: !1,
						value: s.cssClass || ""
					}), o.a.createElement("div", {
						className: c ? gt.a.cssClassErrorText : gt.a.cssClassInfoText
					}, c || U.fbt._("Optional", null, {
						hk: "4Guf65"
					}))), n && o.a.createElement(se, {
						label: U.fbt._("Add flair background", null, {
							hk: "2VdziY"
						})
					}, o.a.createElement(X.a, {
						on: v,
						onToggle: this.onToggleBackgroundTransparency
					})), v && o.a.createElement(o.a.Fragment, null, o.a.createElement(se, {
						label: U.fbt._("Flair background color", null, {
							hk: "1MY5ea"
						})
					}, o.a.createElement(Ne, {
						onChange: this.onChangeBackgroundColor,
						tooltipId: "flair-background-color-" + s.id,
						value: E
					})), o.a.createElement(se, {
						label: U.fbt._("Flair text color", null, {
							hk: "11Me49"
						})
					}, o.a.createElement(Re, {
						isDark: s.textColor === f.e.Dark,
						onChange: this.onChangeTextColor
					}))), i && o.a.createElement(se, {
						label: U.fbt._("Edit post appearance", null, {
							hk: "28CdLt"
						})
					}, o.a.createElement(X.a, {
						on: !!s.styleTemplate,
						onToggle: this.onTogglePostAppearanceSettings
					}))), o.a.createElement("fieldset", {
						className: gt.a.rightFieldset
					}, o.a.createElement("legend", null, U.fbt._("Flair settings", null, {
						hk: "JgL1E"
					})), o.a.createElement(se, {
						label: o.a.createElement("span", {
							className: gt.a.labelWithTooltip
						}, U.fbt._("Mod only", null, {
							hk: "1Cg5LH"
						}), o.a.createElement(d.a, {
							text: U.fbt._("Flair is only available for mods to select", null, {
								hk: "HkFmW"
							})
						}))
					}, o.a.createElement(X.a, {
						on: !!s.modOnly,
						onToggle: this.onToggleModOnly
					})), o.a.createElement(se, {
						className: s.modOnly ? gt.a.disabledControl : void 0,
						label: o.a.createElement("span", {
							className: gt.a.labelWithTooltip
						}, U.fbt._("Allow user edits", null, {
							hk: "26m6EE"
						}), o.a.createElement(d.a, {
							text: U.fbt._("Users will be able to edit flair text", null, {
								hk: "4mFIwp"
							})
						}))
					}, o.a.createElement(X.a, {
						disabled: s.modOnly,
						on: ce(s),
						onToggle: this.onToggleAllowUserEdits
					})), ce(s) && e && o.a.createElement(se, {
						label: U.fbt._("This flair allows", null, {
							hk: "3QLVMX"
						}),
						labelPosition: B.Top
					}, o.a.createElement(Te.a, {
						value: s.allowableContent || f.a.All,
						name: "allowable_content",
						onChange: this.onAllowableContentChange
					}, o.a.createElement(Se.a, {
						className: gt.a.radioOption,
						showButton: !0,
						value: f.a.All
					}, U.fbt._("Text & Emojis", null, {
						hk: "QBDtY"
					})), o.a.createElement(Se.a, {
						className: gt.a.radioOption,
						showButton: !0,
						value: f.a.Emoji
					}, U.fbt._("Emoji only", null, {
						hk: "3Ang3z"
					})), o.a.createElement(Se.a, {
						className: gt.a.radioOption,
						showButton: !0,
						value: f.a.Text
					}, U.fbt._("Text only", null, {
						hk: "3HPYeS"
					})))), ce(s) && s.allowableContent !== f.a.Text && e && o.a.createElement(se, {
						label: U.fbt._("Limit number of emojis", null, {
							hk: "LnZU0"
						}),
						labelPosition: B.Top
					}, o.a.createElement(ye.a, {
						buttonClassName: gt.a.dropdownSelectorButton,
						className: gt.a.dropdownSelector,
						displayText: String(x),
						name: "max_emojis",
						options: vt,
						onSelect: this.onEmojiLimitChange
					})))), i && s.styleTemplate && o.a.createElement(ut, {
						className: gt.a.postAppearanceEditor,
						isSavePending: !!this.props.isSavePending,
						onChange: this.props.onChange,
						subredditId: t,
						templateDraft: s
					}), o.a.createElement("div", {
						className: gt.a.buttonsRow
					}, o.a.createElement(h.i, {
						onClick: this.props.onCancel
					}, U.fbt._("Cancel", null, {
						hk: "2k7mWx"
					})), o.a.createElement(h.f, {
						disabled: this.props.isSavePending || r,
						onClick: this.props.onSave
					}, this.props.isSavePending ? o.a.createElement(Y.a, {
						className: gt.a.loadingIcon,
						sizePx: 10
					}) : U.fbt._("Save", null, {
						hk: "40s1bl"
					}))))
				}
			}
			const xt = (e, t) => e.modOnly ? U.fbt._("Mod only", null, {
					hk: "1G6N0z"
				}) : e.textEditable ? t ? U.fbt._("Editable, {restrictions}", [U.fbt._param("restrictions", Object(b.k)(e))], {
					hk: "2GbweM"
				}) : U.fbt._("Editable", null, {
					hk: "33SB9g"
				}) : "",
				yt = e => Object.assign({}, u.a, {
					backgroundColor: e === f.d.UserFlair ? L.b : L.a.defaultFlair
				});
			var Tt = s("./src/reddit/components/ModHub/flairs/FlairManagement/FlairTemplateRow/index.m.less"),
				St = s.n(Tt);
			class kt extends o.a.PureComponent {
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
						className: Object(Z.a)(St.a.row, n ? St.a.reordering : null)
					}, o.a.createElement("div", {
						className: St.a.flairPreviewCell
					}, o.a.createElement(be.b, {
						className: St.a.flairComponent,
						flair: i,
						forceSmallEmojis: !0
					})), o.a.createElement("div", {
						className: St.a.cssClassCell
					}, s.cssClass), o.a.createElement("div", {
						className: St.a.settingsCell
					}, xt(s, e)), o.a.createElement("div", {
						className: St.a.flairIdCell
					}, o.a.createElement(h.n, {
						disabled: !this.props.flairTemplate.id,
						onClick: this.onCopyIdButtonClick
					}, U.fbt._("Copy Id", null, {
						hk: "1F6Ntm"
					})), o.a.createElement(h.n, {
						disabled: t || a,
						onClick: this.onStartEditButtonClick
					}, U.fbt._("Edit", null, {
						hk: "AYNA3"
					})), o.a.createElement(h.n, {
						className: St.a.removeButton,
						disabled: a,
						onClick: this.onRemoveButtonClick
					}, o.a.createElement(fe.b, null)))), a && o.a.createElement(Et, {
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
			var _t = s("./src/reddit/icons/svgs/Tag/index.tsx"),
				wt = s("./src/reddit/components/ModHub/flairs/FlairManagement/Placeholder/index.m.less"),
				Ot = s.n(wt),
				jt = e => o.a.createElement("div", {
					className: Ot.a.container
				}, o.a.createElement(_t.a, {
					className: Ot.a.icon
				}), o.a.createElement("h3", {
					className: Ot.a.header
				}, e.flairTemplateType === f.d.UserFlair ? U.fbt._("You do not have any user flair", null, {
					hk: "VFnhz"
				}) : U.fbt._("You do not have any post flair", null, {
					hk: "26g8jc"
				})), o.a.createElement("p", {
					className: Ot.a.details
				}, e.flairTemplateType === f.d.UserFlair ? U.fbt._("Create user flair in your community today", null, {
					hk: "1OHj7g"
				}) : U.fbt._("Create post flair in your community today", null, {
					hk: "1QVXca"
				}))),
				It = s("./src/reddit/components/ModHub/flairs/FlairManagement/index.m.less"),
				Pt = s.n(It);

			function Dt() {
				return (Dt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			const Nt = "Flair-discard-changes-confirmation",
				Ft = "Flair-remove-confirmation",
				Mt = "Flair-settings-modal";
			var Rt;
			! function(e) {
				e[e.Default = 0] = "Default", e[e.AddingTemplate = 1] = "AddingTemplate", e[e.EditingTemplate = 2] = "EditingTemplate", e[e.Reordering = 3] = "Reordering"
			}(Rt || (Rt = {}));
			const Bt = {
				isTemplateSavePending: !1,
				mode: Rt.Default,
				numTemplatesReordered: 0,
				templateBeforeEditing: void 0,
				templateDraft: void 0,
				templateIdsNewOrder: [],
				templateIdToRemove: void 0
			};
			class Ut extends o.a.Component {
				constructor() {
					super(...arguments), this.isUnmounted = !1, this.state = Object.assign({}, Bt), this.hasUnsavedChanges = () => {
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
						}), t && this.setState(Bt))
					}, this.resetPendingNavigation = () => {
						this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}, this.performPendingNavigationIfNeeded = () => {
						this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onSettingsButtonClick = () => {
						this.props.toggleModal(Mt)
					}, this.onCloseModal = () => {
						this.props.closeAllModals(), this.resetPendingNavigation()
					}, this.onAddNewTemplateButtonClick = () => {
						const e = yt(this.props.flairTemplateType);
						this.setState({
							mode: Rt.AddingTemplate,
							templateDraft: e,
							templateBeforeEditing: e
						})
					}, this.onRemoveTemplateButtonClick = e => {
						this.setState({
							templateIdToRemove: e
						}), this.props.toggleModal(Ft)
					}, this.onRemoveTemplateConfirmed = () => {
						this.props.onRemoveTemplate(this.state.templateIdToRemove), this.props.sendEvent(T(this.props.flairTemplateType))
					}, this.onStartEditingExistingTemplate = e => {
						if (this.hasUnsavedChanges()) return void this.props.toggleModal(Nt);
						const t = he(Object.assign({}, this.props.templates[e], {
							styleTemplate: this.props.styleTemplates && this.props.styleTemplates[e]
						}), this.props.flairTemplateType, this.props.subredditEmojiData);
						this.setState({
							mode: Rt.EditingTemplate,
							templateDraft: t,
							templateBeforeEditing: t
						})
					}, this.onTemplateDraftChange = e => {
						this.setState({
							templateDraft: e
						})
					}, this.onReorderButtonClick = () => {
						this.setState({
							mode: Rt.Reordering,
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
						this.props.onReorderTemplates(t), this.props.sendEvent(N(this.props.flairTemplateType, e)), this.setState(Bt)
					}, this.onCancelReorderingClick = () => {
						this.setState(Bt)
					}, this.onCancelEditingTemplateClick = () => {
						this.hasUnsavedChanges() ? this.props.toggleModal(Nt) : this.setState(Bt)
					}, this.onDiscardUnsavedChangesConfirmed = () => {
						this.setState(Bt), this.performPendingNavigationIfNeeded()
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
					e.modOnly !== t.modOnly && this.props.sendEvent(j(s, !!e.modOnly)), e.textEditable !== t.textEditable && this.props.sendEvent(I(s, !!e.textEditable)), !!e.styleTemplate != !!t.styleTemplate && this.props.sendEvent(D(!!e.styleTemplate));
					const n = e.allowableContent || f.a.All;
					n !== (t.allowableContent || f.a.All) && this.props.sendEvent(M(s, n)), Object(b.l)(e) !== Object(b.l)(t) && this.props.sendEvent(R(s, Object(b.l)(e))), this.props.sendEvent(P(s, a))
				}
				render() {
					const {
						areFlairRestrictionsEnabled: e,
						templateIds: t
					} = this.props, {
						mode: s,
						templateDraft: n
					} = this.state, m = this.props.flairTemplateType === f.d.UserFlair, b = this.hasUnsavedChanges(), C = n && n.id, v = {
						areFlairRestrictionsEnabled: e,
						disableEditButton: s !== Rt.Default,
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
						className: Pt.a.container
					}, o.a.createElement(c.c, {
						className: Pt.a.topBar
					}, s === Rt.Reordering ? o.a.createElement(o.a.Fragment, null, o.a.createElement(h.i, {
						onClick: this.onCancelReorderingClick
					}, U.fbt._("Cancel", null, {
						hk: "2vpWWM"
					})), o.a.createElement(h.f, {
						disabled: !this.state.numTemplatesReordered,
						onClick: this.onSaveCurrentOrderClick
					}, U.fbt._("Save", null, {
						hk: "3gwTS0"
					}))) : o.a.createElement(o.a.Fragment, null, o.a.createElement(h.i, {
						className: Pt.a.settingsButton,
						onClick: this.onSettingsButtonClick
					}, m ? U.fbt._("User flair settings", null, {
						hk: "nqCOM"
					}) : U.fbt._("Post flair settings", null, {
						hk: "m80j6"
					})), o.a.createElement(h.i, {
						disabled: s !== Rt.Default || t.length < 2,
						onClick: this.onReorderButtonClick
					}, U.fbt._("Reorder", null, {
						hk: "1tQe48"
					})), o.a.createElement(h.f, {
						disabled: s !== Rt.Default || E,
						onClick: this.onAddNewTemplateButtonClick,
						title: E ? U.fbt._("Maximum number of templates reached", null, {
							hk: "3pJF49"
						}) : void 0
					}, U.fbt._("Add flair", null, {
						hk: "4oqbLK"
					})))), o.a.createElement(c.a, {
						className: Pt.a.contentContainer
					}, o.a.createElement(c.b, null, m ? U.fbt._("User flair management", null, {
						hk: "2a4oeD"
					}) : U.fbt._("Post flair management", null, {
						hk: "3DSrei"
					}), o.a.createElement(r.a, {
						linkUrl: "".concat(a.a.redditHelpUrl.modHelpCenter).concat(this.props.helpCenterLink)
					})), !this.props.flairSettings.displaySettings.isEnabled && o.a.createElement(Q, {
						className: Pt.a.disabledBanner,
						flairTemplateType: this.props.flairTemplateType
					}), o.a.createElement("div", {
						className: Pt.a.table
					}, o.a.createElement("div", {
						className: Pt.a.tableHead
					}, o.a.createElement("div", {
						className: Pt.a.flairPreviewColHeader
					}, m ? U.fbt._("User flair preview", null, {
						hk: "1RayEx"
					}) : U.fbt._("Post flair preview", null, {
						hk: "ykrSg"
					})), o.a.createElement("div", {
						className: Pt.a.cssClassColHeader
					}, U.fbt._("CSS class", null, {
						hk: "1iLHCz"
					}), o.a.createElement(d.a, {
						text: U.fbt._("CSS classes determine the styling for flair in old Reddit", null, {
							hk: "HW6Jx"
						})
					})), o.a.createElement("div", {
						className: Pt.a.settingsColHeader
					}, U.fbt._("Settings", null, {
						hk: "3Ibtnu"
					}), o.a.createElement(d.a, {
						text: e ? U.fbt._("Shows if flair is mod-only, user editable, allows text, or allows emojis", null, {
							hk: "2dhPaz"
						}) : U.fbt._("Set flair to be user editable or mod-only", null, {
							hk: "4ER9Qm"
						})
					})), o.a.createElement("div", {
						className: Pt.a.flairIdColHeader
					}, U.fbt._("Flair ID", null, {
						hk: "21YCV0"
					}), o.a.createElement(d.a, {
						text: U.fbt._("Use this ID when configuring automod to assign flair", null, {
							hk: "3BJT9a"
						})
					}))), o.a.createElement("div", {
						className: Pt.a.tableBody
					}, s === Rt.Default && !t.length && o.a.createElement(jt, {
						flairTemplateType: this.props.flairTemplateType
					}), s === Rt.Reordering ? o.a.createElement(g.a, {
						values: this.state.templateIdsNewOrder,
						onDrop: this.onTemplatesOrderChange,
						render: (e, t, s, a, n) => o.a.createElement(p.a, {
							canDrop: n,
							className: Pt.a.dragItem,
							iconClassName: Pt.a.dragIcon,
							isDragging: s,
							isOver: a
						}, o.a.createElement(kt, Dt({}, v, {
							flairTemplate: this.props.templates[e],
							isReordering: !0
						})))
					}) : t.map(e => o.a.createElement(kt, Dt({}, v, {
						key: e,
						flairTemplate: e === C ? n : this.props.templates[e],
						isEditing: e === C,
						isSavePending: this.state.isTemplateSavePending && e === C
					}))), s === Rt.AddingTemplate && o.a.createElement(kt, Dt({}, v, {
						flairTemplate: n,
						isSavePending: this.state.isTemplateSavePending,
						isEditing: !0
					}))))), o.a.createElement(i.a, {
						blockOnBeforeUnload: !0,
						dialogId: Nt,
						enabled: b
					}), this.props.activeModalId === Nt && o.a.createElement(l.a, {
						actionText: U.fbt._("Discard", null, {
							hk: "wpQ8E"
						}),
						headerText: C ? U.fbt._("Discard changes before leaving?", null, {
							hk: "1GQ3tN"
						}) : U.fbt._("Discard new flair?", null, {
							hk: "2aMQ0O"
						}),
						modalText: C ? U.fbt._("You have made some changes to your flair, do you wish to discard the changes to the flair you are editing?", null, {
							hk: "vZlhx"
						}) : U.fbt._("You have a new flair that has not been saved, do you wish to discard this new flair?", null, {
							hk: "4lrde4"
						}),
						onConfirm: this.onDiscardUnsavedChangesConfirmed,
						toggleModal: this.onCloseModal,
						withOverlay: !0
					}), this.props.activeModalId === Ft && o.a.createElement(l.a, {
						actionText: U.fbt._("Delete", null, {
							hk: "3nBb5n"
						}),
						headerText: m ? U.fbt._("Delete user flair?", null, {
							hk: "oY3En"
						}) : U.fbt._("Delete post flair?", null, {
							hk: "3l1CC1"
						}),
						modalText: m ? U.fbt._("Do you wish to delete this user flair?", null, {
							hk: "2JAD1B"
						}) : U.fbt._("Do you wish to delete this post flair?", null, {
							hk: "1a7Q1w"
						}),
						onConfirm: this.onRemoveTemplateConfirmed,
						toggleModal: this.onCloseModal,
						withOverlay: !0
					}), this.props.activeModalId === Mt && o.a.createElement(ie, {
						onClose: this.onCloseModal,
						onSave: this.props.onSaveSettings,
						sendEvent: this.props.sendEvent,
						settings: this.props.flairSettings,
						subredditId: this.props.subredditId,
						withOverlay: !0
					}))
				}
			}
			t.a = Object(m.c)(Ut)
		},
		"./src/reddit/components/StructuredStyles/ColorPicker/BaseColorPicker.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				r = s("./src/reddit/helpers/isValidHexColor/index.ts"),
				d = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				c = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				p = s("./src/reddit/models/StructuredStyles/index.ts"),
				m = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = s("./src/reddit/components/StructuredStyles/ColorPicker/index.m.less"),
				h = s.n(u),
				g = s("./src/higherOrderComponents/makeAsync.tsx"),
				b = s("./src/lib/loadWithRetries/index.ts");
			const f = () => null;
			var C = Object(g.a)({
				ErrorComponent: f,
				getComponent: () => Object(b.a)(() => s.e("ColorPickerDropdown").then(s.bind(null, "./src/reddit/components/StructuredStyles/ColorPicker/_ColorPickerDropdown.tsx"))).then(e => e.default),
				LoadingComponent: f
			});
			const v = e => "#" === e[0] ? e : "#".concat(e),
				E = Object(l.a)(e => o.a.createElement("div", {
					className: Object(i.a)(h.a.DropdownColorSwatch, e.isTransparent && h.a.isTransparent),
					style: {
						backgroundColor: e.isTransparent ? Object(m.a)(e).body : e.color,
						fill: Object(a.f)(e.color)
					}
				}, e.isDropdownOpen ? o.a.createElement(c.a, {
					className: h.a.ChevronUp
				}) : o.a.createElement(d.a, {
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
							}), Object(r.b)(t, !0)) {
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
				UNSAFE_componentWillReceiveProps(e) {
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
					}), o.a.createElement(C, {
						container: s,
						inputValue: t.inputValue,
						includeTransparent: e.includeTransparent,
						isOpen: e.isDropdownOpen,
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
				l = s("./src/reddit/icons/svgs/Grapple/index.tsx"),
				r = s("./src/reddit/icons/svgs/Lock/index.tsx"),
				d = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				c = s("./src/reddit/components/StructuredStyles/DragItem/index.m.less"),
				p = s.n(c);
			const m = o.a.wrapped(l.a, "Grapple", p.a),
				u = o.a.wrapped(r.a, "LockIcon", p.a),
				h = o.a.wrapped(d.a, "ExpandLeft", p.a);
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
				return f
			})), s.d(t, "a", (function() {
				return C
			})), s.d(t, "b", (function() {
				return v
			}));
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				r = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				d = s("./src/reddit/controls/ImageDisplay/index.tsx"),
				c = s("./src/reddit/controls/TextButton/index.tsx"),
				p = s("./src/reddit/icons/svgs/Trash/index.tsx"),
				m = s("./src/reddit/models/Image/index.tsx"),
				u = s("./src/reddit/components/StructuredStyles/UploadedImage/index.m.less"),
				h = s.n(u),
				g = s("./src/lib/lessComponent.tsx");
			const b = l.a,
				f = g.a.wrapped(p.a, "TrashIcon", h.a),
				C = e => o.a.createElement("div", {
					className: Object(i.a)(h.a.BottomRow, {
						[h.a.isHiding]: e.isHiding
					})
				}, e.children),
				v = g.a.wrapped(r.c, "ErrorText", h.a);
			t.e = e => {
				const t = e.imageData && e.imageData.kind === m.b.FailedToUpload ? e.imageData.error : "",
					s = !t && e.imageData.kind === m.b.NotUploaded,
					n = e.isRequestInProgress && e.imageData.kind === m.b.TempUploaded,
					l = s || n;
				return o.a.createElement(d.a, {
					backgroundImage: e.imageData.url,
					className: Object(i.a)(e.className, h.a.imageDisplay)
				}, l && o.a.createElement(b, null), o.a.createElement(C, {
					isHiding: !!l
				}, t && o.a.createElement(v, null, a.fbt._("Something went wrong", null, {
					hk: "2xn6Fx"
				})), o.a.createElement(c.a, {
					onClick: e.onRemove
				}, o.a.createElement(f, null))))
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
				l = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = s("./src/reddit/actions/preferences.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/constants/postLayout.ts"),
				u = s("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				h = s("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				g = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				f = s("./src/reddit/contexts/PageLayer/index.tsx"),
				C = s("./src/reddit/selectors/telemetry.ts"),
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
			var y = function(e, t) {
				var s = {};
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (s[a] = e[a]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (a = Object.getOwnPropertySymbols(e); n < a.length; n++) t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (s[a[n]] = e[a[n]])
				}
				return s
			};
			const T = e => Object(r.a)(E.a.iconStyles, e.className, {
					[E.a.mDisabled]: e.disabled,
					[E.a.mRedditStyle]: e.redditStyle
				}),
				S = e => {
					var {
						className: t,
						disabled: s,
						redditStyle: a
					} = e, n = y(e, ["className", "disabled", "redditStyle"]);
					return o.a.createElement(h.a, x({
						className: T({
							className: t,
							disabled: s,
							redditStyle: a
						})
					}, n))
				},
				k = e => {
					var {
						className: t,
						disabled: s,
						redditStyle: a
					} = e, n = y(e, ["className", "disabled", "redditStyle"]);
					return o.a.createElement(u.a, x({
						className: T({
							className: t,
							disabled: s,
							redditStyle: a
						})
					}, n))
				},
				_ = e => {
					var {
						className: t,
						disabled: s,
						redditStyle: a
					} = e, n = y(e, ["className", "disabled", "redditStyle"]);
					return o.a.createElement(g.a, x({
						className: T({
							className: t,
							disabled: s,
							redditStyle: a
						})
					}, n))
				},
				w = e => {
					var {
						isActive: t
					} = e, s = y(e, ["isActive"]);
					return o.a.createElement("button", x({
						className: Object(r.a)(E.a.layoutButton, {
							[E.a.mIsActive]: t
						})
					}, s))
				},
				O = Object(f.t)(),
				j = Object(l.c)({
					postLayout: f.N,
					redditStyle: f.A
				}),
				I = Object(i.b)(j, e => ({
					onListingLayoutChange: (t, s) => e(Object(c.x)(t, s)),
					toggleTooltip: t => e(Object(p.h)({
						tooltipId: t
					}))
				}), (e, t, s) => Object.assign({}, e, t, s, {
					toggleTooltip: e => t.toggleTooltip(e)
				}));
			t.a = O(I(Object(b.c)(e => {
				const {
					sendEvent: t,
					subredditId: s
				} = e, n = e.layout || m.e[e.postLayout];
				return o.a.createElement("div", {
					className: Object(r.a)(E.a.layoutSwitch, e.className),
					id: "view--layout--FUE"
				}, o.a.createElement("div", {
					className: E.a.title
				}, a.fbt._("View", null, {
					hk: "18a931"
				})), o.a.createElement("div", {
					className: E.a.iconContainer
				}, (() => [{
					layout: m.d.Card,
					Icon: _,
					text: a.fbt._("Card", null, {
						hk: "22FueJ"
					})
				}, {
					layout: m.d.Classic,
					Icon: k,
					text: a.fbt._("Classic", null, {
						hk: "1Djx18"
					})
				}, {
					layout: m.d.Compact,
					Icon: S,
					text: a.fbt._("Compact", null, {
						hk: "22iWX9"
					})
				}])().map(a => {
					const i = () => (a => {
							e.onChange ? e.onChange(a) : (e.onListingLayoutChange(a, s), t(e => ({
								source: "layout_switch",
								action: "click",
								noun: a,
								screen: Object(C.screen)(e),
								subreddit: Object(C.subreddit)(e)
							})))
						})(a.layout),
						l = () => e.toggleTooltip(r),
						r = "layoutSwitch--" + a.layout,
						c = a.layout === n;
					return o.a.createElement(w, {
						"aria-label": a.text,
						"aria-pressed": c,
						id: r,
						isActive: c,
						key: a.layout,
						onClick: i,
						onMouseEnter: l,
						onMouseLeave: l,
						onTouchStart: i
					}, o.a.createElement(a.Icon, {
						disabled: !c,
						onClick: c ? void 0 : e.onLayoutClick,
						redditStyle: e.redditStyle
					}), o.a.createElement(d.c, {
						tooltipId: r,
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
//# sourceMappingURL=reddit-components-ModHub-flairs-PostFlairManagement~reddit-components-ModHub-flairs-UserFlairManagement.76c1eda120d6c7da939d.js.map