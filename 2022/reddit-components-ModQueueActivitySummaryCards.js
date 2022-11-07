// https://www.redditstatic.com/desktop2x/reddit-components-ModQueueActivitySummaryCards.21c12b5c1ced180a0f02.js
// Retrieved at 11/7/2022, 5:50:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ModQueueActivitySummaryCards", "reddit-components-ModQueueActivitySummaryCards-ModActivityPreview"], {
		"./src/reddit/components/ModQueueActivitySummaryCards/ModActivityPreview.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/higherOrderComponents/asTooltip.tsx"),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/constants/index.ts"),
				a = s("./node_modules/react/index.js"),
				d = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/components/UserIcon/index.tsx"),
				u = s("./src/reddit/controls/Dropdown/index.tsx"),
				m = s("./src/reddit/endpoints/modQueue/modActivity.ts"),
				v = s("./src/reddit/helpers/graphql/helpers.ts"),
				b = s("./src/reddit/helpers/trackers/modListing.ts"),
				p = s("./src/reddit/hooks/useGqlContext.ts"),
				h = s("./src/reddit/hooks/useTracking.ts"),
				g = s("./src/reddit/selectors/modQueue.ts"),
				_ = s("./src/reddit/selectors/platform.ts"),
				k = s("./src/reddit/selectors/subreddit.ts"),
				f = s("./src/reddit/selectors/tooltip.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/ModQueueActivitySummaryCards/index.m.less"),
				y = s.n(O),
				x = s("./src/config.ts"),
				S = s("./node_modules/fbt/lib/FbtPublic.js"),
				E = s("./src/lib/timeAgo/index.ts"),
				j = s("./src/redditGQL/types.ts");
			const w = `${x.a.assetPath}/img/snoo-sunglasses.png`,
				A = e => {
					let {
						data: t
					} = e;
					var s, n, r, a, i, l, u;
					const m = (null === (s = t.info) || void 0 === s ? void 0 : s.displayName) || (null === (n = t.info) || void 0 === n ? void 0 : n.name),
						{
							lastModAction: b
						} = t;
					return d.a.createElement("div", {
						className: Object(o.a)(y.a.modRow, "hover:bg-neutral-background-hover"),
						onClick: e => {
							e.stopPropagation(), e.preventDefault()
						}
					}, d.a.createElement(c.a, {
						className: y.a.modIcon,
						userName: m || "",
						iconUrl: null === (a = null === (r = null == t ? void 0 : t.info) || void 0 === r ? void 0 : r.icon) || void 0 === a ? void 0 : a.url,
						isNSFW: !!(null === (l = null === (i = t.info) || void 0 === i ? void 0 : i.profile) || void 0 === l ? void 0 : l.isNsfw),
						style: {
							height: "24px",
							width: "24px"
						}
					}), d.a.createElement("div", {
						className: y.a.subredditRowText
					}, d.a.createElement("div", {
						className: Object(o.a)(y.a.username, "text-neutral-content-strong")
					}, m), d.a.createElement("div", {
						className: Object(o.a)(y.a.detailText, "text-neutral-content-weak")
					}, b && d.a.createElement(d.a.Fragment, null, ((e, t) => {
						switch (e) {
							case j.v.AddNote:
								return S.fbt._("Added mod note", null, {
									hk: "4EQdI3"
								});
							case j.v.AddRemovalReason:
								return S.fbt._("Added removal reason", null, {
									hk: "3sDuRA"
								});
							case j.v.AdjustPostCrowdControlLevel:
								return S.fbt._("Adjusted post crowd control level", null, {
									hk: "3Ru27s"
								});
							case j.v.EnablePostCrowdControlFilter:
								return S.fbt._("Enabled post crowd control level", null, {
									hk: "bnrbt"
								});
							case j.v.DisablePostCrowdControlFilter:
								return S.fbt._("Disabled post crowd control level", null, {
									hk: "3Pn8Cm"
								});
							case j.v.ApproveComment:
								return S.fbt._("Approved comment", null, {
									hk: "15N4AH"
								});
							case j.v.ApproveLink:
								return S.fbt._("Approved post", null, {
									hk: "2pHeO6"
								});
							case j.v.BanUser:
								return S.fbt._("Banned user", null, {
									hk: "30ZUto"
								});
							case j.v.Collections:
								return S.fbt._("Collections", null, {
									hk: "4DLN5q"
								});
							case j.v.DeleteNote:
								return S.fbt._("Deleted mod note", null, {
									hk: "24mUGI"
								});
							case j.v.Distinguish:
								return "SubredditPost" === t ? S.fbt._("Post distinguished", null, {
									hk: "1EzjPd"
								}) : S.fbt._("Comment distinguished", null, {
									hk: "3TNqQa"
								});
							case j.v.EditFlair:
								return "SubredditPost" === t ? S.fbt._("Post flair edited", null, {
									hk: "2oj67i"
								}) : S.fbt._("User flair edited", null, {
									hk: "2WAVS8"
								});
							case j.v.IgnoreReports:
								return "SubredditPost" === t ? S.fbt._("Post reports ignored", null, {
									hk: "1HbgCS"
								}) : S.fbt._("Comment reports ignored", null, {
									hk: "3eLRwL"
								});
							case j.v.Lock:
								return "SubredditPost" === t ? S.fbt._("Post locked", null, {
									hk: "45Huvj"
								}) : S.fbt._("Comment locked", null, {
									hk: "2HzroI"
								});
							case j.v.MarkNsfw:
								return S.fbt._("Marked post NSFW", null, {
									hk: "4qw3UI"
								});
							case j.v.MarkOriginalContent:
								return S.fbt._("Marked post Original Content", null, {
									hk: "4d9kgS"
								});
							case j.v.MuteUser:
								return S.fbt._("Muted user", null, {
									hk: "31YWRG"
								});
							case j.v.RemoveComment:
								return S.fbt._("Removed comment", null, {
									hk: "2qfmzC"
								});
							case j.v.RemoveLink:
								return S.fbt._("Removed post", null, {
									hk: "2leMij"
								});
							case j.v.SetContestMode:
								return S.fbt._("Set post contest mode", null, {
									hk: "2iE074"
								});
							case j.v.SetSuggestedsort:
								return S.fbt._("Set post suggested sort", null, {
									hk: "3zw33Q"
								});
							case j.v.ShowComment:
								return S.fbt._("Showed comment", null, {
									hk: "1xvaXS"
								});
							case j.v.SpamComment:
								return S.fbt._("Marked comment as spam", null, {
									hk: "E6CLe"
								});
							case j.v.SpamLink:
								return S.fbt._("Removed post as spam", null, {
									hk: "1Al2xz"
								});
							case j.v.Spoiler:
								return S.fbt._("Added spoiler tag", null, {
									hk: "254Axx"
								});
							case j.v.Sticky:
								return "SubredditPost" === t ? S.fbt._("Post stickied", null, {
									hk: "4m9DRx"
								}) : S.fbt._("Comment stickied", null, {
									hk: "1JIPzu"
								});
							case j.v.UnbanUser:
								return S.fbt._("Unbanned user", null, {
									hk: "3U4olT"
								});
							case j.v.Unlock:
								return "SubredditPost" === t ? S.fbt._("Post unlocked", null, {
									hk: "3IXrG"
								}) : S.fbt._("Comment unlocked", null, {
									hk: "4v2jmJ"
								});
							case j.v.UnmuteUser:
								return S.fbt._("Unmuted user", null, {
									hk: "2aB30x"
								});
							case j.v.UnsetContestMode:
								return S.fbt._("Unset post contest mode", null, {
									hk: "W4Yjf"
								});
							case j.v.UnsnoozeReports:
								return "SubredditPost" === t ? S.fbt._("Post unsnoozed", null, {
									hk: "3jp8zr"
								}) : S.fbt._("Comment unsnoozed", null, {
									hk: "2x01Eq"
								});
							case j.v.Unspoiler:
								return S.fbt._("Removed spoiler tag", null, {
									hk: "2GvhDn"
								});
							case j.v.Unsticky:
								return "SubredditPost" === t ? S.fbt._("Post unstickied", null, {
									hk: "KXoHl"
								}) : S.fbt._("Comment unstickied", null, {
									hk: "dpEKC"
								});
							case j.v.UpdateRemovalReason:
							case j.v.WikiBanned:
							case j.v.WikiContributor:
							case j.v.WikiPageListed:
							case j.v.WikiPermLevel:
							case j.v.WikiRevise:
							case j.v.WikiUnbanned:
							case j.v.AcceptModeratorInvite:
							case j.v.AddCommunityTopics:
							case j.v.AddContributor:
							case j.v.AddModerator:
							case j.v.CreateAward:
							case j.v.CreateScheduledPost:
							case j.v.CreateRemovalReason:
							case j.v.CommunityStyling:
							case j.v.CommunityWidgets:
							case j.v.CreateRule:
							case j.v.DeleteAward:
							case j.v.DeleteRule:
							case j.v.DeleteScheduledPost:
							case j.v.DeleteOverriddenClassification:
							case j.v.DeleteRemovalReason:
							case j.v.DisableAward:
							case j.v.EditPostRequirements:
							case j.v.EditRule:
							case j.v.EditScheduledPost:
							case j.v.EditSettings:
							case j.v.EnableAward:
							case j.v.Events:
							case j.v.HiddenAward:
							case j.v.InviteModerator:
							case j.v.InviteSubscriber:
							case j.v.ModAwardGiven:
							case j.v.ModmailEnrollment:
							case j.v.OverrideClassification:
							case j.v.RemoveCommunityTopics:
							case j.v.RemoveContributor:
							case j.v.RemoveModerator:
							case j.v.RemoveWikiContributor:
							case j.v.ReorderModerators:
							case j.v.ReorderRules:
							case j.v.SetPermissions:
							case j.v.SnoozeReports:
							case j.v.SubmitContentRatingSurvey:
							case j.v.SubmitScheduledPost:
							case j.v.UnignoreReports:
							case j.v.UninviteModerator:
							default:
								return S.fbt._("Last mod action", null, {
									hk: "S9AMb"
								})
						}
					})(null == b ? void 0 : b.action, null === (u = null == b ? void 0 : b.target) || void 0 === u ? void 0 : u.__typename), " ", Object(E.d)(Object(v.g)(b.createdAt) / 1e3)))))
				},
				N = e => {
					let {
						mostRecentAction: t
					} = e;
					return d.a.createElement("div", {
						className: y.a.emptyTooltip
					}, d.a.createElement("img", {
						alt: S.fbt._("Snoo face image", null, {
							hk: "35RYyE"
						}),
						src: w,
						className: y.a.snooImage
					}), d.a.createElement("div", {
						className: Object(o.a)(y.a.emptyText, "text-neutral-content-strong")
					}, S.fbt._("The queue is all yours", null, {
						hk: "16NnPV"
					})), d.a.createElement("div", {
						className: Object(o.a)(y.a.emptyDetailText, "text-neutral-content-weak")
					}, S.fbt._("We’ll let you know if another mod joins you in moderating the community.", null, {
						hk: "4EOUML"
					})), t && d.a.createElement("div", {
						className: y.a.lastActionContainer
					}, d.a.createElement("div", {
						className: Object(o.a)(y.a.lastActionTitle, "text-neutral-content-weak")
					}, S.fbt._("Last Action taken", null, {
						hk: "4F3ynJ"
					})), d.a.createElement(A, {
						data: t
					})))
				},
				T = e => {
					let {
						orderedModsList: t,
						subredditName: s,
						mods: n,
						mostRecentAction: r
					} = e;
					return 0 === t.length ? d.a.createElement(N, {
						mostRecentAction: r
					}) : d.a.createElement(d.a.Fragment, null, d.a.createElement("div", {
						className: Object(o.a)(y.a.tooltipTitle, "text-neutral-content-weak")
					}, t.length, " ", S.fbt._({
						"*": "mods active in r/",
						_1: "mod active in r/"
					}, [S.fbt._plural(t.length)], {
						hk: "3o3C52"
					}), s), n && t.slice(0, 10).map(e => d.a.createElement(A, {
						data: n[e],
						key: e
					})), t.length > 10 && d.a.createElement("div", {
						className: Object(o.a)(y.a.detailText, y.a.more, "text-neutrtal-content-weak")
					}, "+", t.length - 10, " ", S.fbt._("more active moderators", null, {
						hk: "13CPFV"
					})))
				},
				R = Object(n.a)(u.a),
				M = e => e ? Object.keys(e).sort((t, s) => ((e, t, s) => {
					var n, o, r, a;
					const d = null === (o = null === (n = s[e]) || void 0 === n ? void 0 : n.lastModAction) || void 0 === o ? void 0 : o.createdAt,
						i = null === (a = null === (r = s[t]) || void 0 === r ? void 0 : r.lastModAction) || void 0 === a ? void 0 : a.createdAt,
						l = Object(v.g)(d || "");
					return Object(v.g)(i || "") - l
				})(t, s, e)).filter(t => {
					var s, n;
					return (new Date).getTime() - Object(v.g)((null === (n = null === (s = e[t]) || void 0 === s ? void 0 : s.lastModAction) || void 0 === n ? void 0 : n.createdAt) || "") < 15 * r.pb
				}) : [];
			t.default = e => {
				let {
					className: t,
					subredditId: s,
					maxMods: n,
					isModqueue: r
				} = e;
				const u = Object(i.e)(_.c),
					v = s || u,
					O = Object(i.e)(e => Object(k.h)(e, {
						subredditId: v || ""
					})) || "",
					x = Object(i.e)(e => {
						var t;
						return (null === (t = null == e ? void 0 : e.features) || void 0 === t ? void 0 : t.modActivitySummaries[v || ""]) || {}
					}),
					{
						mods: S
					} = x,
					E = Object(a.useCallback)(e => M(e), [])(S),
					[j, w] = Object(a.useState)(void 0),
					A = Object(p.a)();
				Object(a.useEffect)(() => {
					(async () => {
						var e, t, s, n;
						if (0 === E.length && O) {
							const o = null === (t = null === (e = (await Object(m.c)(A(), {
								subredditName: O
							})).body.data) || void 0 === e ? void 0 : e.subreddit) || void 0 === t ? void 0 : t.moderation;
							(null == o ? void 0 : o.actions) && (null === (n = null === (s = o.actions) || void 0 === s ? void 0 : s.edges) || void 0 === n || n.map(e => {
								var t;
								const {
									moderatorInfo: s,
									...n
								} = null == e ? void 0 : e.node, o = null === (t = null == s ? void 0 : s.name) || void 0 === t ? void 0 : t.toLowerCase();
								"reddit" !== o && "automoderator" !== o && w({
									info: s,
									lastModAction: n
								})
							}))
						}
					})()
				}, [A, E.length, O]);
				const N = (e => `mod_activity_tooltip_id-${e}`)(O || ""),
					P = Object(i.d)(),
					I = Object(h.a)(),
					D = Object(a.useCallback)(e => {
						e.stopPropagation(), e.preventDefault(), P(Object(l.h)({
							tooltipId: N
						})), I(Object(b.a)(!!r, O))
					}, [P, N, I, O, r]),
					L = Object(i.e)(e => Object(f.b)(N)(e)),
					U = Object(i.e)(g.c),
					W = Object(i.e)(C.l),
					B = n || 5;
				return d.a.createElement("div", {
					className: Object(o.a)(y.a.preview, t),
					id: N,
					onClick: D,
					"data-testid": "mod-activity-preview"
				}, S && E.length > 0 ? E.slice(0, B).map((e, t) => {
					var s, n, r, a, i, l, u, m, v, b;
					return d.a.createElement(c.a, {
						className: Object(o.a)(y.a.userIcon, {
							[y.a.noMargin]: t === E.length - 1 && !(t === B - 1 && E.length > B)
						}),
						style: {
							height: "24px",
							width: "24px"
						},
						key: null === (n = null === (s = S[e]) || void 0 === s ? void 0 : s.info) || void 0 === n ? void 0 : n.displayName,
						userName: (null === (a = null === (r = S[e]) || void 0 === r ? void 0 : r.info) || void 0 === a ? void 0 : a.displayName) || "",
						iconUrl: null === (u = null === (l = null === (i = S[e]) || void 0 === i ? void 0 : i.info) || void 0 === l ? void 0 : l.icon) || void 0 === u ? void 0 : u.url,
						isNSFW: !!(null === (b = null === (v = null === (m = S[e]) || void 0 === m ? void 0 : m.info) || void 0 === v ? void 0 : v.profile) || void 0 === b ? void 0 : b.isNsfw)
					})
				}) : U ? null : d.a.createElement(c.a, {
					className: Object(o.a)(y.a.userIcon, y.a.noMargin),
					userName: (null == W ? void 0 : W.displayName) || "",
					iconUrl: null == W ? void 0 : W.accountIcon,
					isNSFW: !1,
					style: {
						height: "24px",
						width: "24px"
					}
				}), E.length > B && d.a.createElement("div", {
					className: Object(o.a)(y.a.moreMods, "text-neutral-content-weak")
				}, "+", E.length - B), d.a.createElement(R, {
					tooltipId: N,
					isOpen: L,
					className: y.a.tooltip,
					targetPosition: ["right", "bottom"],
					tooltipPosition: ["right", "top"]
				}, d.a.createElement(T, {
					orderedModsList: E,
					subredditName: O || "",
					mods: S,
					mostRecentAction: j
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
				return N
			})), s.d(t, "SNOO_THUMBS_UP_IMAGE_PATH", (function() {
				return T
			})), s.d(t, "INACTIVE_MOD_SUMMARIES_COLLAPSED", (function() {
				return P
			})), s.d(t, "ACTIVE_MOD_SUMMARIES_COLLAPSED", (function() {
				return I
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/config.ts"),
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				d = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/addQueryParams/index.ts"),
				l = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/filterQueryParams/index.ts"),
				m = s("./src/lib/timeAgo/index.ts"),
				v = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				b = s("./src/reddit/components/SubredditIcon/index.tsx"),
				p = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/InternalLink/index.tsx"),
				_ = s("./src/reddit/helpers/graphql/helpers.ts"),
				k = s("./src/reddit/helpers/trackers/modListing.ts"),
				f = s("./src/reddit/hooks/useLocalStorage.ts"),
				C = s("./src/reddit/hooks/usePageLayer.ts"),
				O = s("./src/reddit/hooks/useTracking.ts"),
				y = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				x = s("./src/reddit/selectors/meta.ts"),
				S = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/components/ModQueueActivitySummaryCards/index.m.less"),
				j = s.n(E),
				w = s("./src/reddit/components/ModQueueActivitySummaryCards/ModActivityPreview.tsx");

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const N = `${n.a.assetPath}/img/snoo-no-mouth.png`,
				T = `${n.a.assetPath}/img/snoo-thumbs-up.png`,
				R = e => {
					let {
						subredditId: t,
						activityData: s,
						origin: n,
						currentPageUrl: c
					} = e;
					var v;
					const p = Object(d.e)(e => Object(S.Y)(e, {
							subredditId: t
						})),
						h = Object(O.a)(),
						f = Object(r.useCallback)(() => {
							h(Object(k.b)(Object.keys((null == s ? void 0 : s.mods) || {}).length > 0, p.name, !0))
						}, [h, s.mods, p.name]);
					return a.a.createElement(g.default, {
						className: Object(l.a)(j.a.subredditRow, "hover:bg-neutral-background-hover"),
						key: null == p ? void 0 : p.displayText,
						to: Object(i.a)(Object(u.a)(`${n}${c}`, ["after", "before", "page", "profile", "subreddit"]), {
							subreddit: null == p ? void 0 : p.name
						}),
						onClick: f
					}, a.a.createElement(b.b, {
						className: j.a.subredditIcon,
						iconUrl: "",
						subredditOrProfile: p
					}), a.a.createElement("div", {
						className: j.a.subredditRowText
					}, a.a.createElement("div", {
						className: Object(l.a)(j.a.subredditName, "text-neutral-content-strong")
					}, null == p ? void 0 : p.displayText), a.a.createElement("div", {
						className: Object(l.a)(j.a.detailText, "text-neutral-content-weak")
					}, (null === (v = null == s ? void 0 : s.sub) || void 0 === v ? void 0 : v.lastModActionAt) ? a.a.createElement(a.a.Fragment, null, o.fbt._("Last action", null, {
						hk: "2lt40w"
					}), " ", Object(m.d)(Object(_.g)(s.sub.lastModActionAt) / 1e3)) : o.fbt._("No recent actions", null, {
						hk: "1qiZq9"
					}))), a.a.createElement(w.default, {
						subredditId: t,
						maxMods: 3,
						isModqueue: !0
					}))
				},
				M = e => {
					let {
						subredditIdsList: t,
						totalSubs: s,
						modActivitySummaryData: n,
						isActive: r,
						origin: d,
						currentPageUrl: i,
						isCollapsed: u,
						setIsCollapsed: m
					} = e;
					const v = t.sort((e, t) => ((e, t, s) => {
						var n, o, r, a;
						const d = Object(_.g)(null === (o = null === (n = s[e]) || void 0 === n ? void 0 : n.sub) || void 0 === o ? void 0 : o.lastModActionAt),
							i = Object(_.g)(null === (a = null === (r = s[t]) || void 0 === r ? void 0 : r.sub) || void 0 === a ? void 0 : a.lastModActionAt);
						return d > i ? -1 : d < i ? 1 : 0
					})(e, t, n)).filter(e => {
						var t, s;
						return !r || (new Date).getTime() - Object(_.g)((null === (s = null === (t = n[e]) || void 0 === t ? void 0 : t.sub) || void 0 === s ? void 0 : s.lastModActionAt) || "") < 15 * c.pb
					}).slice(0, 10);
					return a.a.createElement(p.a, {
						title: a.a.createElement("div", {
							className: j.a.titleContainer
						}, r ? o.fbt._("Actively being moderated", null, {
							hk: "43BqG4"
						}) : o.fbt._("Inactive", null, {
							hk: "1MbMLw"
						})),
						className: j.a.widget,
						contentOnly: !0,
						headerButton: a.a.createElement("div", {
							className: j.a.headerButtonContainer
						}, a.a.createElement(y.a, {
							className: Object(l.a)(j.a.headerButtonIcon, {
								[j.a.up]: u
							}, "text-neutral-content-strong")
						})),
						headerStyles: {
							borderRadius: 4
						},
						onHeaderClick: () => m(u ? "false" : "true"),
						redditStyle: !0
					}, !u && a.a.createElement("div", {
						className: j.a.widgetContent
					}, 0 === v.length && a.a.createElement("div", {
						className: j.a.emptyCard
					}, a.a.createElement("img", {
						alt: o.fbt._("Snoo face image", null, {
							hk: "35RYyE"
						}),
						src: r ? N : T,
						className: j.a.snooImage
					}), a.a.createElement("div", {
						className: Object(l.a)(j.a.emptyText, "text-neutral-content-strong")
					}, r ? o.fbt._("No communities are being moderated", null, {
						hk: "1cAhYD"
					}) : o.fbt._("It’s all covered", null, {
						hk: "32tVnu"
					})), a.a.createElement("div", {
						className: Object(l.a)(j.a.emptyDetailText, "text-neutral-content-weak")
					}, r ? o.fbt._("Look up above at the “inactive” section to see what communities might require moderation.", null, {
						hk: "2yELqG"
					}) : o.fbt._("Jump into the “actively being moderated” section below to see where else you could jump in.", null, {
						hk: "2t7nuw"
					}))), v.map(e => {
						const t = n[e];
						return a.a.createElement(R, {
							key: e,
							subredditId: e,
							activityData: t,
							origin: d,
							currentPageUrl: i
						})
					}), s > 10 && a.a.createElement("div", {
						className: Object(l.a)(j.a.detailText, j.a.more, "text-neutral-content-weak")
					}, "+", s - 10, " ", r ? o.fbt._("more being moderated", null, {
						hk: "2tAu2k"
					}) : o.fbt._("more not being moderated", null, {
						hk: "1Djx0e"
					}))))
				},
				P = "inactive_mod_summaries_collapsed",
				I = "active_mod_summaries_collapsed";
			t.default = () => {
				const e = Object(d.e)(e => {
						var t;
						return null === (t = null == e ? void 0 : e.features) || void 0 === t ? void 0 : t.modActivitySummaries
					}) || {},
					t = [],
					s = [];
				let n = 0,
					o = 0;
				Object.keys(e).map(r => {
					e[r].sub.activeMods.length > 0 ? (n < 10 && t.push(r), n++) : (o < 10 && s.push(r), o++)
				});
				const r = Object(d.e)(x.k),
					i = Object(C.a)(),
					l = {
						origin: r,
						currentPageUrl: Object(h.f)(i),
						modActivitySummaryData: e
					},
					[c, u] = Object(f.a)(P, "false"),
					[m, b] = Object(f.a)(I, "false");
				return a.a.createElement("span", {
					"data-testid": "mod-activity-cards"
				}, a.a.createElement(v.a, null, a.a.createElement(M, A({
					subredditIdsList: s,
					totalSubs: o,
					isCollapsed: "true" === c,
					setIsCollapsed: u
				}, l))), a.a.createElement(v.a, null, a.a.createElement(M, A({
					isActive: !0,
					subredditIdsList: t,
					totalSubs: n,
					isCollapsed: "true" === m,
					setIsCollapsed: b
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
			var n = s("./src/reddit/components/SidebarSpacer/index.m.less"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx");
			t.a = r.a.div("Component", o.a)
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/components/SEOTitle/index.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/helpers/trackers/widgets.ts"),
				b = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				p = s("./src/reddit/selectors/experiments/topPosts.ts"),
				h = s("./src/reddit/selectors/structuredStyles.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/models/Theme/index.ts"),
				k = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const f = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(k.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				C = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(k.a)(e).widgetColors.sidebarWidgetHeaderColor,
				O = e => {
					const t = f(e);
					return Object(_.f)(t)
				},
				y = e => {
					const t = C(e);
					return Object(_.f)(t)
				};
			var x = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				S = s.n(x);
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = Object(u.v)(), w = Object(r.b)(() => Object(a.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(u.o)(e, t) || void 0,
						n = t.redditStyle || Object(h.l)(e, {
							subredditId: s
						}),
						o = Object(g.eb)(e);
					return n || o
				},
				nigtmode: g.eb,
				subredditId: u.o,
				topPostVariant: p.d
			}));
			class A extends o.a.Component {
				constructor() {
					super(...arguments), this.contentRef = o.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(v.b)(e, t)), this.setState({
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
					return e.backgroundColor = f(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = O(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = C(this.props), e.color = e.fill = y(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: r,
						id: a,
						onClick: i,
						onHeaderClick: c,
						title: u,
						titleClassName: v,
						truncateThreshold: b
					} = this.props, p = s ? S.a.widgetContentOnly : S.a.widgetContent, h = !n && this.props.styles, g = h ? this.getWidgetBackgroundStyles() : {}, _ = h ? this.getWidgetHeaderStyles() : {};
					return o.a.createElement("div", {
						className: Object(d.a)(t, S.a.widgetBackground, {
							[S.a.redditStyle]: n,
							[S.a.clickable]: !!i,
							[S.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: i,
						style: g
					}, u && o.a.createElement("div", {
						className: Object(d.a)(S.a.widgetHeader, {
							[S.a.clickable]: !!c
						}),
						id: a,
						style: {
							..._,
							...this.props.headerStyles
						},
						onClick: c
					}, o.a.createElement("div", {
						className: Object(d.a)(S.a.widgetTitle, v)
					}, o.a.createElement(l.b, {
						type: l.a.Widget
					}, u)), r), o.a.createElement("div", {
						className: Object(d.a)(p, {
							[S.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? b : "none"
						}
					}, e), this.state.isTruncated && o.a.createElement(m.r, {
						className: S.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, E._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = j(w(Object(i.a)(Object(c.c)(A))))
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
			var n, o, r = s("./src/reddit/constants/tracking.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(o || (o = {}));
			const d = (e, t) => s => ({
					source: o.COMMUNITY_WIDGETS,
					action: r.c.CLICK,
					noun: n.SEE_MORE,
					widget: Object(a.yb)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...a.o
				}),
				i = (e, t) => s => ({
					source: o.POST,
					action: r.c.CLICK,
					noun: n.REREDDIT_PROMO,
					post: a.K(s, e),
					subreddit: a.kb(s),
					...t && {
						banner: {
							buttonText: t,
							id: n.REREDDIT_PROMO
						}
					},
					...a.o(s)
				}),
				l = () => e => ({
					source: o.SIDEBAR,
					action: r.c.VIEW,
					noun: n.TOPICS_WIDGET,
					...a.o(e)
				}),
				c = e => t => ({
					source: o.TOPICS_WIDGET,
					action: r.c.CLICK,
					noun: n.TOPIC,
					...a.o(t),
					topicMetadata: {
						displayName: e
					}
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ModQueueActivitySummaryCards.21c12b5c1ced180a0f02.js.map