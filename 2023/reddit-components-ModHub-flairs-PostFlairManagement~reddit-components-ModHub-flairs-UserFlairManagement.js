// https://www.redditstatic.com/desktop2x/reddit-components-ModHub-flairs-PostFlairManagement~reddit-components-ModHub-flairs-UserFlairManagement.20b1eff8f2c293dbd2d0.js
// Retrieved at 6/8/2023, 8:50:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ModHub-flairs-PostFlairManagement~reddit-components-ModHub-flairs-UserFlairManagement"], {
		"./src/reddit/actions/flairManagement/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return n
			}));
			const a = "FLAIR_PREVIEW_EXAMPLE_POST_CREATED",
				n = "FLAIR_PREVIEW_EXAMPLE_POST_DELETED"
		},
		"./src/reddit/actions/flairManagement/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return C
			})), s.d(t, "a", (function() {
				return E
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "c", (function() {
				return T
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/copyToClipboard/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/postFlair.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/actions/userFlair/index.ts"),
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
					d = o ? b.f : g.e,
					c = o ? l.e : r.l,
					p = o ? l.d : r.k,
					m = d(n(), {
						subredditId: e
					});
				if (!m) throw new Error("Cannot update settings!");
				const f = [],
					C = t.displaySettings.isEnabled,
					E = t.permissions.canAssignOwn;
				C !== m.displaySettings.isEnabled && f.push(s(c(e, C)));
				const v = C && !m.displaySettings.isEnabled && !m.permissions.canAssignOwn;
				(E !== m.permissions.canAssignOwn || v) && f.push(s(p(e, E)));
				const x = (await Promise.all(f)).every(Boolean);
				return x || s(Object(i.f)({
					kind: h.b.Error,
					text: a.fbt._("Something went wrong", null, {
						hk: "4rfwXL"
					})
				})), x
			}, E = e => async (t, s) => {
				t(Object(n.a)(e) ? Object(i.f)(Object(i.e)(a.fbt._("Copied flair ID!", null, {
					hk: "3xKLOo"
				}), h.b.SuccessCommunity)) : Object(i.f)(Object(i.e)(a.fbt._("Something went wrong", null, {
					hk: "4rfwXL"
				}), h.b.Error)))
			}, v = Object(o.a)(f.a), x = Object(o.a)(f.b), T = (e, t) => async (s, a) => {
				const n = (e => {
					const {
						postId: t
					} = e, s = t.slice(3);
					return {
						id: t,
						adPromotedUserPostIds: [],
						adSupplementaryText: null,
						allAwardings: [],
						approvedAtUTC: void 0,
						approvedBy: void 0,
						author: "reddit",
						authorId: "t2_1qwk",
						authorIsBlocked: !1,
						awardCountsById: {},
						bannedAtUTC: void 0,
						bannedBy: void 0,
						contestMode: !1,
						created: Date.now() - p.U,
						crosspostParentId: null,
						crosspostRootId: null,
						discussionType: null,
						distinguishType: null,
						domain: "reddit.com",
						events: [],
						flair: [],
						ignoreReports: !0,
						impressionId: null,
						impressionIdStr: null,
						isApproved: !1,
						isArchived: !1,
						isAuthorPremium: !1,
						isBlank: !1,
						isCreatedFromAdsUi: !1,
						isCrosspostable: !0,
						isEligibleForQASchema: !1,
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
						isSurveyAd: !1,
						isStickied: !1,
						liveCommentsWebsocket: null,
						media: null,
						modReports: [],
						numComments: 100,
						numCrossposts: 0,
						numReports: 0,
						permalink: `/comments/${s}`,
						postCategories: null,
						previewComments: [],
						isReactAllowed: !1,
						reactedFrom: null,
						attributionInfo: null,
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
						voteState: m.a.notVoted,
						...e
					}
				})({
					belongsTo: {
						id: e,
						type: c.a.SUBREDDIT
					},
					flair: [t],
					postId: d.e
				});
				s(v(n))
			}
		},
		"./src/reddit/components/BlockNavigation/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/react-router/esm/react-router.js"),
				i = s("./src/reddit/actions/modal.ts");
			const l = "non-empty-string-to-block-navigation";
			class d extends n.a.Component {
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
					return n.a.createElement(r.b, {
						message: this.message,
						when: e
					})
				}
			}
			t.a = Object(o.b)(null, (e, t) => ({
				showModal: () => e(Object(i.h)(t.dialogId))
			}))(Object(r.i)(d))
		},
		"./src/reddit/components/ModHub/flairs/FlairManagement/FlairSettingsModal/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1J76qb5HBy2bYaTNJsgjRQ",
				modalHeader: "_34gci9egz3Lvx3-STpfNID",
				contentBlock: "Bv6ZRypNeiF988NrqtV_-",
				assignOwnControl: "yDJKjvn3AuAahOSYVsmN2",
				details: "Pk8ny_YG59Ztx9VspQ3qF",
				learnmore: "_1-CaGziVc4IW-B2_E4ZMmB",
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
				details: "_3QhMX3iKRWXx2prOvqUrwn",
				ctabutton: "_1sZI0nNSKH8p-ztDgZ4nV8",
				ctalink: "_1_aeK4G0VpygBDbE1PyYrg"
			}
		},
		"./src/reddit/components/ModHub/flairs/FlairManagement/connector.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return u
			})), s.d(t, "a", (function() {
				return h
			}));
			var a = s("./src/reddit/actions/emoji.ts"),
				n = s("./src/reddit/actions/flairManagement/index.ts"),
				o = s("./src/reddit/actions/modal.ts"),
				r = s("./src/reddit/featureFlags/index.ts"),
				i = s("./src/reddit/selectors/activeModalId.ts"),
				l = s("./src/reddit/selectors/emojis.ts"),
				d = s("./src/reddit/selectors/experiments/shredditModNav.ts"),
				c = s("./src/reddit/selectors/moderatorPermissions.ts"),
				p = s("./src/reddit/selectors/platform.ts"),
				m = s("./src/reddit/selectors/subreddit.ts");
			const u = {
					activeModalId: i.a,
					allowNavigationCallback: p.a,
					areFlairRestrictionsEnabled: r.d.flairRestrictions,
					subredditEmojiData: l.f,
					isInShredditModNavExperiment: (e, t) => {
						let {
							subredditId: s
						} = t;
						const a = Object(c.n)(e, {
							subredditId: s
						});
						return Object(d.a)(e, !!a)
					},
					subredditName: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(m.h)(e, {
							subredditId: s
						})
					}
				},
				h = (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						closeAllModals: () => e(Object(o.f)()),
						onCopyTemplateId: t => e(Object(n.a)(t)),
						onGetSubredditEmojisIfNeeded: () => e(Object(a.l)(s)),
						onSaveSettings: t => e(Object(n.d)(s, t)),
						toggleModal: t => e(Object(o.i)(t))
					}
				}
		},
		"./src/reddit/components/ModHub/flairs/FlairManagement/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_37KbqgukAyMf3s-j7AnBWR",
				topBar: "aF7EPRLqx7OlHhB0WLt-D",
				fixed: "tY4a5ojhWBEwI7jpcOpyL",
				default: "_3r_owJcn5iQ3if-PQyfAKq",
				defaultColor: "_3ujrhQFER4XDkr7pMYk-Uh",
				contentContainer: "_2HFh2ax8D_Jy7s1JHIHvUf",
				newModNav: "tP6M13BkfW0UJY7_ME-Ao",
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
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/components/BlockNavigation/index.tsx"),
				d = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				c = s("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				p = s("./src/reddit/components/ModHub/InfoTooltip/index.tsx"),
				m = s("./src/reddit/components/ModHub/NewModNav/PageLinks.tsx"),
				u = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				h = s("./src/reddit/components/StructuredStyles/DragItem/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/constants/flair.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				C = s("./src/reddit/controls/Sortable/index.tsx"),
				E = s("./src/reddit/helpers/flair.ts"),
				v = s("./src/reddit/models/Flair/index.ts"),
				x = s("./src/reddit/selectors/telemetry.ts");
			const T = e => e === v.d.LinkFlair ? "postflairmanagement" : "userflairmanagement",
				S = e => ({
					...x.o(e),
					subreddit: x.lb(e),
					userSubreddit: x.ub(e)
				}),
				y = e => t => s => ({
					...S(s),
					source: T(t),
					action: "click",
					noun: e
				}),
				k = e => (t, s) => a => ({
					...S(a),
					source: T(t),
					action: "toggle",
					noun: e,
					actionInfo: x.d(a, {
						settingValue: s ? "on" : "off"
					})
				}),
				_ = y("remove"),
				w = y("edit"),
				O = y("save_settings"),
				I = y("add"),
				j = k("assign_own"),
				P = k("enable"),
				N = k("mods_only"),
				D = k("edit_text"),
				F = (e, t) => t ? I(e) : w(e),
				M = e => k("post_flair_template")(v.d.LinkFlair, e),
				B = (e, t) => s => ({
					...S(s),
					source: T(e),
					action: "click",
					noun: "reorder",
					actionInfo: x.d(s, {
						count: t
					})
				}),
				R = {
					[v.a.All]: "text_and_emoji",
					[v.a.Emoji]: "emoji_only",
					[v.a.Text]: "text_only"
				},
				U = (e, t) => {
					return y(R[t] || "text_and_emoji")(e)
				},
				L = (e, t) => s => ({
					...S(s),
					source: T(e),
					action: "click",
					noun: "limit_number_emojis",
					actionInfo: x.d(s, {
						settingValue: t
					})
				});
			var A = s("./node_modules/fbt/lib/FbtPublic.js"),
				H = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				W = s("./src/reddit/constants/colors.ts"),
				V = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				Q = s("./src/reddit/components/ModHub/flairs/FlairManagement/FlairsDisabledBanner/index.m.less"),
				q = s.n(Q);
			var J, G = e => o.a.createElement(H.a, {
					className: e.className,
					color: W.a.quarantine,
					icon: o.a.createElement(V.a, {
						className: q.a.icon
					}),
					subtitle: e.flairTemplateType === v.d.UserFlair ? A.fbt._("User flairs will not be visible until feature is enabled", null, {
						hk: "4uxycm"
					}) : A.fbt._("Post flairs will not be visible until feature is enabled", null, {
						hk: "4qMV3v"
					}),
					title: e.flairTemplateType === v.d.UserFlair ? A.fbt._("User flair is disabled", null, {
						hk: "7ml7v"
					}) : A.fbt._("Post flair is disabled", null, {
						hk: "METDg"
					})
				}),
				Y = s("./node_modules/lodash/isEqual.js"),
				z = s.n(Y),
				K = s("./src/higherOrderComponents/asModal/index.tsx"),
				X = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				Z = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				$ = s("./src/reddit/controls/TextButton/index.tsx"),
				ee = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				te = s("./src/reddit/components/ModHub/flairs/FlairManagement/LabeledControl/index.m.less"),
				se = s.n(te);
			! function(e) {
				e[e.Top = 0] = "Top", e[e.Left = 1] = "Left"
			}(J || (J = {}));
			const ae = e => e.preventDefault();
			var ne = e => o.a.createElement("div", {
					className: Object(r.a)(e.className, se.a.container)
				}, o.a.createElement("label", {
					className: e.labelPosition === J.Top ? se.a.topLabel : se.a.leftLabel,
					onClick: e.preventDefaultLabelClick ? ae : void 0
				}, o.a.createElement("span", {
					className: Object(r.a)(se.a.labelText, e.labelClassName)
				}, e.label), e.children)),
				oe = s("./src/reddit/components/ModHub/flairs/FlairManagement/FlairSettingsModal/index.m.less"),
				re = s.n(oe);
			class ie extends o.a.PureComponent {
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
						t.displaySettings.isEnabled !== e.displaySettings.isEnabled && this.props.sendEvent(P(s, t.displaySettings.isEnabled)), t.permissions.canAssignOwn !== e.permissions.canAssignOwn && this.props.sendEvent(j(s, t.permissions.canAssignOwn)), this.props.sendEvent(O(s))
					}, this.onToggleIsEnabled = () => {
						const {
							settings: e
						} = this.state, t = !e.displaySettings.isEnabled, s = {
							...e,
							displaySettings: {
								...e.displaySettings,
								isEnabled: t
							},
							...!t && {
								permissions: {
									...e.permissions,
									canAssignOwn: !1
								}
							}
						};
						this.setState({
							settings: s
						})
					}, this.onToggleCanAssignOwn = () => {
						const {
							settings: e
						} = this.state, t = !e.permissions.canAssignOwn, s = {
							...e,
							permissions: {
								...e.permissions,
								canAssignOwn: t
							}
						};
						this.setState({
							settings: s
						})
					}
				}
				componentWillUnmount() {
					this.isUnmounted = !0
				}
				render() {
					const e = this.props.settings.type === v.d.UserFlair,
						{
							settings: t
						} = this.state,
						s = t !== this.props.settings;
					return o.a.createElement("div", {
						className: re.a.container
					}, o.a.createElement(X.i, {
						className: re.a.modalHeader
					}, o.a.createElement(X.q, null, e ? A.fbt._("Settings", null, {
						hk: "2gk7Gr"
					}) : A.fbt._("Settings", null, {
						hk: "3hvpSE"
					})), o.a.createElement($.a, {
						className: re.a.modalCloseButton,
						onClick: this.props.onClose
					}, o.a.createElement(X.b, null))), o.a.createElement("div", {
						className: re.a.contentBlock
					}, o.a.createElement(ne, {
						label: e ? A.fbt._("Enable user flair", null, {
							hk: "3gIN2f"
						}) : A.fbt._("Enable post flair", null, {
							hk: "3deifG"
						})
					}, o.a.createElement(ee.a, {
						on: t.displaySettings.isEnabled,
						onToggle: this.onToggleIsEnabled
					})), o.a.createElement(ne, {
						className: re.a.assignOwnControl,
						label: e ? A.fbt._("Let users to assign their own user flair", null, {
							hk: "3ZtN9o"
						}) : A.fbt._("Let users give their posts flair", null, {
							hk: "jpclf"
						}),
						labelClassName: t.displaySettings.isEnabled ? void 0 : re.a.disabled
					}, o.a.createElement(ee.a, {
						disabled: !t.displaySettings.isEnabled,
						on: t.permissions.canAssignOwn,
						onToggle: this.onToggleCanAssignOwn
					})), o.a.createElement("div", {
						className: re.a.details
					}, o.a.createElement("p", null, e ? A.fbt._("Allows users to add, edit, and remove flair to their usernames. (Must be turned on for communities that require user flair.)", null, {
						hk: "2RjtfT"
					}) : A.fbt._("Allows users to add and remove flair from their posts. (Must be turned on for communities that require post flair.)", null, {
						hk: "21SOkH"
					})), o.a.createElement("p", {
						className: re.a.learnmore
					}, e ? A.fbt._("Want to learn more about user flair and what settings are best for your community?", null, {
						hk: "1UFUju"
					}) : A.fbt._("Want to learn more about post flair and what settings are best for your community?", null, {
						hk: "1udlAU"
					}), o.a.createElement("a", {
						href: e ? "https://mods.reddithelp.com/hc/en-us/articles/360010541651-User-Flair" : "https://mods.reddithelp.com/hc/en-us/articles/360010513191-Post-Flair",
						target: "_blank",
						rel: "noopener noreferrer"
					}, e ? A.fbt._("Visit the Mod Help Center", null, {
						hk: "2RBnhE"
					}) : A.fbt._("Visit the Mod Help Center", null, {
						hk: "3N5Lsg"
					}))))), o.a.createElement(X.g, {
						className: re.a.modalFooter
					}, o.a.createElement(X.a, {
						onClick: this.props.onClose
					}, A.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(f.l, {
						onClick: this.onSaveButtonClick,
						disabled: this.state.isPending || !s
					}, this.state.isPending ? o.a.createElement(Z.a, {
						className: re.a.loadingIcon,
						sizePx: 10
					}) : A.fbt._("Save", null, {
						hk: "4yMsMq"
					}))))
				}
			}
			var le = Object(K.a)(ie),
				de = s("./src/reddit/helpers/validateFlairCssClass.ts");
			const ce = e => !e || e === W.c,
				pe = e => ({
					...e,
					backgroundColor: ce(e.backgroundColor) ? W.a.defaultFlair : W.c
				}),
				me = e => !(!e.textEditable || e.modOnly),
				ue = e => {
					const t = {
						...e
					};
					return t.modOnly && (t.textEditable = !1), t.textEditable || (t.allowableContent = v.a.All, t.maxEmojis = void 0), t.allowableContent === v.a.Text && (t.maxEmojis = void 0), t
				},
				he = e => e.userFlairAllowed,
				ge = e => e.postFlairAllowed,
				be = function(e, t, s) {
					let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
					const n = {
						...e
					};
					let o = Object(E.c)(n, !1);
					if (Object(E.a)(n)) {
						const e = t === v.d.UserFlair ? he : ge;
						o = Object(E.s)(o, s, e)
					}
					return o = Object(E.d)({
						flair: o,
						template: n,
						ignoreTextAllowance: a
					}), n.type = o.type, o.type === v.f.Richtext ? n.richtext = o.richtext : n.text = o.text, n
				},
				fe = e => {
					const t = Object(E.n)(e) && !Object(E.r)(e),
						s = e.text.length > b.g,
						a = !e.text,
						n = Object(de.a)(e.cssClass || "");
					return {
						isBlank: a,
						cssClassErrorMessage: n,
						hasFieldError: !!(t || a || s || n),
						isFlairTextTooLong: s,
						shouldRemoveFlairText: t
					}
				};
			var Ce = s("./src/reddit/components/Flair/index.tsx"),
				Ee = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				ve = s("./node_modules/lodash/range.js"),
				xe = s.n(ve),
				Te = s("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				Se = s("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				ye = s("./src/reddit/controls/DropdownSelector/index.tsx"),
				ke = s("./src/reddit/controls/RadioInput/index.tsx"),
				_e = s("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				we = s("./node_modules/react-redux/es/index.js"),
				Oe = s("./node_modules/reselect/es/index.js"),
				Ie = s("./src/reddit/actions/tooltip.ts"),
				je = s("./src/reddit/components/StructuredStyles/ColorPicker/BaseColorPicker.tsx"),
				Pe = s("./src/reddit/selectors/tooltip.ts");
			const Ne = ["right", "top"],
				De = Object(Oe.c)({
					isDropdownOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(Pe.b)(s)(e)
					}
				});
			var Fe = Object(we.b)(De, (e, t) => ({
					onToggleDropdown: () => e(Object(Ie.h)(t))
				}))(e => o.a.createElement("div", {
					id: e.tooltipId
				}, o.a.createElement(je.a, {
					dropdownPosition: Ne,
					isDropdownOpen: e.isDropdownOpen,
					onChange: e.onChange,
					onToggleDropdown: e.onToggleDropdown,
					tooltipId: e.tooltipId,
					value: e.value
				}))),
				Me = s("./src/reddit/components/ModHub/flairs/FlairManagement/FlairTemplateEditor/ColorSwitch/index.m.less"),
				Be = s.n(Me);
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
						className: Object(r.a)(Be.a.switch, e ? Be.a.dark : Be.a.light),
						onClick: this.onChange
					}, "Aa")
				}
			}
			var Ue = s("./src/reddit/actions/flairManagement/index.ts"),
				Le = s("./src/reddit/actions/post.ts"),
				Ae = s("./src/reddit/components/ThemeProvider/index.tsx"),
				He = s("./src/reddit/constants/postLayout.ts"),
				We = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Ve = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				Qe = s("./src/reddit/actions/preferences.ts"),
				qe = s("./src/reddit/icons/fonts/index.tsx"),
				Je = s("./src/reddit/controls/LayoutSwitch/index.m.less"),
				Ge = s.n(Je);

			function Ye() {
				return (Ye = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			const ze = e => Object(r.a)(Ge.a.iconStyles, e.className, {
					[Ge.a.mRedditStyle]: e.redditStyle
				}),
				Ke = e => {
					let {
						className: t,
						redditStyle: s,
						...a
					} = e;
					return o.a.createElement(qe.a, Ye({
						name: "view_compact",
						className: ze({
							className: t,
							redditStyle: s
						})
					}, a))
				},
				Xe = e => {
					let {
						className: t,
						redditStyle: s,
						...a
					} = e;
					return o.a.createElement(qe.a, Ye({
						name: "view_classic",
						className: ze({
							className: t,
							redditStyle: s
						})
					}, a))
				},
				Ze = e => {
					let {
						className: t,
						redditStyle: s,
						...a
					} = e;
					return o.a.createElement(qe.a, Ye({
						name: "view_card",
						className: ze({
							className: t,
							redditStyle: s
						})
					}, a))
				},
				$e = e => {
					let {
						isActive: t,
						...s
					} = e;
					return o.a.createElement("button", Ye({
						className: Object(r.a)(Ge.a.layoutButton, {
							[Ge.a.mIsActive]: t
						})
					}, s))
				},
				et = Object(We.v)(),
				tt = Object(Oe.c)({
					postLayout: We.U,
					redditStyle: We.E
				});
			var st = et(Object(we.b)(tt, e => ({
					onListingLayoutChange: (t, s) => e(Object(Qe.x)(t, s)),
					toggleTooltip: t => e(Object(Ie.h)({
						tooltipId: t
					}))
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					toggleTooltip: e => t.toggleTooltip(e)
				}))(Object(g.c)(e => {
					const {
						sendEvent: t,
						subredditId: s
					} = e, a = e.layout || He.e[e.postLayout];
					return o.a.createElement("div", {
						className: Object(r.a)(Ge.a.layoutSwitch, e.className),
						id: "view--layout--FUE"
					}, o.a.createElement("div", {
						className: Ge.a.title
					}, A.fbt._("View", null, {
						hk: "18a931"
					})), o.a.createElement("div", {
						className: Ge.a.iconContainer
					}, (() => [{
						layout: He.d.Card,
						Icon: Ze,
						text: A.fbt._("Card", null, {
							hk: "22FueJ"
						})
					}, {
						layout: He.d.Classic,
						Icon: Xe,
						text: A.fbt._("Classic", null, {
							hk: "1Djx18"
						})
					}, {
						layout: He.d.Compact,
						Icon: Ke,
						text: A.fbt._("Compact", null, {
							hk: "22iWX9"
						})
					}])().map(n => {
						const r = () => (a => {
								e.onChange ? e.onChange(a) : (e.onListingLayoutChange(a, s), t(e => ({
									source: "layout_switch",
									action: "click",
									noun: a,
									screen: Object(x.cb)(e),
									subreddit: Object(x.lb)(e)
								})))
							})(n.layout),
							i = () => e.toggleTooltip(l),
							l = "layoutSwitch--" + n.layout,
							d = n.layout === a;
						return o.a.createElement($e, {
							"aria-label": n.text,
							"aria-pressed": d,
							id: l,
							isActive: d,
							key: n.layout,
							onClick: r,
							onMouseEnter: i,
							onMouseLeave: i,
							onTouchStart: r
						}, o.a.createElement(n.Icon, {
							onClick: d ? void 0 : e.onLayoutClick,
							redditStyle: e.redditStyle,
							isFilled: d
						}), o.a.createElement(Ve.c, {
							tooltipId: l,
							text: n.text
						}))
					})))
				}))),
				at = s("./src/reddit/helpers/dom/index.ts"),
				nt = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				ot = s("./src/reddit/selectors/posts.ts"),
				rt = s("./src/lib/omitKey/index.ts"),
				it = s("./src/reddit/actions/imageUploads.ts"),
				lt = s("./src/reddit/models/Image/index.tsx"),
				dt = s("./src/reddit/models/StructuredStyles/index.ts"),
				ct = s("./src/reddit/selectors/structuredStyles.ts"),
				pt = s("./src/reddit/components/StructuredStyles/ImageUpload/index.tsx"),
				mt = s("./src/reddit/components/StructuredStyles/UploadedImage/index.tsx");
			var ut = e => e.imageData ? o.a.createElement(mt.e, {
					imageData: e.imageData,
					isRequestInProgress: e.isRequestInProgress,
					onRemove: e.onRemove
				}) : o.a.createElement(pt.b, {
					label: A.fbt._("Drag and Drop or Upload Image", null, {
						hk: "2zm1fD"
					}),
					onChange: e.onChange
				}),
				ht = s("./src/reddit/components/ModHub/flairs/FlairManagement/FlairTemplateEditor/PostAppearanceEditor/PostFlairStyleTemplateEditor/index.m.less"),
				gt = s.n(ht);
			const bt = e => Array.isArray(e) ? e[0] : e,
				ft = e => (t, s) => {
					const a = ((e, t) => {
						const {
							pendingImages: s
						} = e, a = s && s[t];
						return a ? a.id : void 0
					})(s.styleTemplate, e);
					return a ? t.imageUploads[a] : void 0
				},
				Ct = Object(Oe.c)({
					subredditDefaultStyles: ct.o,
					postBackgroundImage: ft(dt.e),
					postPlaceholderImage: ft(dt.f)
				}),
				Et = {
					cancelUpload: it.h
				};
			class vt extends o.a.Component {
				constructor() {
					super(...arguments), this.onChangePostTitleColor = e => {
						const t = {
							...this.props.styleTemplate,
							postTitleColor: e
						};
						this.props.onChange(t)
					}, this.onChangePostBackgroundColor = e => {
						const t = {
							...this.props.styleTemplate,
							postBackgroundColor: e
						};
						this.props.onChange(t)
					}, this.onPostBackgroundImageInput = e => {
						this.addImage(bt(e), dt.e)
					}, this.onPostPlaceholderImageInput = e => {
						this.addImage(bt(e), dt.f)
					}, this.onRemoveBackgroundImage = () => this.removeImage(dt.e), this.onRemovePlaceholderImage = () => this.removeImage(dt.f), this.addImage = async (e, t) => {
						const {
							styleTemplate: s
						} = this.props, a = await Object(lt.f)(e);
						this.props.onChange({
							...s,
							[t]: a.url,
							pendingImages: {
								...s.pendingImages,
								[t]: a
							}
						})
					}, this.cancelUpload = e => {
						const t = this.props[e];
						t && this.props.cancelUpload(t)
					}, this.removeImage = e => {
						const {
							styleTemplate: t
						} = this.props, s = t.pendingImages || {};
						this.cancelUpload(e), this.props.onChange({
							...Object(rt.a)(t, e),
							pendingImages: Object(rt.a)(s, e)
						})
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
							return Object(lt.g)(e)
						}
					}
				}
				componentWillUnmount() {
					this.cancelUpload(dt.e), this.cancelUpload(dt.f)
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
					} = t, l = this.getImageUpload(dt.e), d = this.getImageUpload(dt.f);
					return o.a.createElement("div", {
						className: Object(r.a)(e, gt.a.container)
					}, o.a.createElement("fieldset", {
						className: gt.a.leftFieldset
					}, o.a.createElement(ne, {
						label: A.fbt._("Post title color", null, {
							hk: "ssBOo"
						})
					}, o.a.createElement(Fe, {
						onChange: this.onChangePostTitleColor,
						tooltipId: "flair-postTitleColor-" + a,
						value: n
					})), o.a.createElement(ne, {
						label: A.fbt._("Thumbnail placeholder", null, {
							hk: "Rcs3p"
						}),
						labelPosition: J.Top,
						preventDefaultLabelClick: !!d
					}, o.a.createElement(ut, {
						imageData: d,
						isRequestInProgress: this.props.isSavePending,
						onChange: this.onPostPlaceholderImageInput,
						onRemove: this.onRemovePlaceholderImage
					}), o.a.createElement("div", {
						className: gt.a.imageUploadHelpText
					}, A.fbt._("Required Size: 256 x 256px", null, {
						hk: "10W3lr"
					}), o.a.createElement("br", null), A.fbt._("Appears in Classic and Card views", null, {
						hk: "1rQSTI"
					})))), o.a.createElement("fieldset", {
						className: gt.a.rightFieldset
					}, o.a.createElement(ne, {
						label: A.fbt._("Post background color", null, {
							hk: "1shJXd"
						})
					}, o.a.createElement(Fe, {
						onChange: this.onChangePostBackgroundColor,
						tooltipId: "flair-postBackgroundColor-" + a,
						value: i
					})), o.a.createElement(ne, {
						labelPosition: J.Top,
						label: A.fbt._("Post background image", null, {
							hk: "7rg1y"
						}),
						preventDefaultLabelClick: !!l
					}, o.a.createElement(ut, {
						imageData: l,
						isRequestInProgress: this.props.isSavePending,
						onChange: this.onPostBackgroundImageInput,
						onRemove: this.onRemoveBackgroundImage
					}), o.a.createElement("div", {
						className: gt.a.imageUploadHelpText
					}, A.fbt._("Jpeg or png files up to 10 MB", null, {
						hk: "1V1UV4"
					}), o.a.createElement("br", null), A.fbt._("Recommended image size: 864 x 120px", null, {
						hk: "1NCSCz"
					})))))
				}
			}
			var xt = Object(we.b)(Ct, Et)(vt),
				Tt = s("./src/reddit/components/ModHub/flairs/FlairManagement/FlairTemplateEditor/PostAppearanceEditor/index.m.less"),
				St = s.n(Tt);
			const yt = Object(Oe.c)({
					examplePost: e => Object(ot.F)(e, {
						postId: b.e
					})
				}),
				kt = Object(we.b)(yt, (e, t) => ({
					deleteExamplePost: () => e(Object(Ue.b)(b.e)),
					makeExamplePost: s => e(Object(Ue.c)(t.subredditId, s)),
					updateExamplePost: t => e(Object(Le.Q)({
						[b.e]: {
							flair: [t]
						}
					}))
				}));
			class _t extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.postWrapperRef = o.a.createRef(), this.state = {
						previewLayout: He.d.Classic
					}, this.onPostStyleTemplateChange = e => {
						const {
							templateDraft: t
						} = this.props;
						this.props.onChange({
							...t,
							styleTemplate: e
						})
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
					} = this.props, t = Object(E.c)(e);
					this.props.makeExamplePost(t), this.disableTabNavigationForPreviewPost()
				}
				componentDidUpdate(e) {
					const t = Object(E.c)(this.props.templateDraft),
						s = Object(E.c)(e.templateDraft);
					z()(t, s) || this.props.updateExamplePost(t), this.disableTabNavigationForPreviewPost()
				}
				componentWillUnmount() {
					this.props.deleteExamplePost()
				}
				disableTabNavigationForPreviewPost() {
					this.postWrapperRef.current && Object(at.a)(this.postWrapperRef.current)
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
					} = this.state, n = t.styleTemplate || {}, i = He.b[a], l = Object(nt.b)({
						layout: i,
						post: s
					});
					return o.a.createElement("div", {
						className: Object(r.a)(this.props.className, St.a.container)
					}, o.a.createElement("div", null, o.a.createElement(st, {
						className: St.a.layoutSwitch,
						layout: a,
						onChange: this.onChangePreviewLayout
					}), o.a.createElement("div", {
						className: St.a.postPreview
					}, o.a.createElement("div", {
						ref: this.postWrapperRef,
						onClickCapture: this.onPostPreviewClickCapture,
						className: Object(r.a)(St.a.postWrapper, St.a[a])
					}, o.a.createElement(Ae.a, {
						forceDayMode: !0
					}, o.a.createElement(l, {
						className: St.a.postComponent,
						postId: s.postId,
						flairStyleTemplateDraft: n,
						inSubredditOrProfile: !0,
						pageLayer: this.props.pageLayer
					}))))), o.a.createElement(xt, {
						className: St.a.postFlairStyleTemplateEditor,
						isSavePending: this.props.isSavePending,
						onChange: this.onPostStyleTemplateChange,
						styleTemplate: n,
						subredditId: e,
						templateId: t.id
					}))
				}
			}
			var wt = Object(We.v)()(kt(_t)),
				Ot = s("./src/reddit/components/ModHub/flairs/FlairManagement/FlairTemplateEditor/index.m.less"),
				It = s.n(Ot);
			const jt = "flair-management-emoji-picker",
				Pt = {},
				Nt = 250,
				Dt = xe()(b.d, 0).map(e => ({
					value: e,
					displayText: e.toString()
				}));
			class Ft extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.containerRef = o.a.createRef(), this.initialTemplate = this.props.templateDraft, this.state = {
						flairEditHadFocus: !1
					}, this.normalizeTemplate = e => {
						const {
							flairTemplateType: t,
							subredditEmojiData: s
						} = this.props;
						let a = ue(e);
						return a = be(a, t, s, !0)
					}, this.onSave = () => {
						this.props.onChange(this.normalizeTemplate(this.props.templateDraft))
					}, this.onFlairEditBlur = () => {
						this.setState({
							flairEditHadFocus: !0
						})
					}, this.onToggleBackgroundTransparency = () => {
						this.props.onChange(pe(this.props.templateDraft))
					}, this.onToggleFlairTextColor = () => {
						const {
							templateDraft: e
						} = this.props;
						this.props.onChange({
							...e,
							textColor: e.textColor === v.e.Light ? v.e.Dark : v.e.Light
						})
					}, this.onToggleModOnly = () => {
						const {
							templateDraft: e
						} = this.props, t = !e.modOnly;
						this.props.onChange(this.normalizeTemplate({
							...e,
							modOnly: t
						}))
					}, this.onToggleAllowUserEdits = () => {
						const {
							templateDraft: e
						} = this.props, t = !e.textEditable;
						this.props.onChange(this.normalizeTemplate({
							...e,
							textEditable: t
						}))
					}, this.onTogglePostAppearanceSettings = () => {
						const {
							templateDraft: e
						} = this.props, t = e.styleTemplate ? void 0 : Pt;
						this.props.onChange({
							...e,
							styleTemplate: t
						})
					}, this.onChangeBackgroundColor = e => {
						const {
							templateDraft: t
						} = this.props;
						this.props.onChange({
							...t,
							backgroundColor: e
						})
					}, this.onChangeTextColor = e => {
						const {
							templateDraft: t
						} = this.props;
						this.props.onChange({
							...t,
							textColor: e ? v.e.Dark : v.e.Light
						})
					}, this.onCSSClassValueChange = e => {
						const {
							templateDraft: t
						} = this.props;
						this.props.onChange({
							...t,
							cssClass: e.target.value
						})
					}, this.onFlairContentChanged = e => {
						const {
							templateDraft: t
						} = this.props, s = Object(E.d)({
							flair: e,
							template: t,
							ignoreTextAllowance: !0
						});
						this.props.onChange(Object(E.f)(s, this.props.templateDraft))
					}, this.onAllowableContentChange = e => {
						const {
							templateDraft: t
						} = this.props, s = {
							...t,
							allowableContent: e
						};
						this.props.onChange(this.normalizeTemplate(s))
					}, this.onEmojiLimitChange = e => {
						const {
							templateDraft: t
						} = this.props, s = {
							...t,
							maxEmojis: e.value
						};
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
						s = window.scrollY + t - Nt;
					window.scrollTo(0, s)
				}
				render() {
					const {
						areFlairRestrictionsEnabled: e,
						subredditId: t,
						templateDraft: s,
						flairTemplateType: a
					} = this.props, n = a === v.d.UserFlair, r = a === v.d.LinkFlair, i = s !== this.initialTemplate, {
						hasFieldError: l,
						cssClassErrorMessage: d
					} = fe(s), c = this.state.flairEditHadFocus || i, m = Object(Te.a)(), u = Object(E.c)(s, !1), h = ce(s.backgroundColor), g = r || !h, C = h ? W.a.defaultFlair : s.backgroundColor, x = Object(E.l)(s);
					return o.a.createElement("div", {
						className: It.a.container,
						ref: this.containerRef
					}, o.a.createElement("div", {
						className: It.a.mainContent
					}, o.a.createElement("fieldset", {
						className: It.a.leftFieldset
					}, o.a.createElement("legend", null, A.fbt._("Flair appearance", null, {
						hk: "ZRrgk"
					})), o.a.createElement(ne, {
						labelPosition: J.Top,
						label: A.fbt._("Flair text", null, {
							hk: "2ALbeU"
						})
					}, o.a.createElement(m, {
						allowBlank: !c,
						autofocus: !0,
						className: It.a.flairEdit,
						emojiPickerId: jt,
						flair: u,
						flairTemplate: s,
						flairTemplateType: a,
						isFlairModOnly: s.modOnly,
						onChange: this.onFlairContentChanged,
						subredditId: t,
						onBlur: this.onFlairEditBlur
					})), o.a.createElement(ne, {
						labelPosition: J.Top,
						label: A.fbt._("CSS class", null, {
							hk: "2khRbr"
						})
					}, o.a.createElement(Se.c, {
						className: It.a.cssClassInput,
						maxLength: b.b,
						onChange: this.onCSSClassValueChange,
						placeholder: A.fbt._("none", null, {
							hk: "3fbedu"
						}),
						spellCheck: !1,
						value: s.cssClass || ""
					}), o.a.createElement("div", {
						className: d ? It.a.cssClassErrorText : It.a.cssClassInfoText
					}, d || A.fbt._("Optional", null, {
						hk: "4Guf65"
					}))), n && o.a.createElement(ne, {
						label: A.fbt._("Add flair background", null, {
							hk: "2VdziY"
						})
					}, o.a.createElement(ee.a, {
						on: g,
						onToggle: this.onToggleBackgroundTransparency
					})), g && o.a.createElement(o.a.Fragment, null, o.a.createElement(ne, {
						label: A.fbt._("Flair background color", null, {
							hk: "1MY5ea"
						})
					}, o.a.createElement(Fe, {
						onChange: this.onChangeBackgroundColor,
						tooltipId: "flair-background-color-" + s.id,
						value: C
					})), o.a.createElement(ne, {
						label: A.fbt._("Flair text color", null, {
							hk: "11Me49"
						})
					}, o.a.createElement(Re, {
						isDark: s.textColor === v.e.Dark,
						onChange: this.onChangeTextColor
					}))), r && o.a.createElement(ne, {
						label: A.fbt._("Edit post appearance", null, {
							hk: "28CdLt"
						})
					}, o.a.createElement(ee.a, {
						on: !!s.styleTemplate,
						onToggle: this.onTogglePostAppearanceSettings
					}))), o.a.createElement("fieldset", {
						className: It.a.rightFieldset
					}, o.a.createElement("legend", null, A.fbt._("Flair settings", null, {
						hk: "JgL1E"
					})), o.a.createElement(ne, {
						label: o.a.createElement("span", {
							className: It.a.labelWithTooltip
						}, A.fbt._("Mod only", null, {
							hk: "1Cg5LH"
						}), o.a.createElement(p.a, {
							text: A.fbt._("Flair is only available for mods to select", null, {
								hk: "HkFmW"
							})
						}))
					}, o.a.createElement(ee.a, {
						on: !!s.modOnly,
						onToggle: this.onToggleModOnly
					})), o.a.createElement(ne, {
						className: s.modOnly ? It.a.disabledControl : void 0,
						label: o.a.createElement("span", {
							className: It.a.labelWithTooltip
						}, A.fbt._("Allow user edits", null, {
							hk: "26m6EE"
						}), o.a.createElement(p.a, {
							text: A.fbt._("Users will be able to edit flair text", null, {
								hk: "4mFIwp"
							})
						}))
					}, o.a.createElement(ee.a, {
						disabled: s.modOnly,
						on: me(s),
						onToggle: this.onToggleAllowUserEdits
					})), me(s) && e && o.a.createElement(ne, {
						label: A.fbt._("This flair allows", null, {
							hk: "3QLVMX"
						}),
						labelPosition: J.Top
					}, o.a.createElement(ke.a, {
						value: s.allowableContent || v.a.All,
						name: "allowable_content",
						onChange: this.onAllowableContentChange
					}, o.a.createElement(_e.a, {
						className: It.a.radioOption,
						showButton: !0,
						value: v.a.All
					}, A.fbt._("Text & Emojis", null, {
						hk: "QBDtY"
					})), o.a.createElement(_e.a, {
						className: It.a.radioOption,
						showButton: !0,
						value: v.a.Emoji
					}, A.fbt._("Emoji only", null, {
						hk: "3Ang3z"
					})), o.a.createElement(_e.a, {
						className: It.a.radioOption,
						showButton: !0,
						value: v.a.Text
					}, A.fbt._("Text only", null, {
						hk: "3HPYeS"
					})))), me(s) && s.allowableContent !== v.a.Text && e && o.a.createElement(ne, {
						label: A.fbt._("Limit number of emojis", null, {
							hk: "LnZU0"
						}),
						labelPosition: J.Top
					}, o.a.createElement(ye.a, {
						buttonClassName: It.a.dropdownSelectorButton,
						className: It.a.dropdownSelector,
						displayText: String(x),
						name: "max_emojis",
						options: Dt,
						onSelect: this.onEmojiLimitChange
					})))), r && s.styleTemplate && o.a.createElement(wt, {
						className: It.a.postAppearanceEditor,
						isSavePending: !!this.props.isSavePending,
						onChange: this.props.onChange,
						subredditId: t,
						templateDraft: s
					}), o.a.createElement("div", {
						className: It.a.buttonsRow
					}, o.a.createElement(f.o, {
						onClick: this.props.onCancel
					}, A.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(f.l, {
						disabled: this.props.isSavePending || l,
						onClick: this.props.onSave
					}, this.props.isSavePending ? o.a.createElement(Z.a, {
						className: It.a.loadingIcon,
						sizePx: 10
					}) : A.fbt._("Save", null, {
						hk: "4yMsMq"
					}))))
				}
			}
			const Mt = (e, t) => e.modOnly ? A.fbt._("Mod only", null, {
					hk: "1G6N0z"
				}) : e.textEditable ? t ? A.fbt._("Editable, {restrictions}", [A.fbt._param("restrictions", Object(E.k)(e))], {
					hk: "2GbweM"
				}) : A.fbt._("Editable", null, {
					hk: "33SB9g"
				}) : "",
				Bt = e => ({
					...b.a,
					backgroundColor: e === v.d.UserFlair ? W.c : W.a.defaultFlair
				});
			var Rt = s("./src/reddit/components/ModHub/flairs/FlairManagement/FlairTemplateRow/index.m.less"),
				Ut = s.n(Rt);
			class Lt extends o.a.PureComponent {
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
					} = this.props, i = Object(E.c)(s);
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: Object(r.a)(Ut.a.row, n ? Ut.a.reordering : null)
					}, o.a.createElement("div", {
						className: Ut.a.flairPreviewCell
					}, o.a.createElement(Ce.c, {
						className: Ut.a.flairComponent,
						flair: i,
						forceSmallEmojis: !0
					})), o.a.createElement("div", {
						className: Ut.a.cssClassCell
					}, s.cssClass), o.a.createElement("div", {
						className: Ut.a.settingsCell
					}, Mt(s, e)), o.a.createElement("div", {
						className: Ut.a.flairIdCell
					}, o.a.createElement(f.r, {
						disabled: !this.props.flairTemplate.id,
						onClick: this.onCopyIdButtonClick
					}, A.fbt._("Copy Id", null, {
						hk: "1F6Ntm"
					})), o.a.createElement(f.r, {
						disabled: t || a,
						onClick: this.onStartEditButtonClick
					}, A.fbt._("Edit", null, {
						hk: "1nftDt"
					})), o.a.createElement(f.r, {
						className: Ut.a.removeButton,
						disabled: a,
						onClick: this.onRemoveButtonClick
					}, o.a.createElement(Ee.b, null)))), a && o.a.createElement(Ft, {
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
			var At = s("./src/reddit/components/PostCreationForm/Button/index.tsx"),
				Ht = s("./src/reddit/components/ModHub/flairs/FlairManagement/Placeholder/index.m.less"),
				Wt = s.n(Ht);
			var Vt = e => o.a.createElement("div", {
					className: Wt.a.container
				}, o.a.createElement(qe.a, {
					name: "tag",
					className: Wt.a.icon
				}), o.a.createElement("h3", {
					className: Wt.a.header
				}, e.flairTemplateType === v.d.UserFlair ? A.fbt._("You don't have any user flair yet", null, {
					hk: "1yojr7"
				}) : A.fbt._("You don't have any post flair yet", null, {
					hk: "27FEIE"
				})), o.a.createElement("p", {
					className: Wt.a.details
				}, e.flairTemplateType === v.d.UserFlair ? A.fbt._("Add visual titles and treatments to the usernames of people who contribute to your community.", null, {
					hk: "1sD8iY"
				}) : A.fbt._("Add post flair to tag, label, and organize posts in your community", null, {
					hk: "J2YGN"
				})), o.a.createElement(At.a, {
					className: Wt.a.ctabutton,
					onClick: "onButtonClick" in e ? e.onButtonClick : () => {}
				}, e.flairTemplateType === v.d.UserFlair ? A.fbt._("Start Using User Flair", null, {
					hk: "4aCpya"
				}) : A.fbt._("Start Using Post Flair", null, {
					hk: "AqR9"
				})), o.a.createElement("a", {
					className: Wt.a.ctalink,
					href: e.flairTemplateType === v.d.UserFlair ? "https://mods.reddithelp.com/hc/en-us/articles/360010541651-User-Flair" : "https://mods.reddithelp.com/hc/en-us/articles/360010513191-Post-Flair",
					target: "_blank",
					rel: "noopener noreferrer"
				}, e.flairTemplateType === v.d.UserFlair ? A.fbt._("Learn More", null, {
					hk: "1pb1DV"
				}) : A.fbt._("Learn More", null, {
					hk: "qCL2C"
				}))),
				Qt = s("./src/reddit/components/ModHub/flairs/FlairManagement/index.m.less"),
				qt = s.n(Qt);

			function Jt() {
				return (Jt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			const Gt = "Flair-discard-changes-confirmation",
				Yt = "Flair-remove-confirmation",
				zt = "Flair-settings-modal";
			var Kt;
			! function(e) {
				e[e.Default = 0] = "Default", e[e.AddingTemplate = 1] = "AddingTemplate", e[e.EditingTemplate = 2] = "EditingTemplate", e[e.Reordering = 3] = "Reordering"
			}(Kt || (Kt = {}));
			const Xt = {
				isTemplateSavePending: !1,
				mode: Kt.Default,
				numTemplatesReordered: 0,
				templateBeforeEditing: void 0,
				templateDraft: void 0,
				templateIdsNewOrder: [],
				templateIdToRemove: void 0
			};
			class Zt extends o.a.Component {
				constructor() {
					super(...arguments), this.isUnmounted = !1, this.state = {
						...Xt,
						isFixed: !this.props.isInShredditModNavExperiment || this.props.flairTemplateType !== v.d.UserFlair
					}, this.isSticky = () => {
						const e = window.scrollY >= 100;
						this.setState({
							isFixed: e
						})
					}, this.hasUnsavedChanges = () => {
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
						}), t && this.setState(Xt))
					}, this.resetPendingNavigation = () => {
						this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}, this.performPendingNavigationIfNeeded = () => {
						this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onSettingsButtonClick = () => {
						this.props.toggleModal(zt)
					}, this.onCloseModal = () => {
						this.props.closeAllModals(), this.resetPendingNavigation()
					}, this.onAddNewTemplateButtonClick = () => {
						const e = Bt(this.props.flairTemplateType);
						this.setState({
							mode: Kt.AddingTemplate,
							templateDraft: e,
							templateBeforeEditing: e
						})
					}, this.onRemoveTemplateButtonClick = e => {
						this.setState({
							templateIdToRemove: e
						}), this.props.toggleModal(Yt)
					}, this.onRemoveTemplateConfirmed = () => {
						this.props.onRemoveTemplate(this.state.templateIdToRemove), this.props.sendEvent(_(this.props.flairTemplateType))
					}, this.onStartEditingExistingTemplate = e => {
						if (this.hasUnsavedChanges()) return void this.props.toggleModal(Gt);
						const t = be({
							...this.props.templates[e],
							styleTemplate: this.props.styleTemplates && this.props.styleTemplates[e]
						}, this.props.flairTemplateType, this.props.subredditEmojiData);
						this.setState({
							mode: Kt.EditingTemplate,
							templateDraft: t,
							templateBeforeEditing: t
						})
					}, this.onTemplateDraftChange = e => {
						this.setState({
							templateDraft: e
						})
					}, this.onReorderButtonClick = () => {
						this.setState({
							mode: Kt.Reordering,
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
						this.props.onReorderTemplates(t), this.props.sendEvent(B(this.props.flairTemplateType, e)), this.setState(Xt)
					}, this.onCancelReorderingClick = () => {
						this.setState(Xt)
					}, this.onCancelEditingTemplateClick = () => {
						this.hasUnsavedChanges() ? this.props.toggleModal(Gt) : this.setState(Xt)
					}, this.onDiscardUnsavedChangesConfirmed = () => {
						this.setState(Xt), this.performPendingNavigationIfNeeded()
					}, this.renderTopBar = e => {
						const {
							templateIds: t
						} = this.props, {
							mode: s
						} = this.state, a = this.props.flairTemplateType === v.d.UserFlair, n = t.length >= b.h;
						return o.a.createElement(u.c, {
							className: Object(r.a)(e ? "bg-neutral-background mb-xs pr-0" : "fixed pr-lg", qt.a.topBar, {
								[qt.a.default]: e && !a,
								[qt.a.defaultColor]: !e,
								[qt.a.fixed]: this.state.isFixed
							})
						}, s === Kt.Reordering ? o.a.createElement(o.a.Fragment, null, o.a.createElement(f.o, {
							onClick: this.onCancelReorderingClick
						}, A.fbt._("Cancel", null, {
							hk: "2TSLl5"
						})), o.a.createElement(f.l, {
							disabled: !this.state.numTemplatesReordered,
							onClick: this.onSaveCurrentOrderClick
						}, A.fbt._("Save", null, {
							hk: "4yMsMq"
						}))) : o.a.createElement(o.a.Fragment, null, o.a.createElement(f.o, {
							className: qt.a.settingsButton,
							onClick: this.onSettingsButtonClick
						}, a ? A.fbt._("Settings", null, {
							hk: "30MyeL"
						}) : A.fbt._("Settings", null, {
							hk: "2ZcwcR"
						})), o.a.createElement(f.o, {
							disabled: s !== Kt.Default || t.length < 2,
							onClick: this.onReorderButtonClick
						}, A.fbt._("Reorder", null, {
							hk: "1tQe48"
						})), o.a.createElement(f.l, {
							disabled: s !== Kt.Default || n,
							onClick: this.onAddNewTemplateButtonClick,
							title: n ? A.fbt._("Maximum number of templates reached", null, {
								hk: "3pJF49"
							}) : void 0
						}, A.fbt._("Add", null, {
							hk: "2STy1t"
						}))))
					}
				}
				componentDidMount() {
					this.props.onGetSubredditEmojisIfNeeded(), this.props.isInShredditModNavExperiment && this.props.flairTemplateType === v.d.UserFlair && window.addEventListener("scroll", this.isSticky)
				}
				componentWillUnmount() {
					this.isUnmounted = !0, this.props.isInShredditModNavExperiment && this.props.flairTemplateType === v.d.UserFlair && window.removeEventListener("scroll", this.isSticky)
				}
				sendOnSaveEvents(e) {
					const {
						templateBeforeEditing: t
					} = this.state, {
						flairTemplateType: s
					} = this.props, a = !e.id;
					if (!t) return;
					e.modOnly !== t.modOnly && this.props.sendEvent(N(s, !!e.modOnly)), e.textEditable !== t.textEditable && this.props.sendEvent(D(s, !!e.textEditable)), !!e.styleTemplate != !!t.styleTemplate && this.props.sendEvent(M(!!e.styleTemplate));
					const n = e.allowableContent || v.a.All;
					n !== (t.allowableContent || v.a.All) && this.props.sendEvent(U(s, n)), Object(E.l)(e) !== Object(E.l)(t) && this.props.sendEvent(L(s, Object(E.l)(e))), this.props.sendEvent(F(s, a))
				}
				render() {
					const {
						areFlairRestrictionsEnabled: e,
						templateIds: t,
						isInShredditModNavExperiment: s,
						subredditName: n
					} = this.props, {
						mode: g,
						templateDraft: b
					} = this.state, f = this.props.flairTemplateType === v.d.UserFlair, E = this.hasUnsavedChanges(), x = b && b.id, T = {
						areFlairRestrictionsEnabled: e,
						disableEditButton: g !== Kt.Default,
						flairTemplateType: this.props.flairTemplateType,
						onCancel: this.onCancelEditingTemplateClick,
						onChange: this.onTemplateDraftChange,
						onCopyTemplateId: this.props.onCopyTemplateId,
						onRemove: this.onRemoveTemplateButtonClick,
						onSave: this.saveCurrentTemplateDraft,
						onStartEditing: this.onStartEditingExistingTemplate,
						subredditEmojiData: this.props.subredditEmojiData,
						subredditId: this.props.subredditId
					};
					return o.a.createElement("div", {
						className: qt.a.container
					}, (!s || s && !f) && this.renderTopBar(s), o.a.createElement(u.a, {
						className: Object(r.a)(qt.a.contentContainer, {
							[qt.a.newModNav]: s && f
						})
					}, s && n && f ? o.a.createElement(o.a.Fragment, null, Object(m.d)(n, i.mc.UserFlair), this.renderTopBar(!0)) : o.a.createElement(u.b, null, f ? A.fbt._("User flair management", null, {
						hk: "2a4oeD"
					}) : A.fbt._("Post flair", null, {
						hk: "2EdNv9"
					}), o.a.createElement(c.a, {
						linkUrl: `${a.a.redditModHelpUrl}/${this.props.helpCenterLink}`
					})), !this.props.flairSettings.displaySettings.isEnabled && o.a.createElement(G, {
						className: qt.a.disabledBanner,
						flairTemplateType: this.props.flairTemplateType
					}), o.a.createElement("div", {
						className: qt.a.table
					}, o.a.createElement("div", {
						className: qt.a.tableHead
					}, o.a.createElement("div", {
						className: qt.a.flairPreviewColHeader
					}, A.fbt._("Preview", null, {
						hk: "10Gh9l"
					})), o.a.createElement("div", {
						className: qt.a.cssClassColHeader
					}, A.fbt._("CSS class", null, {
						hk: "1iLHCz"
					}), o.a.createElement(p.a, {
						text: A.fbt._("CSS classes determine the styling for flair in old Reddit", null, {
							hk: "HW6Jx"
						})
					})), o.a.createElement("div", {
						className: qt.a.settingsColHeader
					}, A.fbt._("Settings", null, {
						hk: "3Ibtnu"
					}), o.a.createElement(p.a, {
						text: e ? A.fbt._("Shows if flair is mod-only, user editable, allows text, or allows emojis", null, {
							hk: "2dhPaz"
						}) : A.fbt._("Set flair to be user editable or mod-only", null, {
							hk: "4ER9Qm"
						})
					})), o.a.createElement("div", {
						className: qt.a.flairIdColHeader
					}, A.fbt._("Flair ID", null, {
						hk: "21YCV0"
					}), o.a.createElement(p.a, {
						text: A.fbt._("Use this ID when configuring automod to assign flair", null, {
							hk: "3BJT9a"
						})
					}))), o.a.createElement("div", {
						className: qt.a.tableBody
					}, g === Kt.Default && !t.length && o.a.createElement(Vt, {
						flairTemplateType: this.props.flairTemplateType,
						onButtonClick: this.onSettingsButtonClick
					}), g === Kt.Reordering ? o.a.createElement(C.a, {
						values: this.state.templateIdsNewOrder,
						onDrop: this.onTemplatesOrderChange,
						render: (e, t, s, a, n) => o.a.createElement(h.a, {
							canDrop: n,
							className: qt.a.dragItem,
							iconClassName: qt.a.dragIcon,
							isDragging: s,
							isOver: a
						}, o.a.createElement(Lt, Jt({}, T, {
							flairTemplate: this.props.templates[e],
							isReordering: !0
						})))
					}) : t.map(e => o.a.createElement(Lt, Jt({}, T, {
						key: e,
						flairTemplate: e === x ? b : this.props.templates[e],
						isEditing: e === x,
						isSavePending: this.state.isTemplateSavePending && e === x
					}))), g === Kt.AddingTemplate && o.a.createElement(Lt, Jt({}, T, {
						flairTemplate: b,
						isSavePending: this.state.isTemplateSavePending,
						isEditing: !0
					}))))), o.a.createElement(l.a, {
						blockOnBeforeUnload: !0,
						dialogId: Gt,
						enabled: E
					}), this.props.activeModalId === Gt && o.a.createElement(d.a, {
						actionText: A.fbt._("Discard", null, {
							hk: "wpQ8E"
						}),
						headerText: x ? A.fbt._("Discard changes before leaving?", null, {
							hk: "1GQ3tN"
						}) : A.fbt._("Discard new flair?", null, {
							hk: "2aMQ0O"
						}),
						modalText: x ? A.fbt._("You have made some changes to your flair, do you wish to discard the changes to the flair you are editing?", null, {
							hk: "vZlhx"
						}) : A.fbt._("You have a new flair that has not been saved, do you wish to discard this new flair?", null, {
							hk: "4lrde4"
						}),
						onConfirm: this.onDiscardUnsavedChangesConfirmed,
						toggleModal: this.onCloseModal,
						withOverlay: !0
					}), this.props.activeModalId === Yt && o.a.createElement(d.a, {
						actionText: A.fbt._("Delete", null, {
							hk: "4lt26q"
						}),
						headerText: f ? A.fbt._("Delete user flair?", null, {
							hk: "oY3En"
						}) : A.fbt._("Delete post flair?", null, {
							hk: "3l1CC1"
						}),
						modalText: f ? A.fbt._("Do you wish to delete this user flair?", null, {
							hk: "2JAD1B"
						}) : A.fbt._("Do you wish to delete this post flair?", null, {
							hk: "1a7Q1w"
						}),
						onConfirm: this.onRemoveTemplateConfirmed,
						toggleModal: this.onCloseModal,
						withOverlay: !0
					}), this.props.activeModalId === zt && o.a.createElement(le, {
						onClose: this.onCloseModal,
						onSave: this.props.onSaveSettings,
						sendEvent: this.props.sendEvent,
						settings: this.props.flairSettings,
						subredditId: this.props.subredditId,
						withOverlay: !0
					}))
				}
			}
			t.a = Object(g.c)(Zt)
		},
		"./src/reddit/components/PostCreationForm/Button/index.m.less": function(e, t, s) {
			e.exports = {
				PrimaryButton: "_18Bo5Wuo3tMV-RDB8-kh8Z",
				primaryButton: "_18Bo5Wuo3tMV-RDB8-kh8Z",
				SecondaryButton: "lUsjLveKkZWUAgDDyU1rD",
				secondaryButton: "lUsjLveKkZWUAgDDyU1rD"
			}
		},
		"./src/reddit/components/PostCreationForm/Button/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return l
			}));
			var a = s("./src/reddit/controls/Button/index.tsx"),
				n = s("./src/reddit/components/PostCreationForm/Button/index.m.less"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx");
			const i = r.a.wrapped(a.l, "PrimaryButton", o.a),
				l = r.a.wrapped(a.o, "SecondaryButton", o.a)
		},
		"./src/reddit/components/StructuredStyles/ColorPicker/BaseColorPicker.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/helpers/isValidHexColor/index.ts"),
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
			const E = e => "#" === e[0] ? e : `#${e}`,
				v = Object(i.a)(e => o.a.createElement("div", {
					className: Object(r.a)(h.a.DropdownColorSwatch, e.isTransparent && h.a.isTransparent),
					style: {
						backgroundColor: e.isTransparent ? Object(m.a)(e).body : e.color,
						fill: Object(a.e)(e.color)
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
							}), Object(l.b)(t, !0)) {
							const e = E(t);
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
					}, o.a.createElement(v, {
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
				r = s("./src/reddit/components/StructuredStyles/StyledComponents/navs.tsx"),
				i = s("./src/reddit/icons/svgs/Grapple/index.tsx"),
				l = s("./src/reddit/icons/svgs/Lock/index.tsx"),
				d = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				c = s("./src/reddit/components/StructuredStyles/DragItem/index.m.less"),
				p = s.n(c);
			const m = o.a.wrapped(i.a, "Grapple", p.a),
				u = o.a.wrapped(l.a, "LockIcon", p.a),
				h = o.a.wrapped(d.a, "ExpandLeft", p.a);
			t.a = e => n.a.createElement(r.a, {
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
				return E
			}));
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				l = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				d = s("./src/reddit/controls/ImageDisplay/index.tsx"),
				c = s("./src/reddit/controls/TextButton/index.tsx"),
				p = s("./src/reddit/icons/svgs/Trash/index.tsx"),
				m = s("./src/reddit/models/Image/index.tsx"),
				u = s("./src/reddit/components/StructuredStyles/UploadedImage/index.m.less"),
				h = s.n(u),
				g = s("./src/lib/lessComponent.tsx");
			const b = i.a,
				f = g.a.wrapped(p.a, "TrashIcon", h.a),
				C = e => o.a.createElement("div", {
					className: Object(r.a)(h.a.BottomRow, {
						[h.a.isHiding]: e.isHiding
					})
				}, e.children),
				E = g.a.wrapped(l.c, "ErrorText", h.a);
			t.e = e => {
				const t = e.imageData && e.imageData.kind === m.b.FailedToUpload ? e.imageData.error : "",
					s = !t && e.imageData.kind === m.b.NotUploaded,
					n = e.isRequestInProgress && e.imageData.kind === m.b.TempUploaded,
					i = s || n;
				return o.a.createElement(d.a, {
					backgroundImage: e.imageData.url,
					className: Object(r.a)(e.className, h.a.imageDisplay)
				}, i && o.a.createElement(b, null), o.a.createElement(C, {
					isHiding: !!i
				}, t && o.a.createElement(E, null, a.fbt._("Something went wrong", null, {
					hk: "2xn6Fx"
				})), o.a.createElement(c.a, {
					onClick: e.onRemove
				}, o.a.createElement(f, null))))
			}
		},
		"./src/reddit/components/ThemeProvider/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			}));
			var a = s("./node_modules/icepick/icepick.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/objectSelector/index.ts"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				p = s("./src/reddit/models/StructuredStyles/index.ts"),
				m = s("./src/reddit/models/Theme/index.ts"),
				u = s("./src/reddit/selectors/structuredStyles.ts"),
				h = s("./src/reddit/selectors/subreddit.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				b = s("./src/lib/CSSVariableProvider/index.tsx"),
				f = s("./src/lib/isAdHocMultireddit/index.ts");
			const C = (e, t) => t.forceRedditTheme ? void 0 : void 0 !== t.subredditName ? t.subredditName : Object(c.r)(e, t);
			class E extends o.a.Component {
				render() {
					const {
						children: e,
						isRootOrUniqueClassName: t,
						theme: s
					} = this.props;
					return o.a.createElement(b.e, {
						theme: s,
						isRootOrUniqueClassName: t
					}, e)
				}
			}
			const v = Object(r.b)(() => Object(i.a)(e => e.themes.current, e => !!Object(u.i)(e), e => {
				if (Object(u.i)(e)) return e.structuredStyles.draft
			}, (e, t) => {
				if (Object(u.i)(e)) return Object(u.f)(e, t)
			}, C, Object(l.a)((e, t) => {
				if (Object(u.i)(e) || Object(g.ub)(e)) return;
				const s = C(e, t);
				if (!s) return;
				const a = Object(h.I)(e, s);
				if (!a) return;
				if (Object(g.tb)(e, {
						subredditId: a
					})) return;
				const n = e.structuredStyles.models[a];
				return n || void 0
			}), (e, t) => {
				const s = C(e, t);
				if (!s) return;
				const a = Object(h.z)(e, {
					subredditName: s
				});
				return a ? a.emojisCustomSize : void 0
			}, (e, t) => {
				if (t.forceDayMode) return !1;
				return Object(g.Kb)(e).nightmode
			}, (e, t) => {
				const s = Object(g.Kb)(e);
				if (Object(g.S)(e)) return !s.hideNSFW;
				const a = C(e, t);
				if (a) {
					const t = Object(h.C)(e, {
						subredditName: a
					});
					return !(!t || !t.isNSFW)
				}
				const n = Object(c.e)(e, t);
				return !!n && n.isNSFW
			}, (e, t) => t.isOverlay, (e, t) => t.isCommentsPage, (e, t, s, n, o, r, i, l, d, c, u) => {
				const h = {
						...i ? {
							emojiWidth: i[0],
							emojiHeight: i[1]
						} : {},
						shouldShowNSFWContent: d,
						isCommentsPage: u,
						isOverlay: c
					},
					g = o && o.length && !Object(f.a)(o) ? `subredditvars-r-${o.toLocaleLowerCase()}` : b.c;
				if (t && s && n) {
					const e = Object(p.h)(s, n);
					return {
						isRootOrUniqueClassName: g,
						theme: Object(m.i)(e, h)
					}
				}
				if (r) {
					const e = Object(p.h)(r);
					let t;
					return {
						isRootOrUniqueClassName: g,
						theme: t = l ? Object(m.h)(e, h) : Object(m.i)(e, h)
					}
				}
				return {
					isRootOrUniqueClassName: g,
					theme: Object(a.merge)(e, {
						subredditContext: h
					})
				}
			}))(E);
			t.b = v;
			const x = Object(d.v)()(v)
		},
		"./src/reddit/controls/LayoutSwitch/index.m.less": function(e, t, s) {
			e.exports = {
				title: "_3gualOXr9lNla8__xISVq_",
				iconStyles: "_35qsI3TFFX54FD3PjwpLCv",
				mRedditStyle: "_1Y3PuNdUp_ye6oQQPIkE2Y",
				iconContainer: "_2Q-tHVfuqqIQLbMlSTJrlV",
				layoutButton: "_2KZsg_1r4DJcaP-Ug1LhsQ",
				mIsActive: "_70bDvpoC4B21zobSGUMe6",
				layoutSwitch: "_1o9Wtqx2f_wpqeyceGTV5w"
			}
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ModHub-flairs-PostFlairManagement~reddit-components-ModHub-flairs-UserFlairManagement.20b1eff8f2c293dbd2d0.js.map