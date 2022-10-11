// https://www.redditstatic.com/desktop2x/reddit-components-ModQueueActivitySummaryCards.89c4591b1e73f80a8921.js
// Retrieved at 10/11/2022, 3:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ModQueueActivitySummaryCards", "reddit-components-ModQueueActivitySummaryCards-ModActivityPreview"], {
		"./src/reddit/components/ModQueueActivitySummaryCards/ModActivityPreview.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./src/higherOrderComponents/asTooltip.tsx"),
				n = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/constants/index.ts"),
				a = s("./node_modules/react/index.js"),
				d = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/components/UserIcon/index.tsx"),
				u = s("./src/reddit/controls/Dropdown/index.tsx"),
				m = s("./src/reddit/endpoints/modQueue/modActivity.ts"),
				b = s("./src/reddit/helpers/graphql/helpers.ts"),
				v = s("./src/reddit/hooks/useGqlContext.ts"),
				p = s("./src/reddit/selectors/modQueue.ts"),
				h = s("./src/reddit/selectors/platform.ts"),
				g = s("./src/reddit/selectors/subreddit.ts"),
				_ = s("./src/reddit/selectors/tooltip.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/components/ModQueueActivitySummaryCards/index.m.less"),
				C = s.n(k),
				y = s("./src/config.ts"),
				S = s("./node_modules/fbt/lib/FbtPublic.js"),
				E = s("./src/lib/timeAgo/index.ts"),
				O = s("./src/redditGQL/types.ts");
			const x = `${y.a.assetPath}/img/snoo-sunglasses.png`,
				A = e => {
					let {
						data: t
					} = e;
					var s, o, n, r, a, i, l;
					const u = (null === (s = t.info) || void 0 === s ? void 0 : s.displayName) || (null === (o = t.info) || void 0 === o ? void 0 : o.name),
						{
							lastModAction: m
						} = t;
					return d.a.createElement("div", {
						className: C.a.modRow,
						onClick: e => {
							e.stopPropagation(), e.preventDefault()
						}
					}, d.a.createElement(c.a, {
						className: C.a.modIcon,
						userName: u || "",
						iconUrl: null === (r = null === (n = null == t ? void 0 : t.info) || void 0 === n ? void 0 : n.icon) || void 0 === r ? void 0 : r.url,
						isNSFW: !!(null === (i = null === (a = t.info) || void 0 === a ? void 0 : a.profile) || void 0 === i ? void 0 : i.isNsfw)
					}), d.a.createElement("div", {
						className: C.a.subredditRowText
					}, d.a.createElement("div", {
						className: C.a.username
					}, u), d.a.createElement("div", {
						className: C.a.detailText
					}, m && d.a.createElement(d.a.Fragment, null, ((e, t) => {
						switch (e) {
							case O.s.AddNote:
								return S.fbt._("Added mod note", null, {
									hk: "4EQdI3"
								});
							case O.s.AddRemovalReason:
								return S.fbt._("Added removal reason", null, {
									hk: "3sDuRA"
								});
							case O.s.AdjustPostCrowdControlLevel:
								return S.fbt._("Adjusted post crowd control level", null, {
									hk: "3Ru27s"
								});
							case O.s.EnablePostCrowdControlFilter:
								return S.fbt._("Enabled post crowd control level", null, {
									hk: "bnrbt"
								});
							case O.s.DisablePostCrowdControlFilter:
								return S.fbt._("Disabled post crowd control level", null, {
									hk: "3Pn8Cm"
								});
							case O.s.ApproveComment:
								return S.fbt._("Approved comment", null, {
									hk: "15N4AH"
								});
							case O.s.ApproveLink:
								return S.fbt._("Approved post", null, {
									hk: "2pHeO6"
								});
							case O.s.BanUser:
								return S.fbt._("Banned user", null, {
									hk: "30ZUto"
								});
							case O.s.Collections:
								return S.fbt._("Collections", null, {
									hk: "4DLN5q"
								});
							case O.s.DeleteNote:
								return S.fbt._("Deleted mod note", null, {
									hk: "24mUGI"
								});
							case O.s.Distinguish:
								return "SubredditPost" === t ? S.fbt._("Post distinguished", null, {
									hk: "1EzjPd"
								}) : S.fbt._("Comment distinguished", null, {
									hk: "3TNqQa"
								});
							case O.s.EditFlair:
								return "SubredditPost" === t ? S.fbt._("Post flair edited", null, {
									hk: "2oj67i"
								}) : S.fbt._("User flair edited", null, {
									hk: "2WAVS8"
								});
							case O.s.IgnoreReports:
								return "SubredditPost" === t ? S.fbt._("Post reports ignored", null, {
									hk: "1HbgCS"
								}) : S.fbt._("Comment reports ignored", null, {
									hk: "3eLRwL"
								});
							case O.s.Lock:
								return "SubredditPost" === t ? S.fbt._("Post locked", null, {
									hk: "45Huvj"
								}) : S.fbt._("Comment locked", null, {
									hk: "2HzroI"
								});
							case O.s.MarkNsfw:
								return S.fbt._("Marked post NSFW", null, {
									hk: "4qw3UI"
								});
							case O.s.MarkOriginalContent:
								return S.fbt._("Marked post Original Content", null, {
									hk: "4d9kgS"
								});
							case O.s.MuteUser:
								return S.fbt._("Muted user", null, {
									hk: "31YWRG"
								});
							case O.s.RemoveComment:
								return S.fbt._("Removed comment", null, {
									hk: "2qfmzC"
								});
							case O.s.RemoveLink:
								return S.fbt._("Removed post", null, {
									hk: "2leMij"
								});
							case O.s.SetContestMode:
								return S.fbt._("Set post contest mode", null, {
									hk: "2iE074"
								});
							case O.s.SetSuggestedsort:
								return S.fbt._("Set post suggested sort", null, {
									hk: "3zw33Q"
								});
							case O.s.ShowComment:
								return S.fbt._("Showed comment", null, {
									hk: "1xvaXS"
								});
							case O.s.SpamComment:
								return S.fbt._("Marked comment as spam", null, {
									hk: "E6CLe"
								});
							case O.s.SpamLink:
								return S.fbt._("Removed post as spam", null, {
									hk: "1Al2xz"
								});
							case O.s.Spoiler:
								return S.fbt._("Added spoiler tag", null, {
									hk: "254Axx"
								});
							case O.s.Sticky:
								return "SubredditPost" === t ? S.fbt._("Post stickied", null, {
									hk: "4m9DRx"
								}) : S.fbt._("Comment stickied", null, {
									hk: "1JIPzu"
								});
							case O.s.UnbanUser:
								return S.fbt._("Unbanned user", null, {
									hk: "3U4olT"
								});
							case O.s.Unlock:
								return "SubredditPost" === t ? S.fbt._("Post unlocked", null, {
									hk: "3IXrG"
								}) : S.fbt._("Comment unlocked", null, {
									hk: "4v2jmJ"
								});
							case O.s.UnmuteUser:
								return S.fbt._("Unmuted user", null, {
									hk: "2aB30x"
								});
							case O.s.UnsetContestMode:
								return S.fbt._("Unset post contest mode", null, {
									hk: "W4Yjf"
								});
							case O.s.UnsnoozeReports:
								return "SubredditPost" === t ? S.fbt._("Post unsnoozed", null, {
									hk: "3jp8zr"
								}) : S.fbt._("Comment unsnoozed", null, {
									hk: "2x01Eq"
								});
							case O.s.Unspoiler:
								return S.fbt._("Removed spoiler tag", null, {
									hk: "2GvhDn"
								});
							case O.s.Unsticky:
								return "SubredditPost" === t ? S.fbt._("Post unstickied", null, {
									hk: "KXoHl"
								}) : S.fbt._("Comment unstickied", null, {
									hk: "dpEKC"
								});
							case O.s.UpdateRemovalReason:
							case O.s.WikiBanned:
							case O.s.WikiContributor:
							case O.s.WikiPageListed:
							case O.s.WikiPermLevel:
							case O.s.WikiRevise:
							case O.s.WikiUnbanned:
							case O.s.AcceptModeratorInvite:
							case O.s.AddCommunityTopics:
							case O.s.AddContributor:
							case O.s.AddModerator:
							case O.s.CreateAward:
							case O.s.CreateScheduledPost:
							case O.s.CreateRemovalReason:
							case O.s.CommunityStyling:
							case O.s.CommunityWidgets:
							case O.s.CreateRule:
							case O.s.DeleteAward:
							case O.s.DeleteRule:
							case O.s.DeleteScheduledPost:
							case O.s.DeleteOverriddenClassification:
							case O.s.DeleteRemovalReason:
							case O.s.DisableAward:
							case O.s.EditPostRequirements:
							case O.s.EditRule:
							case O.s.EditScheduledPost:
							case O.s.EditSettings:
							case O.s.EnableAward:
							case O.s.Events:
							case O.s.HiddenAward:
							case O.s.InviteModerator:
							case O.s.InviteSubscriber:
							case O.s.ModAwardGiven:
							case O.s.ModmailEnrollment:
							case O.s.OverrideClassification:
							case O.s.RemoveCommunityTopics:
							case O.s.RemoveContributor:
							case O.s.RemoveModerator:
							case O.s.RemoveWikiContributor:
							case O.s.ReorderModerators:
							case O.s.ReorderRules:
							case O.s.SetPermissions:
							case O.s.SnoozeReports:
							case O.s.SubmitContentRatingSurvey:
							case O.s.SubmitScheduledPost:
							case O.s.UnignoreReports:
							case O.s.UninviteModerator:
							default:
								return S.fbt._("Last mod action", null, {
									hk: "S9AMb"
								})
						}
					})(null == m ? void 0 : m.action, null === (l = null == m ? void 0 : m.target) || void 0 === l ? void 0 : l.__typename), " ", Object(E.d)(Object(b.g)(m.createdAt) / 1e3)))))
				},
				j = e => {
					let {
						mostRecentAction: t
					} = e;
					return d.a.createElement("div", {
						className: C.a.emptyTooltip
					}, d.a.createElement("img", {
						alt: S.fbt._("Snoo face image", null, {
							hk: "35RYyE"
						}),
						src: x,
						className: C.a.snooImage
					}), d.a.createElement("div", {
						className: C.a.emptyText
					}, S.fbt._("The queue is all yours", null, {
						hk: "16NnPV"
					})), d.a.createElement("div", {
						className: C.a.emptyDetailText
					}, S.fbt._("We’ll let you know if another mod joins you in moderating the community.", null, {
						hk: "4EOUML"
					})), t && d.a.createElement("div", {
						className: C.a.lastActionContainer
					}, d.a.createElement("div", {
						className: C.a.lastActionTitle
					}, S.fbt._("Last Action taken", null, {
						hk: "4F3ynJ"
					})), d.a.createElement(A, {
						data: t
					})))
				},
				N = e => {
					let {
						orderedModsList: t,
						subredditName: s,
						mods: o,
						mostRecentAction: r
					} = e;
					return 0 === t.length ? d.a.createElement(j, {
						mostRecentAction: r
					}) : d.a.createElement(d.a.Fragment, null, d.a.createElement("div", {
						className: C.a.tooltipTitle
					}, t.length, " ", S.fbt._({
						"*": "mods active in r/",
						_1: "mod active in r/"
					}, [S.fbt._plural(t.length)], {
						hk: "3o3C52"
					}), s), o && t.slice(0, 10).map(e => d.a.createElement(A, {
						data: o[e],
						key: e
					})), t.length > 10 && d.a.createElement("div", {
						className: Object(n.a)(C.a.detailText, C.a.more)
					}, "+", t.length - 10, " ", S.fbt._("more active moderators", null, {
						hk: "13CPFV"
					})))
				},
				w = Object(o.a)(u.a),
				R = e => e ? Object.keys(e).sort((t, s) => ((e, t, s) => {
					var o, n, r, a;
					const d = null === (n = null === (o = s[e]) || void 0 === o ? void 0 : o.lastModAction) || void 0 === n ? void 0 : n.createdAt,
						i = null === (a = null === (r = s[t]) || void 0 === r ? void 0 : r.lastModAction) || void 0 === a ? void 0 : a.createdAt,
						l = Object(b.g)(d || "");
					return Object(b.g)(i || "") - l
				})(t, s, e)).filter(t => {
					var s, o;
					return (new Date).getTime() - Object(b.g)((null === (o = null === (s = e[t]) || void 0 === s ? void 0 : s.lastModAction) || void 0 === o ? void 0 : o.createdAt) || "") < 15 * r.pb
				}) : [];
			t.default = e => {
				let {
					className: t,
					subredditId: s,
					maxMods: o
				} = e;
				const r = Object(i.e)(h.c),
					u = s || r,
					b = Object(i.e)(e => Object(g.h)(e, {
						subredditId: u || ""
					})),
					k = Object(i.e)(e => {
						var t;
						return (null === (t = null == e ? void 0 : e.features) || void 0 === t ? void 0 : t.modActivitySummaries[u || ""]) || {}
					}),
					{
						mods: y
					} = k,
					S = Object(a.useCallback)(e => R(e), [])(y),
					[E, O] = Object(a.useState)(void 0),
					x = Object(v.a)();
				Object(a.useEffect)(() => {
					(async () => {
						var e, t, s, o;
						if (0 === S.length && b) {
							const n = null === (t = null === (e = (await Object(m.a)(x(), {
								subredditName: b
							})).body.data) || void 0 === e ? void 0 : e.subreddit) || void 0 === t ? void 0 : t.moderation;
							(null == n ? void 0 : n.actions) && (null === (o = null === (s = n.actions) || void 0 === s ? void 0 : s.edges) || void 0 === o || o.map(e => {
								const {
									moderatorInfo: t,
									...s
								} = null == e ? void 0 : e.node;
								"reddit" !== (null == t ? void 0 : t.name) && "automoderator" !== (null == t ? void 0 : t.name) && O({
									info: t,
									lastModAction: s
								})
							}))
						}
					})()
				}, [x, S.length, b]);
				const A = (e => `mod_activity_tooltip_id-${e}`)(b || ""),
					j = Object(i.d)(),
					P = Object(a.useCallback)(e => {
						e.stopPropagation(), e.preventDefault(), j(Object(l.h)({
							tooltipId: A
						}))
					}, [j, A]),
					T = Object(i.e)(e => Object(_.b)(A)(e)),
					M = Object(i.e)(p.d),
					I = Object(i.e)(f.k),
					D = o || 5;
				return d.a.createElement("div", {
					className: Object(n.a)(C.a.preview, t),
					id: A,
					onClick: P,
					"data-testid": "mod-activity-preview"
				}, y && S.length > 0 ? S.slice(0, D).map((e, t) => {
					var s, o, r, a, i, l, u, m, b, v;
					return d.a.createElement(c.a, {
						className: Object(n.a)(C.a.userIcon, {
							[C.a.noMargin]: t === S.length - 1 && !(t === D - 1 && S.length > D)
						}),
						key: null === (o = null === (s = y[e]) || void 0 === s ? void 0 : s.info) || void 0 === o ? void 0 : o.displayName,
						userName: (null === (a = null === (r = y[e]) || void 0 === r ? void 0 : r.info) || void 0 === a ? void 0 : a.displayName) || "",
						iconUrl: null === (u = null === (l = null === (i = y[e]) || void 0 === i ? void 0 : i.info) || void 0 === l ? void 0 : l.icon) || void 0 === u ? void 0 : u.url,
						isNSFW: !!(null === (v = null === (b = null === (m = y[e]) || void 0 === m ? void 0 : m.info) || void 0 === b ? void 0 : b.profile) || void 0 === v ? void 0 : v.isNsfw)
					})
				}) : M ? null : d.a.createElement(c.a, {
					className: Object(n.a)(C.a.userIcon, C.a.noMargin),
					userName: (null == I ? void 0 : I.displayName) || "",
					iconUrl: null == I ? void 0 : I.accountIcon,
					isNSFW: !1
				}), S.length > D && d.a.createElement("div", {
					className: C.a.moreMods
				}, "+", S.length - D), d.a.createElement(w, {
					tooltipId: A,
					isOpen: T,
					className: C.a.tooltip,
					targetPosition: ["right", "bottom"],
					tooltipPosition: ["right", "top"]
				}, d.a.createElement(N, {
					orderedModsList: S,
					subredditName: b || "",
					mods: y,
					mostRecentAction: E
				})))
			}
		},
		"./src/reddit/components/ModQueueActivitySummaryCards/index.m.less": function(e, t, s) {
			e.exports = {
				widget: "_2S3Rmz2Q8AgpyxfJD6L9Ni",
				titleContainer: "pg3jNvZKVsr3JdwcUwg2Q",
				widgetContent: "k9g6oop3qzXe5kYHchR2G",
				modIcon: "_3_ODW9yvfhSXaAyu-nkEVf",
				subredditIcon: "_3xHqnRKD2oZKVSbBsrhnhK",
				modRow: "_5sL4TmBPDSK5a3KCST8_D",
				subredditRow: "_13BVggQ6qexDLjYZd0OF_G",
				subredditRowText: "_251DNBern7Si-he5HNkDm7",
				emptyCard: "_1Df-DRjGp1nY8gKsqVuIWB",
				emptyText: "_25rN30WWKtFVSZo9ZhYJLx",
				subredditName: "_1-JqcOMFgfEZRr9C1rwtvN",
				tooltipTitle: "Edh6iORXd4A_ZV0h1CB8j",
				username: "_3iBG4sU_nNewURNnz2rmHn",
				emptyDetailText: "_138KBSl-Hzt-QdKbcCX4tv",
				detailText: "_1rZ6aZqtR9nzTvKOqVb7dP",
				snooImage: "Vg69__zCqDdWEkb_CTQcn",
				headerButtonContainer: "EzEg04ghsOqxnE1GnfnIr",
				headerButtonIcon: "yga1BOrh_Ki70reuqnYLi",
				up: "B30eRoRGRtXKAX8-rAmXV",
				more: "_22P9QU0SjkaqhoKGnofYXo",
				preview: "_2akotn_qPD4--TkwhPFyTR",
				moreMods: "NbzlGrDvVUNrngQOyDY28",
				userIcon: "_1hC77l9y_LwLvok2bogZDP",
				noMargin: "_3K_wetbUvC8wNm6ueBwvh-",
				tooltip: "kRLDbyQSWoBrnkmHt5nmj",
				emptyTooltip: "_1yrR_PVgnpPVl0FS5aNxmY",
				lastActionContainer: "rU1nWYL0Qtmi0poIUJXmm",
				lastActionTitle: "_2bxj74obMqZ-SI9UrnCg7x"
			}
		},
		"./src/reddit/components/ModQueueActivitySummaryCards/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "SNOO_NO_MOUTH_IMAGE_PATH", (function() {
				return j
			})), s.d(t, "SNOO_THUMBS_UP_IMAGE_PATH", (function() {
				return N
			})), s.d(t, "INACTIVE_MOD_SUMMARIES_COLLAPSED", (function() {
				return P
			})), s.d(t, "ACTIVE_MOD_SUMMARIES_COLLAPSED", (function() {
				return T
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./src/config.ts"),
				n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				d = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/addQueryParams/index.ts"),
				l = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/filterQueryParams/index.ts"),
				m = s("./src/lib/timeAgo/index.ts"),
				b = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				v = s("./src/reddit/components/SubredditIcon/index.tsx"),
				p = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/InternalLink/index.tsx"),
				_ = s("./src/reddit/helpers/graphql/helpers.ts"),
				f = s("./src/reddit/hooks/useLocalStorage.ts"),
				k = s("./src/reddit/hooks/usePageLayer.ts"),
				C = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				y = s("./src/reddit/selectors/meta.ts"),
				S = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/components/ModQueueActivitySummaryCards/index.m.less"),
				O = s.n(E),
				x = s("./src/reddit/components/ModQueueActivitySummaryCards/ModActivityPreview.tsx");

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const j = `${o.a.assetPath}/img/snoo-no-mouth.png`,
				N = `${o.a.assetPath}/img/snoo-thumbs-up.png`,
				w = e => {
					let {
						subredditId: t,
						activityData: s,
						origin: o,
						currentPageUrl: r
					} = e;
					var l;
					const c = Object(d.e)(e => Object(S.X)(e, {
						subredditId: t
					}));
					return a.a.createElement(g.default, {
						className: O.a.subredditRow,
						key: null == c ? void 0 : c.displayText,
						to: Object(i.a)(Object(u.a)(`${o}${r}`, ["after", "before", "page", "profile", "subreddit"]), {
							subreddit: null == c ? void 0 : c.name
						})
					}, a.a.createElement(v.b, {
						className: O.a.subredditIcon,
						iconUrl: "",
						subredditOrProfile: c
					}), a.a.createElement("div", {
						className: O.a.subredditRowText
					}, a.a.createElement("div", {
						className: O.a.subredditName
					}, null == c ? void 0 : c.displayText), a.a.createElement("div", {
						className: O.a.detailText
					}, (null === (l = null == s ? void 0 : s.sub) || void 0 === l ? void 0 : l.lastModActionAt) ? a.a.createElement(a.a.Fragment, null, n.fbt._("Last action", null, {
						hk: "2lt40w"
					}), " ", Object(m.d)(Object(_.g)(s.sub.lastModActionAt) / 1e3)) : n.fbt._("No recent actions", null, {
						hk: "1qiZq9"
					}))), a.a.createElement(x.default, {
						subredditId: t,
						maxMods: 3
					}))
				},
				R = e => {
					let {
						subredditIdsList: t,
						totalSubs: s,
						modActivitySummaryData: o,
						isActive: r,
						origin: d,
						currentPageUrl: i,
						isCollapsed: u,
						setIsCollapsed: m
					} = e;
					const b = t.sort((e, t) => ((e, t, s) => {
						var o, n, r, a;
						const d = Object(_.g)(null === (n = null === (o = s[e]) || void 0 === o ? void 0 : o.sub) || void 0 === n ? void 0 : n.lastModActionAt),
							i = Object(_.g)(null === (a = null === (r = s[t]) || void 0 === r ? void 0 : r.sub) || void 0 === a ? void 0 : a.lastModActionAt);
						return d > i ? -1 : d < i ? 1 : 0
					})(e, t, o)).filter(e => {
						var t, s;
						return !r || (new Date).getTime() - Object(_.g)((null === (s = null === (t = o[e]) || void 0 === t ? void 0 : t.sub) || void 0 === s ? void 0 : s.lastModActionAt) || "") < 15 * c.pb
					}).slice(0, 10);
					return a.a.createElement(p.a, {
						title: a.a.createElement("div", {
							className: O.a.titleContainer
						}, r ? n.fbt._("Actively being moderated", null, {
							hk: "43BqG4"
						}) : n.fbt._("Inactive", null, {
							hk: "1MbMLw"
						})),
						className: O.a.widget,
						contentOnly: !0,
						headerButton: a.a.createElement("div", {
							className: O.a.headerButtonContainer
						}, a.a.createElement(C.a, {
							className: Object(l.a)(O.a.headerButtonIcon, {
								[O.a.up]: u
							})
						})),
						headerStyles: {
							borderRadius: 4
						},
						onHeaderClick: () => m(u ? "false" : "true"),
						redditStyle: !0
					}, !u && a.a.createElement("div", {
						className: O.a.widgetContent
					}, 0 === b.length && a.a.createElement("div", {
						className: O.a.emptyCard
					}, a.a.createElement("img", {
						alt: n.fbt._("Snoo face image", null, {
							hk: "35RYyE"
						}),
						src: r ? j : N,
						className: O.a.snooImage
					}), a.a.createElement("div", {
						className: O.a.emptyText
					}, r ? n.fbt._("No communities are being moderated", null, {
						hk: "1cAhYD"
					}) : n.fbt._("It’s all covered", null, {
						hk: "32tVnu"
					})), a.a.createElement("div", {
						className: O.a.emptyDetailText
					}, r ? n.fbt._("Look up above at the “inactive” section to see what communities might moderation.", null, {
						hk: "22ka9V"
					}) : n.fbt._("Jump into the “actively being moderated” section below to see where else you could jump in.", null, {
						hk: "2t7nuw"
					}))), b.map(e => {
						const t = o[e];
						return a.a.createElement(w, {
							key: e,
							subredditId: e,
							activityData: t,
							origin: d,
							currentPageUrl: i
						})
					}), s > 10 && a.a.createElement("div", {
						className: Object(l.a)(O.a.detailText, O.a.more)
					}, "+", s - 10, " ", r ? n.fbt._("more being moderated", null, {
						hk: "2tAu2k"
					}) : n.fbt._("more not being moderated", null, {
						hk: "1Djx0e"
					}))))
				},
				P = "inactive_mod_summaries_collapsed",
				T = "active_mod_summaries_collapsed";
			t.default = () => {
				const e = Object(d.e)(e => {
						var t;
						return null === (t = null == e ? void 0 : e.features) || void 0 === t ? void 0 : t.modActivitySummaries
					}) || {},
					t = [],
					s = [];
				let o = 0,
					n = 0;
				Object.keys(e).map(r => {
					e[r].sub.activeMods.length > 0 ? (o < 10 && t.push(r), o++) : (n < 10 && s.push(r), n++)
				});
				const r = Object(d.e)(y.k),
					i = Object(k.a)(),
					l = {
						origin: r,
						currentPageUrl: Object(h.f)(i),
						modActivitySummaryData: e
					},
					[c, u] = Object(f.a)(P, "true"),
					[m, v] = Object(f.a)(T, "true");
				return a.a.createElement("span", {
					"data-testid": "mod-activity-cards"
				}, a.a.createElement(b.a, null, a.a.createElement(R, A({
					subredditIdsList: s,
					totalSubs: n,
					isCollapsed: "true" === c,
					setIsCollapsed: u
				}, l))), a.a.createElement(b.a, null, a.a.createElement(R, A({
					isActive: !0,
					subredditIdsList: t,
					totalSubs: o,
					isCollapsed: "true" === m,
					setIsCollapsed: v
				}, l))))
			}
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/reddit/components/SidebarSpacer/index.m.less"),
				n = s.n(o),
				r = s("./src/lib/lessComponent.tsx");
			t.a = r.a.div("Component", n.a)
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, s) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/components/SEOTitle/index.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/trackers/widgets.ts"),
				v = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				p = s("./src/reddit/selectors/experiments/topPosts.ts"),
				h = s("./src/reddit/selectors/structuredStyles.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/models/Theme/index.ts"),
				f = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const k = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(f.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				C = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(f.a)(e).widgetColors.sidebarWidgetHeaderColor,
				y = e => {
					const t = k(e);
					return Object(_.f)(t)
				},
				S = e => {
					const t = C(e);
					return Object(_.f)(t)
				};
			var E = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				O = s.n(E);
			const {
				fbt: x
			} = s("./node_modules/fbt/lib/FbtPublic.js"), A = Object(u.u)(), j = Object(r.b)(() => Object(a.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(u.n)(e, t) || void 0,
						o = t.redditStyle || Object(h.l)(e, {
							subredditId: s
						}),
						n = Object(g.db)(e);
					return o || n
				},
				nigtmode: g.db,
				subredditId: u.n,
				topPostVariant: p.d
			}));
			class N extends n.a.Component {
				constructor() {
					super(...arguments), this.contentRef = n.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(b.b)(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = k(this.props), e.borderColor = Object(v.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = y(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = C(this.props), e.color = e.fill = S(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: o,
						headerButton: r,
						id: a,
						onClick: i,
						onHeaderClick: c,
						title: u,
						titleClassName: b,
						truncateThreshold: v
					} = this.props, p = s ? O.a.widgetContentOnly : O.a.widgetContent, h = !o && this.props.styles, g = h ? this.getWidgetBackgroundStyles() : {}, _ = h ? this.getWidgetHeaderStyles() : {};
					return n.a.createElement("div", {
						className: Object(d.a)(t, O.a.widgetBackground, {
							[O.a.redditStyle]: o,
							[O.a.clickable]: !!i,
							[O.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": o,
						onClick: i,
						style: g
					}, u && n.a.createElement("div", {
						className: Object(d.a)(O.a.widgetHeader, {
							[O.a.clickable]: !!c
						}),
						id: a,
						style: {
							..._,
							...this.props.headerStyles
						},
						onClick: c
					}, n.a.createElement("div", {
						className: Object(d.a)(O.a.widgetTitle, b)
					}, n.a.createElement(l.b, {
						type: l.a.Widget
					}, u)), r), n.a.createElement("div", {
						className: Object(d.a)(p, {
							[O.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? v : "none"
						}
					}, e), this.state.isTruncated && n.a.createElement(m.r, {
						className: O.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, x._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = A(j(Object(i.a)(Object(c.c)(N))))
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "c", (function() {
				return c
			}));
			var o, n, r = s("./src/reddit/constants/tracking.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(o || (o = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {}));
			const d = (e, t) => s => ({
					source: n.COMMUNITY_WIDGETS,
					action: r.c.CLICK,
					noun: o.SEE_MORE,
					widget: Object(a.xb)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...a.o
				}),
				i = (e, t) => s => ({
					source: n.POST,
					action: r.c.CLICK,
					noun: o.REREDDIT_PROMO,
					post: a.K(s, e),
					subreddit: a.jb(s),
					...t && {
						banner: {
							buttonText: t,
							id: o.REREDDIT_PROMO
						}
					},
					...a.o(s)
				}),
				l = () => e => ({
					source: n.SIDEBAR,
					action: r.c.VIEW,
					noun: o.TOPICS_WIDGET,
					...a.o(e)
				}),
				c = e => t => ({
					source: n.TOPICS_WIDGET,
					action: r.c.CLICK,
					noun: o.TOPIC,
					...a.o(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, s) {
			"use strict";
			var o = s("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = o.eb
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ModQueueActivitySummaryCards.89c4591b1e73f80a8921.js.map