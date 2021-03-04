// https://www.redditstatic.com/desktop2x/reddit-components-ModHub-flairs-PostFlairManagement~reddit-components-ModHub-flairs-UserFlairManagement.31e0fa4ae201d3baad0a.js
// Retrieved at 3/4/2021, 6:10:04 PM by Reddit Dataminer v1.0.0
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
				return T
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/copyToClipboard/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/postFlair.ts"),
				l = s("./src/reddit/actions/toaster.ts"),
				r = s("./src/reddit/actions/userFlair/index.ts"),
				d = s("./src/reddit/constants/flair.ts"),
				c = s("./src/reddit/constants/posts.ts"),
				p = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/models/Vote/index.ts"),
				h = s("./src/reddit/models/Flair/index.ts"),
				u = s("./src/reddit/models/Toast/index.ts"),
				g = s("./src/reddit/selectors/postFlair.ts"),
				b = s("./src/reddit/selectors/userFlair.ts"),
				f = s("./src/reddit/actions/flairManagement/constants.ts");
			const C = (e, t) => async (s, n) => {
				const o = t.type === h.d.UserFlair,
					d = o ? b.e : g.e,
					c = o ? r.e : i.l,
					p = o ? r.d : i.k,
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
					kind: u.b.Error,
					text: a.fbt._("Something went wrong", null, {
						hk: "4rfwXL"
					})
				})), x
			}, v = e => async (t, s) => {
				t(Object(n.a)(e) ? Object(l.e)(Object(l.d)(a.fbt._("Copied flair ID!", null, {
					hk: "3xKLOo"
				}), u.b.SuccessCommunity)) : Object(l.e)(Object(l.d)(a.fbt._("Something went wrong", null, {
					hk: "4rfwXL"
				}), u.b.Error)))
			}, E = Object(o.a)(f.a), x = Object(o.a)(f.b), T = (e, t) => async (s, a) => {
				const n = (e => {
					const {
						postId: t
					} = e, s = t.slice(3);
					return {
						id: t,
						allAwardings: [],
						approvedAtUTC: void 0,
						approvedBy: void 0,
						author: "reddit",
						authorId: "t2_1qwk",
						awardCountsById: {},
						bannedAtUTC: void 0,
						bannedBy: void 0,
						contestMode: !1,
						created: Date.now() - p.J,
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
				p = (e, {
					subredditId: t
				}) => ({
					closeAllModals: () => e(Object(o.f)()),
					onCopyTemplateId: t => e(Object(n.a)(t)),
					onGetSubredditEmojisIfNeeded: () => e(Object(a.m)(t)),
					onSaveSettings: s => e(Object(n.d)(t, s)),
					toggleModal: t => e(Object(o.i)(t))
				})
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
				h = s("./src/reddit/constants/flair.ts"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/controls/Sortable/index.tsx"),
				b = s("./src/reddit/helpers/flair.ts"),
				f = s("./src/reddit/models/Flair/index.ts"),
				C = s("./src/reddit/selectors/telemetry.ts");
			const v = e => e === f.d.LinkFlair ? "postflairmanagement" : "userflairmanagement",
				E = e => ({
					...C.defaults(e),
					subreddit: C.subreddit(e),
					userSubreddit: C.userSubreddit(e)
				}),
				x = e => t => s => ({
					...E(s),
					source: v(t),
					action: "click",
					noun: e
				}),
				T = e => (t, s) => a => ({
					...E(a),
					source: v(t),
					action: "toggle",
					noun: e,
					actionInfo: C.actionInfo(a, {
						settingValue: s ? "on" : "off"
					})
				}),
				y = x("remove"),
				S = x("edit"),
				k = x("save_settings"),
				_ = x("add"),
				w = T("assign_own"),
				O = T("enable"),
				I = T("mods_only"),
				P = T("edit_text"),
				D = (e, t) => t ? _(e) : S(e),
				j = e => T("post_flair_template")(f.d.LinkFlair, e),
				N = (e, t) => s => ({
					...E(s),
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
				R = (e, t) => s => ({
					...E(s),
					source: v(e),
					action: "click",
					noun: "limit_number_emojis",
					actionInfo: C.actionInfo(s, {
						settingValue: t
					})
				});
			var B = s("./node_modules/fbt/lib/FbtPublic.js"),
				U = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				L = s("./src/reddit/constants/colors.ts"),
				A = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				H = s("./src/reddit/components/ModHub/flairs/FlairManagement/FlairsDisabledBanner/index.m.less"),
				V = s.n(H);
			var W, Q = e => o.a.createElement(U.a, {
					className: e.className,
					color: L.b.quarantine,
					icon: o.a.createElement(A.a, {
						className: V.a.icon
					}),
					subtitle: e.flairTemplateType === f.d.UserFlair ? B.fbt._("User flairs will not be visible until feature is enabled", null, {
						hk: "4uxycm"
					}) : B.fbt._("Post flairs will not be visible until feature is enabled", null, {
						hk: "4qMV3v"
					}),
					title: e.flairTemplateType === f.d.UserFlair ? B.fbt._("User flair is disabled", null, {
						hk: "7ml7v"
					}) : B.fbt._("Post flair is disabled", null, {
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
			}(W || (W = {}));
			const te = e => e.preventDefault();
			var se = e => o.a.createElement("div", {
					className: Object(Z.a)(e.className, ee.a.container)
				}, o.a.createElement("label", {
					className: e.labelPosition === W.Top ? ee.a.topLabel : ee.a.leftLabel,
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
					const e = this.props.settings.type === f.d.UserFlair,
						{
							settings: t
						} = this.state,
						s = t !== this.props.settings;
					return o.a.createElement("div", {
						className: ne.a.container
					}, o.a.createElement(G.h, {
						className: ne.a.modalHeader
					}, o.a.createElement(G.p, null, e ? B.fbt._("User flair settings", null, {
						hk: "RXint"
					}) : B.fbt._("Post flair settings", null, {
						hk: "2mhOeo"
					})), o.a.createElement(K.a, {
						className: ne.a.modalCloseButton,
						onClick: this.props.onClose
					}, o.a.createElement(G.b, null))), o.a.createElement("div", {
						className: ne.a.contentBlock
					}, o.a.createElement(se, {
						label: e ? B.fbt._("Enable user flair in this community", null, {
							hk: "28E9I0"
						}) : B.fbt._("Enable post flair in this community", null, {
							hk: "17AFcD"
						})
					}, o.a.createElement(X.a, {
						on: t.displaySettings.isEnabled,
						onToggle: this.onToggleIsEnabled
					})), o.a.createElement(se, {
						className: ne.a.assignOwnControl,
						label: B.fbt._("Allow users to assign their own", null, {
							hk: "4zgmUb"
						}),
						labelClassName: t.displaySettings.isEnabled ? void 0 : ne.a.disabled
					}, o.a.createElement(X.a, {
						disabled: !t.displaySettings.isEnabled,
						on: t.permissions.canAssignOwn,
						onToggle: this.onToggleCanAssignOwn
					})), o.a.createElement("div", {
						className: ne.a.details
					}, e ? B.fbt._("This will let users select, edit, and clear user flair for their usernames in this community. This does not allow users to select or edit mod-only user flair.", null, {
						hk: "L2y8H"
					}) : B.fbt._("This will let users select, edit, and clear post flair for their posts in this community. This does not allow users to select or edit mod-only post flair.", null, {
						hk: "20qd2P"
					}))), o.a.createElement(G.f, {
						className: ne.a.modalFooter
					}, o.a.createElement(G.a, {
						onClick: this.props.onClose
					}, B.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(u.i, {
						onClick: this.onSaveButtonClick,
						disabled: this.state.isPending || !s
					}, this.state.isPending ? o.a.createElement(Y.a, {
						className: ne.a.loadingIcon,
						sizePx: 10
					}) : B.fbt._("Save", null, {
						hk: "vz5hv"
					}))))
				}
			}
			var ie = Object(q.a)(oe),
				le = s("./src/reddit/helpers/validateFlairCssClass.ts");
			const re = e => !e || e === L.c,
				de = e => ({
					...e,
					backgroundColor: re(e.backgroundColor) ? L.b.defaultFlair : L.c
				}),
				ce = e => !(!e.textEditable || e.modOnly),
				pe = e => {
					const t = {
						...e
					};
					return t.modOnly && (t.textEditable = !1), t.textEditable || (t.allowableContent = f.a.All, t.maxEmojis = void 0), t.allowableContent === f.a.Text && (t.maxEmojis = void 0), t
				},
				me = e => e.userFlairAllowed,
				he = e => e.postFlairAllowed,
				ue = (e, t, s, a = !1) => {
					const n = {
						...e
					};
					let o = Object(b.c)(n, !1);
					if (Object(b.a)(n)) {
						const e = t === f.d.UserFlair ? me : he;
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
						s = e.text.length > h.g,
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
				Ce = s("./node_modules/lodash/range.js"),
				ve = s.n(Ce),
				Ee = s("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				xe = s("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				Te = s("./src/reddit/controls/DropdownSelector/index.tsx"),
				ye = s("./src/reddit/controls/RadioInput/index.tsx"),
				Se = s("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				ke = s("./node_modules/react-redux/es/index.js"),
				_e = s("./node_modules/reselect/es/index.js"),
				we = s("./src/reddit/actions/tooltip.ts"),
				Oe = s("./src/reddit/components/StructuredStyles/ColorPicker/BaseColorPicker.tsx"),
				Ie = s("./src/reddit/selectors/tooltip.ts");
			const Pe = ["right", "top"],
				De = Object(_e.c)({
					isDropdownOpen: (e, {
						tooltipId: t
					}) => Object(Ie.b)(t)(e)
				});
			var je = Object(ke.b)(De, (e, t) => ({
					onToggleDropdown: () => e(Object(we.h)(t))
				}))(e => o.a.createElement("div", {
					id: e.tooltipId
				}, o.a.createElement(Oe.a, {
					dropdownPosition: Pe,
					isDropdownOpen: e.isDropdownOpen,
					onChange: e.onChange,
					onToggleDropdown: e.onToggleDropdown,
					tooltipId: e.tooltipId,
					value: e.value
				}))),
				Ne = s("./src/reddit/components/ModHub/flairs/FlairManagement/FlairTemplateEditor/ColorSwitch/index.m.less"),
				Fe = s.n(Ne);
			class Me extends o.a.PureComponent {
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
						className: Object(Z.a)(Fe.a.switch, e ? Fe.a.dark : Fe.a.light),
						onClick: this.onChange
					}, "Aa")
				}
			}
			var Re = s("./src/reddit/actions/flairManagement/index.ts"),
				Be = s("./src/reddit/actions/post.ts"),
				Ue = s("./src/reddit/components/ThemeProvider/index.tsx"),
				Le = s("./src/reddit/constants/postLayout.ts"),
				Ae = s("./src/reddit/contexts/PageLayer/index.tsx"),
				He = s("./src/reddit/controls/LayoutSwitch/index.tsx"),
				Ve = s("./src/reddit/helpers/dom/index.ts"),
				We = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				Qe = s("./src/reddit/selectors/posts.ts"),
				Je = s("./src/lib/omitKey/index.ts"),
				ze = s("./src/reddit/actions/imageUploads.ts"),
				qe = s("./src/reddit/models/Image/index.tsx"),
				Ge = s("./src/reddit/models/StructuredStyles/index.ts"),
				Ye = s("./src/reddit/selectors/structuredStyles.ts"),
				Ke = s("./src/reddit/components/StructuredStyles/ImageUpload/index.tsx"),
				Xe = s("./src/reddit/components/StructuredStyles/UploadedImage/index.tsx");
			var Ze = e => e.imageData ? o.a.createElement(Xe.e, {
					imageData: e.imageData,
					isRequestInProgress: e.isRequestInProgress,
					onRemove: e.onRemove
				}) : o.a.createElement(Ke.b, {
					label: B.fbt._("Drag and Drop or Upload Image", null, {
						hk: "2zm1fD"
					}),
					onChange: e.onChange
				}),
				$e = s("./src/reddit/components/ModHub/flairs/FlairManagement/FlairTemplateEditor/PostAppearanceEditor/PostFlairStyleTemplateEditor/index.m.less"),
				et = s.n($e);
			const tt = e => Array.isArray(e) ? e[0] : e,
				st = e => (t, s) => {
					const a = ((e, t) => {
						const {
							pendingImages: s
						} = e, a = s && s[t];
						return a ? a.id : void 0
					})(s.styleTemplate, e);
					return a ? t.imageUploads[a] : void 0
				},
				at = Object(_e.c)({
					subredditDefaultStyles: Ye.o,
					postBackgroundImage: st(Ge.e),
					postPlaceholderImage: st(Ge.f)
				}),
				nt = {
					cancelUpload: ze.h
				};
			class ot extends o.a.Component {
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
						this.addImage(tt(e), Ge.e)
					}, this.onPostPlaceholderImageInput = e => {
						this.addImage(tt(e), Ge.f)
					}, this.onRemoveBackgroundImage = () => this.removeImage(Ge.e), this.onRemovePlaceholderImage = () => this.removeImage(Ge.f), this.addImage = async (e, t) => {
						const {
							styleTemplate: s
						} = this.props, a = await Object(qe.f)(e);
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
							...Object(Je.a)(t, e),
							pendingImages: Object(Je.a)(s, e)
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
							return Object(qe.g)(e)
						}
					}
				}
				componentWillUnmount() {
					this.cancelUpload(Ge.e), this.cancelUpload(Ge.f)
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
					} = t, l = this.getImageUpload(Ge.e), r = this.getImageUpload(Ge.f);
					return o.a.createElement("div", {
						className: Object(Z.a)(e, et.a.container)
					}, o.a.createElement("fieldset", {
						className: et.a.leftFieldset
					}, o.a.createElement(se, {
						label: B.fbt._("Post title color", null, {
							hk: "ssBOo"
						})
					}, o.a.createElement(je, {
						onChange: this.onChangePostTitleColor,
						tooltipId: "flair-postTitleColor-" + a,
						value: n
					})), o.a.createElement(se, {
						label: B.fbt._("Thumbnail placeholder", null, {
							hk: "Rcs3p"
						}),
						labelPosition: W.Top,
						preventDefaultLabelClick: !!r
					}, o.a.createElement(Ze, {
						imageData: r,
						isRequestInProgress: this.props.isSavePending,
						onChange: this.onPostPlaceholderImageInput,
						onRemove: this.onRemovePlaceholderImage
					}), o.a.createElement("div", {
						className: et.a.imageUploadHelpText
					}, B.fbt._("Required Size: 256 x 256px", null, {
						hk: "10W3lr"
					}), o.a.createElement("br", null), B.fbt._("Appears in Classic and Card views", null, {
						hk: "1rQSTI"
					})))), o.a.createElement("fieldset", {
						className: et.a.rightFieldset
					}, o.a.createElement(se, {
						label: B.fbt._("Post background color", null, {
							hk: "1shJXd"
						})
					}, o.a.createElement(je, {
						onChange: this.onChangePostBackgroundColor,
						tooltipId: "flair-postBackgroundColor-" + a,
						value: i
					})), o.a.createElement(se, {
						labelPosition: W.Top,
						label: B.fbt._("Post background image", null, {
							hk: "7rg1y"
						}),
						preventDefaultLabelClick: !!l
					}, o.a.createElement(Ze, {
						imageData: l,
						isRequestInProgress: this.props.isSavePending,
						onChange: this.onPostBackgroundImageInput,
						onRemove: this.onRemoveBackgroundImage
					}), o.a.createElement("div", {
						className: et.a.imageUploadHelpText
					}, B.fbt._("Jpeg or png files up to 10 MB", null, {
						hk: "1V1UV4"
					}), o.a.createElement("br", null), B.fbt._("Recommended image size: 864 x 120px", null, {
						hk: "1NCSCz"
					})))))
				}
			}
			var it = Object(ke.b)(at, nt)(ot),
				lt = s("./src/reddit/components/ModHub/flairs/FlairManagement/FlairTemplateEditor/PostAppearanceEditor/index.m.less"),
				rt = s.n(lt);
			const dt = Object(_e.c)({
					examplePost: e => Object(Qe.I)(e, {
						postId: h.e
					})
				}),
				ct = Object(ke.b)(dt, (e, t) => ({
					deleteExamplePost: () => e(Object(Re.b)(h.e)),
					makeExamplePost: s => e(Object(Re.c)(t.subredditId, s)),
					updateExamplePost: t => e(Object(Be.L)({
						[h.e]: {
							flair: [t]
						}
					}))
				}));
			class pt extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.postWrapperRef = o.a.createRef(), this.state = {
						previewLayout: Le.d.Classic
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
					this.postWrapperRef.current && Object(Ve.a)(this.postWrapperRef.current)
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
					} = this.state, n = t.styleTemplate || {}, i = Le.b[a], l = Object(We.b)({
						isFirstPost: !1,
						layout: i,
						post: s
					});
					return o.a.createElement("div", {
						className: Object(Z.a)(this.props.className, rt.a.container)
					}, o.a.createElement("div", null, o.a.createElement(He.a, {
						className: rt.a.layoutSwitch,
						layout: a,
						onChange: this.onChangePreviewLayout
					}), o.a.createElement("div", {
						className: rt.a.postPreview
					}, o.a.createElement("div", {
						ref: this.postWrapperRef,
						onClickCapture: this.onPostPreviewClickCapture,
						className: Object(Z.a)(rt.a.postWrapper, rt.a[a])
					}, o.a.createElement(Ue.a, {
						forceDayMode: !0
					}, o.a.createElement(l, {
						className: rt.a.postComponent,
						postId: s.postId,
						flairStyleTemplateDraft: n,
						inSubredditOrProfile: !0,
						pageLayer: this.props.pageLayer
					}))))), o.a.createElement(it, {
						className: rt.a.postFlairStyleTemplateEditor,
						isSavePending: this.props.isSavePending,
						onChange: this.onPostStyleTemplateChange,
						styleTemplate: n,
						subredditId: e,
						templateId: t.id
					}))
				}
			}
			var mt = Object(Ae.t)()(ct(pt)),
				ht = s("./src/reddit/components/ModHub/flairs/FlairManagement/FlairTemplateEditor/index.m.less"),
				ut = s.n(ht);
			const gt = "flair-management-emoji-picker",
				bt = {},
				ft = 250,
				Ct = ve()(h.d, 0).map(e => ({
					value: e,
					displayText: e.toString()
				}));
			class vt extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.containerRef = o.a.createRef(), this.initialTemplate = this.props.templateDraft, this.state = {
						flairEditHadFocus: !1
					}, this.normalizeTemplate = e => {
						const {
							flairTemplateType: t,
							subredditEmojiData: s
						} = this.props;
						let a = pe(e);
						return a = ue(a, t, s, !0)
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
						this.props.onChange({
							...e,
							textColor: e.textColor === f.e.Light ? f.e.Dark : f.e.Light
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
						} = this.props, t = e.styleTemplate ? void 0 : bt;
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
							textColor: e ? f.e.Dark : f.e.Light
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
						} = this.props, s = Object(b.d)({
							flair: e,
							template: t,
							ignoreTextAllowance: !0
						});
						this.props.onChange(Object(b.f)(s, this.props.templateDraft))
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
						s = window.scrollY + t - ft;
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
					} = ge(s), p = this.state.flairEditHadFocus || l, m = Object(Ee.a)(), g = Object(b.c)(s, !1), C = re(s.backgroundColor), v = i || !C, E = C ? L.b.defaultFlair : s.backgroundColor, x = Object(b.l)(s);
					return o.a.createElement("div", {
						className: ut.a.container,
						ref: this.containerRef
					}, o.a.createElement("div", {
						className: ut.a.mainContent
					}, o.a.createElement("fieldset", {
						className: ut.a.leftFieldset
					}, o.a.createElement("legend", null, B.fbt._("Flair appearance", null, {
						hk: "ZRrgk"
					})), o.a.createElement(se, {
						labelPosition: W.Top,
						label: B.fbt._("Flair text", null, {
							hk: "2ALbeU"
						})
					}, o.a.createElement(m, {
						allowBlank: !p,
						autofocus: !0,
						className: ut.a.flairEdit,
						emojiPickerId: gt,
						flair: g,
						flairTemplate: s,
						flairTemplateType: a,
						isFlairModOnly: s.modOnly,
						onChange: this.onFlairContentChanged,
						subredditId: t,
						onBlur: this.onFlairEditBlur
					})), o.a.createElement(se, {
						labelPosition: W.Top,
						label: B.fbt._("CSS class", null, {
							hk: "2khRbr"
						})
					}, o.a.createElement(xe.c, {
						className: ut.a.cssClassInput,
						maxLength: h.b,
						onChange: this.onCSSClassValueChange,
						placeholder: B.fbt._("none", null, {
							hk: "3fbedu"
						}),
						spellCheck: !1,
						value: s.cssClass || ""
					}), o.a.createElement("div", {
						className: c ? ut.a.cssClassErrorText : ut.a.cssClassInfoText
					}, c || B.fbt._("Optional", null, {
						hk: "4Guf65"
					}))), n && o.a.createElement(se, {
						label: B.fbt._("Add flair background", null, {
							hk: "2VdziY"
						})
					}, o.a.createElement(X.a, {
						on: v,
						onToggle: this.onToggleBackgroundTransparency
					})), v && o.a.createElement(o.a.Fragment, null, o.a.createElement(se, {
						label: B.fbt._("Flair background color", null, {
							hk: "1MY5ea"
						})
					}, o.a.createElement(je, {
						onChange: this.onChangeBackgroundColor,
						tooltipId: "flair-background-color-" + s.id,
						value: E
					})), o.a.createElement(se, {
						label: B.fbt._("Flair text color", null, {
							hk: "11Me49"
						})
					}, o.a.createElement(Me, {
						isDark: s.textColor === f.e.Dark,
						onChange: this.onChangeTextColor
					}))), i && o.a.createElement(se, {
						label: B.fbt._("Edit post appearance", null, {
							hk: "28CdLt"
						})
					}, o.a.createElement(X.a, {
						on: !!s.styleTemplate,
						onToggle: this.onTogglePostAppearanceSettings
					}))), o.a.createElement("fieldset", {
						className: ut.a.rightFieldset
					}, o.a.createElement("legend", null, B.fbt._("Flair settings", null, {
						hk: "JgL1E"
					})), o.a.createElement(se, {
						label: o.a.createElement("span", {
							className: ut.a.labelWithTooltip
						}, B.fbt._("Mod only", null, {
							hk: "1Cg5LH"
						}), o.a.createElement(d.a, {
							text: B.fbt._("Flair is only available for mods to select", null, {
								hk: "HkFmW"
							})
						}))
					}, o.a.createElement(X.a, {
						on: !!s.modOnly,
						onToggle: this.onToggleModOnly
					})), o.a.createElement(se, {
						className: s.modOnly ? ut.a.disabledControl : void 0,
						label: o.a.createElement("span", {
							className: ut.a.labelWithTooltip
						}, B.fbt._("Allow user edits", null, {
							hk: "26m6EE"
						}), o.a.createElement(d.a, {
							text: B.fbt._("Users will be able to edit flair text", null, {
								hk: "4mFIwp"
							})
						}))
					}, o.a.createElement(X.a, {
						disabled: s.modOnly,
						on: ce(s),
						onToggle: this.onToggleAllowUserEdits
					})), ce(s) && e && o.a.createElement(se, {
						label: B.fbt._("This flair allows", null, {
							hk: "3QLVMX"
						}),
						labelPosition: W.Top
					}, o.a.createElement(ye.a, {
						value: s.allowableContent || f.a.All,
						name: "allowable_content",
						onChange: this.onAllowableContentChange
					}, o.a.createElement(Se.a, {
						className: ut.a.radioOption,
						showButton: !0,
						value: f.a.All
					}, B.fbt._("Text & Emojis", null, {
						hk: "QBDtY"
					})), o.a.createElement(Se.a, {
						className: ut.a.radioOption,
						showButton: !0,
						value: f.a.Emoji
					}, B.fbt._("Emoji only", null, {
						hk: "3Ang3z"
					})), o.a.createElement(Se.a, {
						className: ut.a.radioOption,
						showButton: !0,
						value: f.a.Text
					}, B.fbt._("Text only", null, {
						hk: "3HPYeS"
					})))), ce(s) && s.allowableContent !== f.a.Text && e && o.a.createElement(se, {
						label: B.fbt._("Limit number of emojis", null, {
							hk: "LnZU0"
						}),
						labelPosition: W.Top
					}, o.a.createElement(Te.a, {
						buttonClassName: ut.a.dropdownSelectorButton,
						className: ut.a.dropdownSelector,
						displayText: String(x),
						name: "max_emojis",
						options: Ct,
						onSelect: this.onEmojiLimitChange
					})))), i && s.styleTemplate && o.a.createElement(mt, {
						className: ut.a.postAppearanceEditor,
						isSavePending: !!this.props.isSavePending,
						onChange: this.props.onChange,
						subredditId: t,
						templateDraft: s
					}), o.a.createElement("div", {
						className: ut.a.buttonsRow
					}, o.a.createElement(u.l, {
						onClick: this.props.onCancel
					}, B.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(u.i, {
						disabled: this.props.isSavePending || r,
						onClick: this.props.onSave
					}, this.props.isSavePending ? o.a.createElement(Y.a, {
						className: ut.a.loadingIcon,
						sizePx: 10
					}) : B.fbt._("Save", null, {
						hk: "40s1bl"
					}))))
				}
			}
			const Et = (e, t) => e.modOnly ? B.fbt._("Mod only", null, {
					hk: "1G6N0z"
				}) : e.textEditable ? t ? B.fbt._("Editable, {restrictions}", [B.fbt._param("restrictions", Object(b.k)(e))], {
					hk: "2GbweM"
				}) : B.fbt._("Editable", null, {
					hk: "33SB9g"
				}) : "",
				xt = e => ({
					...h.a,
					backgroundColor: e === f.d.UserFlair ? L.c : L.b.defaultFlair
				});
			var Tt = s("./src/reddit/components/ModHub/flairs/FlairManagement/FlairTemplateRow/index.m.less"),
				yt = s.n(Tt);
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
						className: Object(Z.a)(yt.a.row, n ? yt.a.reordering : null)
					}, o.a.createElement("div", {
						className: yt.a.flairPreviewCell
					}, o.a.createElement(be.b, {
						className: yt.a.flairComponent,
						flair: i,
						forceSmallEmojis: !0
					})), o.a.createElement("div", {
						className: yt.a.cssClassCell
					}, s.cssClass), o.a.createElement("div", {
						className: yt.a.settingsCell
					}, Et(s, e)), o.a.createElement("div", {
						className: yt.a.flairIdCell
					}, o.a.createElement(u.o, {
						disabled: !this.props.flairTemplate.id,
						onClick: this.onCopyIdButtonClick
					}, B.fbt._("Copy Id", null, {
						hk: "1F6Ntm"
					})), o.a.createElement(u.o, {
						disabled: t || a,
						onClick: this.onStartEditButtonClick
					}, B.fbt._("Edit", null, {
						hk: "1nftDt"
					})), o.a.createElement(u.o, {
						className: yt.a.removeButton,
						disabled: a,
						onClick: this.onRemoveButtonClick
					}, o.a.createElement(fe.b, null)))), a && o.a.createElement(vt, {
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
			var kt = s("./src/reddit/icons/svgs/Tag/index.tsx"),
				_t = s("./src/reddit/components/ModHub/flairs/FlairManagement/Placeholder/index.m.less"),
				wt = s.n(_t);
			var Ot = e => o.a.createElement("div", {
					className: wt.a.container
				}, o.a.createElement(kt.a, {
					className: wt.a.icon
				}), o.a.createElement("h3", {
					className: wt.a.header
				}, e.flairTemplateType === f.d.UserFlair ? B.fbt._("You do not have any user flair", null, {
					hk: "VFnhz"
				}) : B.fbt._("You do not have any post flair", null, {
					hk: "26g8jc"
				})), o.a.createElement("p", {
					className: wt.a.details
				}, e.flairTemplateType === f.d.UserFlair ? B.fbt._("Create user flair in your community today", null, {
					hk: "1OHj7g"
				}) : B.fbt._("Create post flair in your community today", null, {
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
			const jt = "Flair-discard-changes-confirmation",
				Nt = "Flair-remove-confirmation",
				Ft = "Flair-settings-modal";
			var Mt;
			! function(e) {
				e[e.Default = 0] = "Default", e[e.AddingTemplate = 1] = "AddingTemplate", e[e.EditingTemplate = 2] = "EditingTemplate", e[e.Reordering = 3] = "Reordering"
			}(Mt || (Mt = {}));
			const Rt = {
				isTemplateSavePending: !1,
				mode: Mt.Default,
				numTemplatesReordered: 0,
				templateBeforeEditing: void 0,
				templateDraft: void 0,
				templateIdsNewOrder: [],
				templateIdToRemove: void 0
			};
			class Bt extends o.a.Component {
				constructor() {
					super(...arguments), this.isUnmounted = !1, this.state = {
						...Rt
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
						}), t && this.setState(Rt))
					}, this.resetPendingNavigation = () => {
						this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}, this.performPendingNavigationIfNeeded = () => {
						this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onSettingsButtonClick = () => {
						this.props.toggleModal(Ft)
					}, this.onCloseModal = () => {
						this.props.closeAllModals(), this.resetPendingNavigation()
					}, this.onAddNewTemplateButtonClick = () => {
						const e = xt(this.props.flairTemplateType);
						this.setState({
							mode: Mt.AddingTemplate,
							templateDraft: e,
							templateBeforeEditing: e
						})
					}, this.onRemoveTemplateButtonClick = e => {
						this.setState({
							templateIdToRemove: e
						}), this.props.toggleModal(Nt)
					}, this.onRemoveTemplateConfirmed = () => {
						this.props.onRemoveTemplate(this.state.templateIdToRemove), this.props.sendEvent(y(this.props.flairTemplateType))
					}, this.onStartEditingExistingTemplate = e => {
						if (this.hasUnsavedChanges()) return void this.props.toggleModal(jt);
						const t = ue({
							...this.props.templates[e],
							styleTemplate: this.props.styleTemplates && this.props.styleTemplates[e]
						}, this.props.flairTemplateType, this.props.subredditEmojiData);
						this.setState({
							mode: Mt.EditingTemplate,
							templateDraft: t,
							templateBeforeEditing: t
						})
					}, this.onTemplateDraftChange = e => {
						this.setState({
							templateDraft: e
						})
					}, this.onReorderButtonClick = () => {
						this.setState({
							mode: Mt.Reordering,
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
						this.props.onReorderTemplates(t), this.props.sendEvent(N(this.props.flairTemplateType, e)), this.setState(Rt)
					}, this.onCancelReorderingClick = () => {
						this.setState(Rt)
					}, this.onCancelEditingTemplateClick = () => {
						this.hasUnsavedChanges() ? this.props.toggleModal(jt) : this.setState(Rt)
					}, this.onDiscardUnsavedChangesConfirmed = () => {
						this.setState(Rt), this.performPendingNavigationIfNeeded()
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
					e.modOnly !== t.modOnly && this.props.sendEvent(I(s, !!e.modOnly)), e.textEditable !== t.textEditable && this.props.sendEvent(P(s, !!e.textEditable)), !!e.styleTemplate != !!t.styleTemplate && this.props.sendEvent(j(!!e.styleTemplate));
					const n = e.allowableContent || f.a.All;
					n !== (t.allowableContent || f.a.All) && this.props.sendEvent(M(s, n)), Object(b.l)(e) !== Object(b.l)(t) && this.props.sendEvent(R(s, Object(b.l)(e))), this.props.sendEvent(D(s, a))
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
						disableEditButton: s !== Mt.Default,
						flairTemplateType: this.props.flairTemplateType,
						onCancel: this.onCancelEditingTemplateClick,
						onChange: this.onTemplateDraftChange,
						onCopyTemplateId: this.props.onCopyTemplateId,
						onRemove: this.onRemoveTemplateButtonClick,
						onSave: this.saveCurrentTemplateDraft,
						onStartEditing: this.onStartEditingExistingTemplate,
						subredditEmojiData: this.props.subredditEmojiData,
						subredditId: this.props.subredditId
					}, E = t.length >= h.h;
					return o.a.createElement("div", {
						className: Pt.a.container
					}, o.a.createElement(c.c, {
						className: Pt.a.topBar
					}, s === Mt.Reordering ? o.a.createElement(o.a.Fragment, null, o.a.createElement(u.l, {
						onClick: this.onCancelReorderingClick
					}, B.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(u.i, {
						disabled: !this.state.numTemplatesReordered,
						onClick: this.onSaveCurrentOrderClick
					}, B.fbt._("Save", null, {
						hk: "3gwTS0"
					}))) : o.a.createElement(o.a.Fragment, null, o.a.createElement(u.l, {
						className: Pt.a.settingsButton,
						onClick: this.onSettingsButtonClick
					}, m ? B.fbt._("User flair settings", null, {
						hk: "nqCOM"
					}) : B.fbt._("Post flair settings", null, {
						hk: "m80j6"
					})), o.a.createElement(u.l, {
						disabled: s !== Mt.Default || t.length < 2,
						onClick: this.onReorderButtonClick
					}, B.fbt._("Reorder", null, {
						hk: "1tQe48"
					})), o.a.createElement(u.i, {
						disabled: s !== Mt.Default || E,
						onClick: this.onAddNewTemplateButtonClick,
						title: E ? B.fbt._("Maximum number of templates reached", null, {
							hk: "3pJF49"
						}) : void 0
					}, B.fbt._("Add flair", null, {
						hk: "4oqbLK"
					})))), o.a.createElement(c.a, {
						className: Pt.a.contentContainer
					}, o.a.createElement(c.b, null, m ? B.fbt._("User flair management", null, {
						hk: "2a4oeD"
					}) : B.fbt._("Post flair management", null, {
						hk: "3DSrei"
					}), o.a.createElement(r.a, {
						linkUrl: `${a.a.redditModHelpUrl}/${this.props.helpCenterLink}`
					})), !this.props.flairSettings.displaySettings.isEnabled && o.a.createElement(Q, {
						className: Pt.a.disabledBanner,
						flairTemplateType: this.props.flairTemplateType
					}), o.a.createElement("div", {
						className: Pt.a.table
					}, o.a.createElement("div", {
						className: Pt.a.tableHead
					}, o.a.createElement("div", {
						className: Pt.a.flairPreviewColHeader
					}, m ? B.fbt._("User flair preview", null, {
						hk: "1RayEx"
					}) : B.fbt._("Post flair preview", null, {
						hk: "ykrSg"
					})), o.a.createElement("div", {
						className: Pt.a.cssClassColHeader
					}, B.fbt._("CSS class", null, {
						hk: "1iLHCz"
					}), o.a.createElement(d.a, {
						text: B.fbt._("CSS classes determine the styling for flair in old Reddit", null, {
							hk: "HW6Jx"
						})
					})), o.a.createElement("div", {
						className: Pt.a.settingsColHeader
					}, B.fbt._("Settings", null, {
						hk: "3Ibtnu"
					}), o.a.createElement(d.a, {
						text: e ? B.fbt._("Shows if flair is mod-only, user editable, allows text, or allows emojis", null, {
							hk: "2dhPaz"
						}) : B.fbt._("Set flair to be user editable or mod-only", null, {
							hk: "4ER9Qm"
						})
					})), o.a.createElement("div", {
						className: Pt.a.flairIdColHeader
					}, B.fbt._("Flair ID", null, {
						hk: "21YCV0"
					}), o.a.createElement(d.a, {
						text: B.fbt._("Use this ID when configuring automod to assign flair", null, {
							hk: "3BJT9a"
						})
					}))), o.a.createElement("div", {
						className: Pt.a.tableBody
					}, s === Mt.Default && !t.length && o.a.createElement(Ot, {
						flairTemplateType: this.props.flairTemplateType
					}), s === Mt.Reordering ? o.a.createElement(g.a, {
						values: this.state.templateIdsNewOrder,
						onDrop: this.onTemplatesOrderChange,
						render: (e, t, s, a, n) => o.a.createElement(p.a, {
							canDrop: n,
							className: Pt.a.dragItem,
							iconClassName: Pt.a.dragIcon,
							isDragging: s,
							isOver: a
						}, o.a.createElement(St, Dt({}, v, {
							flairTemplate: this.props.templates[e],
							isReordering: !0
						})))
					}) : t.map(e => o.a.createElement(St, Dt({}, v, {
						key: e,
						flairTemplate: e === C ? n : this.props.templates[e],
						isEditing: e === C,
						isSavePending: this.state.isTemplateSavePending && e === C
					}))), s === Mt.AddingTemplate && o.a.createElement(St, Dt({}, v, {
						flairTemplate: n,
						isSavePending: this.state.isTemplateSavePending,
						isEditing: !0
					}))))), o.a.createElement(i.a, {
						blockOnBeforeUnload: !0,
						dialogId: jt,
						enabled: b
					}), this.props.activeModalId === jt && o.a.createElement(l.a, {
						actionText: B.fbt._("Discard", null, {
							hk: "wpQ8E"
						}),
						headerText: C ? B.fbt._("Discard changes before leaving?", null, {
							hk: "1GQ3tN"
						}) : B.fbt._("Discard new flair?", null, {
							hk: "2aMQ0O"
						}),
						modalText: C ? B.fbt._("You have made some changes to your flair, do you wish to discard the changes to the flair you are editing?", null, {
							hk: "vZlhx"
						}) : B.fbt._("You have a new flair that has not been saved, do you wish to discard this new flair?", null, {
							hk: "4lrde4"
						}),
						onConfirm: this.onDiscardUnsavedChangesConfirmed,
						toggleModal: this.onCloseModal,
						withOverlay: !0
					}), this.props.activeModalId === Nt && o.a.createElement(l.a, {
						actionText: B.fbt._("Delete", null, {
							hk: "3nBb5n"
						}),
						headerText: m ? B.fbt._("Delete user flair?", null, {
							hk: "oY3En"
						}) : B.fbt._("Delete post flair?", null, {
							hk: "3l1CC1"
						}),
						modalText: m ? B.fbt._("Do you wish to delete this user flair?", null, {
							hk: "2JAD1B"
						}) : B.fbt._("Do you wish to delete this post flair?", null, {
							hk: "1a7Q1w"
						}),
						onConfirm: this.onRemoveTemplateConfirmed,
						toggleModal: this.onCloseModal,
						withOverlay: !0
					}), this.props.activeModalId === Ft && o.a.createElement(ie, {
						onClose: this.onCloseModal,
						onSave: this.props.onSaveSettings,
						sendEvent: this.props.sendEvent,
						settings: this.props.flairSettings,
						subredditId: this.props.subredditId,
						withOverlay: !0
					}))
				}
			}
			t.a = Object(m.c)(Bt)
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
				h = s("./src/reddit/components/StructuredStyles/ColorPicker/index.m.less"),
				u = s.n(h),
				g = s("./src/higherOrderComponents/makeAsync.tsx"),
				b = s("./src/lib/loadWithRetries/index.ts");
			const f = () => null;
			var C = Object(g.a)({
				ErrorComponent: f,
				getComponent: () => Object(b.a)(() => s.e("ColorPickerDropdown").then(s.bind(null, "./src/reddit/components/StructuredStyles/ColorPicker/_ColorPickerDropdown.tsx"))).then(e => e.default),
				LoadingComponent: f
			});
			const v = e => "#" === e[0] ? e : `#${e}`,
				E = Object(l.a)(e => o.a.createElement("div", {
					className: Object(i.a)(u.a.DropdownColorSwatch, e.isTransparent && u.a.isTransparent),
					style: {
						backgroundColor: e.isTransparent ? Object(m.a)(e).body : e.color,
						fill: Object(a.f)(e.color)
					}
				}, e.isDropdownOpen ? o.a.createElement(c.a, {
					className: u.a.ChevronUp
				}) : o.a.createElement(d.a, {
					className: u.a.ChevronDown
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
				h = o.a.wrapped(r.a, "LockIcon", p.a),
				u = o.a.wrapped(d.a, "ExpandLeft", p.a);
			t.a = e => n.a.createElement(i.a, {
				className: e.className,
				isDragging: e.isDragging,
				isOver: e.isOver,
				canDrop: e.canDrop,
				disabled: e.disabled
			}, n.a.createElement(u, null, e.children, e.disabled ? n.a.createElement(h, {
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
				h = s("./src/reddit/components/StructuredStyles/UploadedImage/index.m.less"),
				u = s.n(h),
				g = s("./src/lib/lessComponent.tsx");
			const b = l.a,
				f = g.a.wrapped(p.a, "TrashIcon", u.a),
				C = e => o.a.createElement("div", {
					className: Object(i.a)(u.a.BottomRow, {
						[u.a.isHiding]: e.isHiding
					})
				}, e.children),
				v = g.a.wrapped(r.c, "ErrorText", u.a);
			t.e = e => {
				const t = e.imageData && e.imageData.kind === m.b.FailedToUpload ? e.imageData.error : "",
					s = !t && e.imageData.kind === m.b.NotUploaded,
					n = e.isRequestInProgress && e.imageData.kind === m.b.TempUploaded,
					l = s || n;
				return o.a.createElement(d.a, {
					backgroundImage: e.imageData.url,
					className: Object(i.a)(e.className, u.a.imageDisplay)
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
				h = s("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				u = s("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
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
			const T = e => Object(r.a)(E.a.iconStyles, e.className, {
					[E.a.mDisabled]: e.disabled,
					[E.a.mRedditStyle]: e.redditStyle
				}),
				y = ({
					className: e,
					disabled: t,
					redditStyle: s,
					...a
				}) => o.a.createElement(u.a, x({
					className: T({
						className: e,
						disabled: t,
						redditStyle: s
					})
				}, a)),
				S = ({
					className: e,
					disabled: t,
					redditStyle: s,
					...a
				}) => o.a.createElement(h.a, x({
					className: T({
						className: e,
						disabled: t,
						redditStyle: s
					})
				}, a)),
				k = ({
					className: e,
					disabled: t,
					redditStyle: s,
					...a
				}) => o.a.createElement(g.a, x({
					className: T({
						className: e,
						disabled: t,
						redditStyle: s
					})
				}, a)),
				_ = ({
					isActive: e,
					...t
				}) => o.a.createElement("button", x({
					className: Object(r.a)(E.a.layoutButton, {
						[E.a.mIsActive]: e
					})
				}, t)),
				w = Object(f.t)(),
				O = Object(l.c)({
					postLayout: f.N,
					redditStyle: f.A
				}),
				I = Object(i.b)(O, e => ({
					onListingLayoutChange: (t, s) => e(Object(c.x)(t, s)),
					toggleTooltip: t => e(Object(p.h)({
						tooltipId: t
					}))
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					toggleTooltip: e => t.toggleTooltip(e)
				}));
			t.a = w(I(Object(b.c)(e => {
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
					Icon: k,
					text: a.fbt._("Card", null, {
						hk: "22FueJ"
					})
				}, {
					layout: m.d.Classic,
					Icon: S,
					text: a.fbt._("Classic", null, {
						hk: "1Djx18"
					})
				}, {
					layout: m.d.Compact,
					Icon: y,
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
					return o.a.createElement(_, {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ModHub-flairs-PostFlairManagement~reddit-components-ModHub-flairs-UserFlairManagement.31e0fa4ae201d3baad0a.js.map